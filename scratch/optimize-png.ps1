Add-Type -AssemblyName System.Drawing

function Optimize-Png([string]$filePath, [int]$maxWidth) {
    $raw = [System.IO.File]::ReadAllBytes($filePath)
    $ms = New-Object System.IO.MemoryStream(,$raw)
    $img = [System.Drawing.Image]::FromStream($ms)
    
    $targetW = [Math]::Min($img.Width, $maxWidth)
    $targetH = [int]($img.Height * ($targetW / $img.Width))
    
    $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, 0, 0, $targetW, $targetH)
    
    $outPath = $filePath + ".tmp.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $g.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    $ms.Dispose()
    
    Move-Item -Force $outPath $filePath
    Write-Host "Optimized PNG $filePath =>" (Get-Item $filePath).Length "bytes"
}

Optimize-Png "d:\maximumpixel\public\assets\mascot-wave.png" 640
Optimize-Png "d:\maximumpixel\public\assets\logo.png" 120
