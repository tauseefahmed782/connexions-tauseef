$lines = Get-Content -Path 'e:\connexions-tauseef\index.html'
$modelNames = @(
'iPhone 17e','iPhone 17 Pro Max','iPhone 17 Pro','iPhone Air','iPhone 17','iPhone 16e','iPhone 16 Pro Max','iPhone 16 Pro','iPhone 16 Plus','iPhone 16','iPhone SE (3rd generation)','iPhone 15 Pro Max','iPhone 15 Pro','iPhone 15 Plus','iPhone 15','iPhone 14 Pro Max','iPhone 14 Pro','iPhone 14 Plus','iPhone 14','iPhone 13 Pro Max','iPhone 13 Pro','iPhone 13','iPhone 13 mini','iPhone 12 Pro Max','iPhone 12 Pro','iPhone 12','iPhone 12 mini','iPhone 11 Pro Max','iPhone 11 Pro','iPhone 11','iPhone SE (2nd generation)','iPhone XS Max','iPhone XS','iPhone XR','iPhone X','iPhone 8 Plus','iPhone 8','iPhone 7 Plus','iPhone 7'
)
function Get-RowCells($start, $end) {
  $cells = @{}
  $currentIndex = $null
  $buffer = @()
  for ($i = $start; $i -le $end; $i++) {
    $line = $lines[$i]
    if ($line -match 'role="cell" class="(?:first-child )?compare-column product-(\d+)') {
      if ($null -ne $currentIndex) { $cells[$currentIndex] = ($buffer -join "`n") }
      $currentIndex = [int]$matches[1]
      $buffer = @()
    }
    if ($null -ne $currentIndex) { $buffer += $line }
  }
  if ($null -ne $currentIndex) { $cells[$currentIndex] = ($buffer -join "`n") }
  return $cells
}
function CleanText([string]$text) {
  $text = $text -replace '<sup[^>]*>.*?</sup>', '?'
  $text = $text -replace '<span[^>]*class="mdash[^>]*">.*?</span>', '�'
  $text = $text -replace '<span[^>]*class="visuallyhidden"[^>]*>.*?</span>', ''
  $text = $text -replace '<br\s*/?>', '|'
  $text = $text -replace '&nbsp;', ' '
  $text = $text -replace '&amp;', '&'
  $text = $text -replace '‑', '-'
  $text = $text -replace '″', '"'
  $text = $text -replace '◊', '?'
  $text = $text -replace '—', '�'
  $text = $text -replace ' ', ' '
  $text = $text -replace '<[^>]+>', ''
  $text = $text -replace '\s+', ' '
  return $text.Trim()
}
function Extract-Image($cell) {
  if ($cell -match 'src="\./images/([^"\?]+?_large\.png)"') { return $matches[1] }
  return $null
}
function Extract-Lines($cell) {
  $caps = [regex]::Matches($cell, '<span class="stat-caption copy">(.*?)</span>', 'Singleline')
  $result = @()
  foreach ($m in $caps) {
    $clean = CleanText $m.Groups[1].Value
    if ($clean) {
      foreach ($part in ($clean -split '\|')) {
        $part = $part.Trim()
        if ($part) { $result += $part }
      }
    }
  }
  return $result
}
function Extract-StatValue($cell) {
  if ($cell -match '<span class="stat-value">(?:<span[^>]*>)?(.*?)(?:</span>)?</span>') { return (CleanText $matches[1]) }
  return $null
}
function Extract-ColorInfo($cell) {
  $swatches = @()
  $swatchMatches = [regex]::Matches($cell, 'aria-label="([^"]+)" style="background-color: rgb\((\d+), (\d+), (\d+)\)"')
  foreach ($m in $swatchMatches) {
    $r = [int]$m.Groups[2].Value
    $g = [int]$m.Groups[3].Value
    $b = [int]$m.Groups[4].Value
    $swatches += ('#{0:X2}{1:X2}{2:X2}' -f $r,$g,$b)
  }
  $label = $null
  if ($cell -match '<p class="channel-colornav-label copy">(.*?)</p>') { $label = CleanText $matches[1] }
  return @{ colors = $swatches; label = $label }
}
$sections = @{
  images = Get-RowCells 7488 7768
  colors = Get-RowCells 7769 8387
  display = Get-RowCells 8513 9198
  design = Get-RowCells 9202 9723
  chip = Get-RowCells 9727 10238
  battery = Get-RowCells 10242 10788
  frontCamera = Get-RowCells 10792 11646
  camera = Get-RowCells 11650 12740
  zoom = Get-RowCells 12744 13212
  intelligence = Get-RowCells 13216 13600
  safety = Get-RowCells 13604 14189
  usb = Get-RowCells 14193 14700
}
$data = for ($i = 0; $i -lt $modelNames.Count; $i++) {
  $colorInfo = Extract-ColorInfo $sections.colors[$i]
  [pscustomobject]@{
    index = $i
    name = $modelNames[$i]
    image = Extract-Image $sections.images[$i]
    colors = $colorInfo.colors
    colorsLabel = $colorInfo.label
    displayValue = Extract-StatValue $sections.display[$i]
    displayLines = Extract-Lines $sections.display[$i]
    designIcon = Extract-Image $sections.design[$i]
    designLines = Extract-Lines $sections.design[$i]
    chipIcon = Extract-Image $sections.chip[$i]
    chipLines = Extract-Lines $sections.chip[$i]
    batteryIcon = Extract-Image $sections.battery[$i]
    batteryLines = Extract-Lines $sections.battery[$i]
    frontCameraIcon = Extract-Image $sections.frontCamera[$i]
    frontCameraLines = Extract-Lines $sections.frontCamera[$i]
    cameraIcon = Extract-Image $sections.camera[$i]
    cameraLines = Extract-Lines $sections.camera[$i]
    zoomIcon = Extract-Image $sections.zoom[$i]
    zoomLines = Extract-Lines $sections.zoom[$i]
    intelligenceIcon = Extract-Image $sections.intelligence[$i]
    intelligenceLines = Extract-Lines $sections.intelligence[$i]
    safetyIcon = Extract-Image $sections.safety[$i]
    safetyLines = Extract-Lines $sections.safety[$i]
    usbIcon = Extract-Image $sections.usb[$i]
    usbLines = Extract-Lines $sections.usb[$i]
  }
}
$data | Select-Object -First 8 | ConvertTo-Json -Depth 6
