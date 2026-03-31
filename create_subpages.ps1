$pairs = @(
  "personal-investigation|pre-matrimonial-investigations|Pre-Matrimonial Investigations|Comprehensive pre-matrimonial investigation services to verify your future partner before marriage.",
  "personal-investigation|post-matrimonial-surveillance|Post-Matrimonial Surveillance|Discreet post-matrimonial surveillance services to uncover the truth in your marital relationship.",
  "personal-investigation|loyalty-tests|Loyalty Tests|Professional loyalty test services to verify the faithfulness and trust of your partner.",
  "personal-investigation|missing-person-investigations|Missing Person Investigations|Expert missing person tracing services to locate and reunite you with missing individuals.",
  "personal-investigation|background-checks|Background Checks|Thorough personal background check services for safe and informed decisions.",
  "corporate-investigation|employee-background-verification|Employee Background Verification|Reliable employee background verification services to protect your organization during hiring.",
  "corporate-investigation|fraud-investigation-company-support|Fraud Investigation|Expert corporate fraud investigation services to detect and document fraud within your organization.",
  "corporate-investigation|due-diligence-services|Due Diligence Services|Comprehensive due diligence investigation services to verify business partners and opportunities.",
  "corporate-investigation|asset-tracing|Asset Tracing|Professional asset tracing services to locate hidden or undisclosed assets for recovery.",
  "corporate-investigation|undercover-operations|Undercover Operations|Expert undercover investigation services to expose internal misconduct and corporate fraud.",
  "tscm-services|corporate-tscm-services|Corporate TSCM Services|Advanced corporate TSCM sweep services to protect boardrooms and offices from unauthorized surveillance.",
  "tscm-services|residential-tscm-services|Residential TSCM Services|Professional residential TSCM services to detect hidden surveillance devices in your home.",
  "tscm-services|corporate-bug-sweeping|Corporate Bug Sweeping|Expert corporate bug sweeping services to detect listening devices in your business premises.",
  "tscm-services|home-bug-sweep|Home Bug Sweep|Comprehensive home bug sweep services to secure your residence from hidden recording devices.",
  "tscm-services|debugging-service|Debugging Service|Full-spectrum debugging services to eliminate all electronic surveillance threats from any environment.",
  "risk-management|ip-protection|IP Protection|Expert intellectual property protection investigation services to safeguard your IP from theft and infringement.",
  "risk-management|brand-protection|Brand Protection|Comprehensive brand protection services to defend your brand from counterfeiting and unauthorized use.",
  "risk-management|risk-advisory|Risk Advisory|Strategic risk advisory services to identify, assess, and mitigate threats to your business.",
  "risk-management|business-continuity-bcms|Business Continuity BCMS|Business continuity management support and investigative intelligence to strengthen organizational resilience.",
  "risk-management|forensic-investigation|Forensic Investigation|Expert forensic investigation services delivering evidence-grade findings for legal and corporate proceedings.",
  "surveillance-shadowing|covid-monitoring|Covid Monitoring|Specialized health protocol compliance monitoring services for organizations and operational environments.",
  "surveillance-shadowing|employee-surveillance|Employee Surveillance|Legally compliant employee surveillance services to protect your organization from internal risk.",
  "surveillance-shadowing|matrimonial-surveillance|Matrimonial Surveillance|Discreet matrimonial surveillance services to uncover the truth in sensitive marital situations.",
  "surveillance-shadowing|fraud-investigation-monitoring|Fraud Investigation Monitoring|Surveillance-led fraud monitoring services to track, document, and expose fraudulent activities.",
  "surveillance-shadowing|physical-surveillance|Physical Surveillance|Expert physical surveillance services delivering real-time intelligence for any investigation."
)

foreach ($pair in $pairs) {
  $parts = $pair -split '\|'
  $parent = $parts[0]
  $slug   = $parts[1]
  $label  = $parts[2]
  $desc   = $parts[3]

  $dir = "src\app\services\$parent\$slug"
  New-Item -ItemType Directory -Force -Path $dir | Out-Null

  $content = "import SubServiceDetailPage from `"@/components/services/SubServiceDetailPage`";`nimport { subServiceMap } from `"@/app/services/subServiceData`";`n`nexport const metadata = {`n  title: `"$label | H S Detectives`",`n  description: `"$desc`",`n};`n`nexport default function Page() {`n  return <SubServiceDetailPage service={subServiceMap[`"$slug`"]} />;`n}`n"

  Set-Content -Path "$dir\page.tsx" -Value $content -Encoding UTF8
  Write-Host "Created: $dir\page.tsx"
}

Write-Host "Done! All 25 subpages created."
