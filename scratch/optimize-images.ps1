Add-Type -AssemblyName System.Drawing

function Optimize-Jpeg([string]$filePath, [int]$maxWidth, [long]$quality) {
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
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
    
    $outPath = $filePath + ".tmp.jpg"
    $bmp.Save($outPath, $codec, $encoderParams)
    
    $g.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    $ms.Dispose()
    
    Move-Item -Force $outPath $filePath
    Write-Host "Optimized $filePath =>" (Get-Item $filePath).Length "bytes"
}

Optimize-Jpeg "d:\maximumpixel\public\assets\projects\cafe-reel.jpg" 1080 75
Optimize-Jpeg "d:\maximumpixel\public\assets\studio-bg.jpg" 1280 75
