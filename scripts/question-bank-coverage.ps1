$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$structuredFiles = Get-ChildItem -Path "question-bank" -Filter "*.md" |
  Where-Object {
    $_.Name -notin @(
      "README.md",
      "problem-template.md",
      "module-06-tensors-typed-relations-pilot.md"
    )
  } |
  Sort-Object Name

$counts = @{}
foreach ($file in $structuredFiles) {
  $text = Get-Content -LiteralPath $file.FullName -Raw
  foreach ($match in [regex]::Matches($text, '(?m)^## (\d{2})\.')) {
    $module = $match.Groups[1].Value
    if (-not $counts.ContainsKey($module)) {
      $counts[$module] = 0
    }
    $counts[$module]++
  }
}

$pilotPath = "question-bank\module-06-tensors-typed-relations-pilot.md"
$pilotProblemCount = 0
if (Test-Path $pilotPath) {
  $pilotText = Get-Content -LiteralPath $pilotPath -Raw
  $pilotProblemCount = [regex]::Matches($pilotText, '(?m)^### Problem 6\.').Count
}

Write-Output "Structured question-bank entries by module"
Write-Output "------------------------------------------"
for ($i = 1; $i -le 31; $i++) {
  $module = "{0:D2}" -f $i
  $count = if ($counts.ContainsKey($module)) { $counts[$module] } else { 0 }
  $note = ""
  if ($i -eq 6 -and $pilotProblemCount -gt 0) {
    $note = " ($pilotProblemCount pilot problems, not structured reserve entries)"
  } elseif ($count -lt 4) {
    $note = " (expansion priority)"
  }

  Write-Output ("{0}: {1}{2}" -f $module, $count, $note)
}
