$files = Get-ChildItem -Path 'C:\Users\Admin\Desktop\detective\src' -Recurse -Include '*.tsx','*.ts'

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    $updated = $content `
        -replace 'text-gold-light', 'text-accent-light' `
        -replace 'text-gold-dark', 'text-accent-dark' `
        -replace 'bg-gold-light', 'bg-accent-light' `
        -replace 'bg-gold-dark', 'bg-accent-dark' `
        -replace 'from-gold-dark', 'from-accent-dark' `
        -replace 'via-gold-dark', 'via-accent-dark' `
        -replace 'to-gold-dark', 'to-accent-dark' `
        -replace 'from-gold-light', 'from-accent-light' `
        -replace 'via-gold-light', 'via-accent-light' `
        -replace 'to-gold-light', 'to-accent-light' `
        -replace 'via-gold/', 'via-accent/' `
        -replace 'from-gold/', 'from-accent/' `
        -replace 'to-gold/', 'to-accent/' `
        -replace 'hover:bg-gold/', 'hover:bg-accent/' `
        -replace 'hover:border-gold/', 'hover:border-accent/' `
        -replace 'hover:text-gold/', 'hover:text-accent/' `
        -replace 'text-gold/', 'text-accent/' `
        -replace 'bg-gold/', 'bg-accent/' `
        -replace 'border-gold/', 'border-accent/' `
        -replace 'text-gold(?=[^-/\w])', 'text-accent' `
        -replace 'bg-gold(?=[^-/\w])', 'bg-accent' `
        -replace 'border-gold(?=[^-/\w])', 'border-accent' `
        -replace 'hover:bg-gold(?=[^-/\w])', 'hover:bg-accent' `
        -replace 'hover:border-gold(?=[^-/\w])', 'hover:border-accent' `
        -replace 'hover:text-gold(?=[^-/\w])', 'hover:text-accent' `
        -replace 'focus:border-gold(?=[^-/\w])', 'focus:border-accent' `
        -replace 'group-hover:text-gold(?=[^-/\w])', 'group-hover:text-accent' `
        -replace 'group-hover:border-gold(?=[^-/\w])', 'group-hover:border-accent' `
        -replace 'from-gold(?=[^-/\w])', 'from-accent' `
        -replace 'via-gold(?=[^-/\w])', 'via-accent' `
        -replace 'to-gold(?=[^-/\w])', 'to-accent' `
        -replace 'bg-gold(?=[^-/\w])', 'bg-accent' `
        -replace 'gold-text', 'accent-text' `
        -replace 'border-border-gold', 'border-accent/25' `
        -replace '"gold"', '"accent"' `
        -replace "'gold'", "'accent'"

    if ($updated -ne $content) {
        Set-Content $file.FullName $updated -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "Done!"
