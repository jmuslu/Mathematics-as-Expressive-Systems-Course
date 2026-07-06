$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$nodeCandidates = @(
  "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe",
  "node"
)

$node = $null
foreach ($candidate in $nodeCandidates) {
  try {
    $cmd = Get-Command $candidate -ErrorAction Stop
    $node = $cmd.Source
    break
  } catch {
    if (Test-Path $candidate) {
      $node = $candidate
      break
    }
  }
}

if (-not $node) {
  throw "Could not find node executable for docs/app.js syntax check."
}

& $node --check "docs\app.js" | Out-Null

$moduleFiles = Get-ChildItem -Path "modules" -Filter "*.md" | Sort-Object Name
$issues = New-Object System.Collections.Generic.List[string]
$definedProblems = @{}
$moduleContents = @{}

foreach ($file in $moduleFiles) {
  $moduleMatch = [regex]::Match($file.Name, '^(\d+)')
  if (-not $moduleMatch.Success) {
    $issues.Add("$($file.FullName): filename does not start with a module number")
    continue
  }

  $moduleNumber = [int]$moduleMatch.Groups[1].Value
  $content = Get-Content -LiteralPath $file.FullName
  $moduleContents[$file.Name] = $content

  if (-not ($content | Select-String -Pattern '^## Hand Problem Trail' -Quiet)) {
    $issues.Add("$($file.Name): missing ## Hand Problem Trail")
  }

  $problemMatches = $content | Select-String -Pattern '^### Problem (\d+)\.(\d+)'
  $answerChecks = ($content | Select-String -Pattern '^Answer check').Count

  if ($problemMatches.Count -ne 12) {
    $issues.Add("$($file.Name): expected 12 problems, found $($problemMatches.Count)")
  }

  if ($answerChecks -ne 12) {
    $issues.Add("$($file.Name): expected 12 Answer check markers, found $answerChecks")
  }

  $seen = @{}
  foreach ($matchInfo in $problemMatches) {
    $match = [regex]::Match($matchInfo.Line, '^### Problem (\d+)\.(\d+)')
    $prefix = [int]$match.Groups[1].Value
    $index = [int]$match.Groups[2].Value

    if ($prefix -ne $moduleNumber) {
      $issues.Add("$($file.Name): line $($matchInfo.LineNumber) uses module prefix $prefix, expected $moduleNumber")
    }

    $seen[$index] = $true
    $definedProblems["$prefix.$index"] = $true
  }

  for ($i = 1; $i -le 12; $i++) {
    if (-not $seen.ContainsKey($i)) {
      $issues.Add("$($file.Name): missing Problem $moduleNumber.$i")
    }
  }
}

foreach ($file in $moduleFiles) {
  $content = $moduleContents[$file.Name]
  for ($lineIndex = 0; $lineIndex -lt $content.Count; $lineIndex++) {
    $line = $content[$lineIndex]
    foreach ($match in [regex]::Matches($line, 'Problem (\d+)\.(\d+)')) {
      $problemId = "$($match.Groups[1].Value).$($match.Groups[2].Value)"
      if (-not $definedProblems.ContainsKey($problemId)) {
        $issues.Add("$($file.Name): line $($lineIndex + 1) references missing Problem $problemId")
      }
    }
  }
}

$questionBankReadme = "question-bank\README.md"
if (-not (Test-Path $questionBankReadme)) {
  $issues.Add("question-bank: missing README.md")
} else {
  $bankFiles = Get-ChildItem -Path "question-bank" -Filter "*.md" |
    Where-Object { $_.Name -ne "README.md" } |
    Sort-Object Name
  $bankReadmeText = Get-Content -LiteralPath $questionBankReadme -Raw
  $filesSection = [regex]::Match($bankReadmeText, '(?s)## Files\s+(.*?)\s+## Promotion Rule')
  $indexedBankFiles = @{}

  if (-not $filesSection.Success) {
    $issues.Add("question-bank/README.md: missing ## Files section before ## Promotion Rule")
  } else {
    foreach ($match in [regex]::Matches($filesSection.Groups[1].Value, '`([^`]+\.md)`')) {
      $indexedBankFiles[$match.Groups[1].Value] = $true
    }
  }

  foreach ($file in $bankFiles) {
    if (-not $indexedBankFiles.ContainsKey($file.Name)) {
      $issues.Add("question-bank/README.md: missing index entry for $($file.Name)")
    }
  }

  foreach ($indexedName in $indexedBankFiles.Keys) {
    if (-not (Test-Path (Join-Path "question-bank" $indexedName))) {
      $issues.Add("question-bank/README.md: indexes missing file $indexedName")
    }
  }

  foreach ($file in $bankFiles) {
    if ($file.Name -eq "problem-template.md") {
      continue
    }

    $bankContent = Get-Content -LiteralPath $file.FullName -Raw
    $entryMatches = [regex]::Matches($bankContent, '(?m)^## \d{2}\.[^\r\n]+')

    for ($i = 0; $i -lt $entryMatches.Count; $i++) {
      $entryStart = $entryMatches[$i].Index
      $entryEnd = if ($i + 1 -lt $entryMatches.Count) {
        $entryMatches[$i + 1].Index
      } else {
        $bankContent.Length
      }
      $entryText = $bankContent.Substring($entryStart, $entryEnd - $entryStart)
      $entryName = $entryMatches[$i].Value.Trim()

      foreach ($requiredPattern in @('(?m)^Source use:', '(?m)^License note:', '(?m)^Verification status:', '(?m)^## Answer Check\s*$')) {
        if (-not [regex]::IsMatch($entryText, $requiredPattern)) {
          $issues.Add("$($file.Name): $entryName missing required bank field matching $requiredPattern")
        }
      }
    }
  }
}

if ($issues.Count -gt 0) {
  $issues | ForEach-Object { Write-Error $_ }
  exit 1
}

Write-Output "Course audit passed: $($moduleFiles.Count) modules, 12 problems and answer checks each, with valid problem references, question-bank index, and bank metadata."
