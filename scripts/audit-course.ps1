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

if ($issues.Count -gt 0) {
  $issues | ForEach-Object { Write-Error $_ }
  exit 1
}

Write-Output "Course audit passed: $($moduleFiles.Count) modules, 12 problems and answer checks each, with valid problem references."
