import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import Image from "next/image";

export const metadata = {
  title: "About Us | H S Detectives Agency Mumbai",
  description:
    "About H S Detectives Agency Mumbai, India's premier private investigation and intelligence firm.",
};

const corporateInfo = [
  { label: "Founded", value: "2011" },
  { label: "Founder", value: "Wahid Shaikh" },
  { label: "Base", value: "Mumbai, Maharashtra" },
  { label: "Specialization", value: "Corporate, Matrimonial, and Civil Investigations" },
  { label: "Technical Wing", value: "IndieBim Technology Solutions Pvt. Ltd." },
  { label: "Operating Principle", value: "Absolute Confidentiality" },
];

const leadershipTeam = [
  {
    name: "Wahid Shaikh",
    role: "Founder & Chief Investigator",
    description:
      "With over 12 years of specialized experience in private intelligence and risk management, Wahid Shaikh is the visionary behind H S Detectives Agency Mumbai. His expertise spans asset tracing, corporate due diligence, and complex matrimonial investigations. As the head of the group, he also leads IndieBim Technology Solutions Private Limited, ensuring that every physical investigation is supported by world-class technical counter-measures.",
  },
  {
    name: "K.S. Shareef",
    role: "Strategic Consultant (Retired DCP, Crime Branch)",
    description:
      "Bringing the weight of elite law enforcement to our agency, K.S. Shareef served as the Deputy Commissioner of Police for the Crime Branch, Maharashtra. His legendary career in criminal investigation gives H S Detectives Agency Mumbai a unique strategic advantage. He ensures that our investigative methodologies are legally sound, forensic-grade, and capable of standing up to the highest levels of scrutiny.",
  },
  {
    name: "RK Chaudhry",
    role: "Senior Technical Liaison (TSCM Expert)",
    description:
      "A veteran with 15 years of deep-domain experience, RK Chaudhry bridges the gap between field work and technical security. As a master of debugging from IndieBim Technology Solutions Private Limited, he ensures that our clients' private environments remain clean while our field detectives gather the intelligence needed to solve their cases.",
  },
];

const technicalExperts = [
  {
    name: "Prasanna Venkatesan",
    role: "Cyber Risk Management Expert",
    description:
      "USA educated and trained with 13+ years of experience. An IRCA Accredited and BSI Certified Lead Auditor who ensures that all digital evidence gathered by H S Detectives meets global privacy and security standards.",
  },
  {
    name: "Dev Dhankar",
    role: "Ethical Hacker & Offensive Security",
    description:
      "The technical engine behind our digital forensics. Certified in Practical Ethical Hacking (USA), he ensures that network vulnerabilities and digital leaks are identified and plugged during high-stakes corporate investigations.",
  },
];

const reasons = [
  {
    title: "Integrated Intelligence",
    description:
      'We are the only firm in India that seamlessly combines the "Human Intelligence" of H S Detectives with the "Military-Grade Technology" of IndieBim Technology Solutions Private Limited.',
  },
  {
    title: "Legal & Ethical Rigor",
    description:
      "Guided by a retired DCP, our processes are designed to remain compliant with Indian laws and focused on ethically gathered, decision-ready evidence.",
  },
  {
    title: "Pan-India Field Network",
    description:
      "While based in Mumbai, our rapid-response teams cover Delhi NCR, Bangalore, Pune, and Hyderabad, providing ground intelligence wherever the truth is hidden.",
  },
  {
    title: "Absolute Confidentiality",
    description:
      'We operate with a "Zero-Leak" policy. Your case, your identity, and your data are protected by advanced security protocols and disciplined professional handling.',
  },
];

const officePresence = [
  "Mumbai",
  "Delhi NCR",
  "Bangalore",
  "Pune",
  "Hyderabad",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        <PageHero
          title="About The Agency"
          subtitle="India's premier private investigation and intelligence firm built on integrity, precision, and absolute confidentiality."
          image="https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[{ label: "About", href: "/about" }]}
        />

        <section className="py-24 bg-linear-to-b from-background to-neutral-50 dark:to-neutral-900/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-12 mb-12">
                <h2 className="font-playfair text-4xl md:text-5xl border-l-4 border-red-600 pl-6 mb-8 uppercase tracking-tight">
                  About H S Detectives Agency Mumbai
                </h2>
                <div className="space-y-6 max-w-5xl">
                  <p className="font-inter text-xl text-foreground/80 leading-relaxed">
                    At <span className="font-bold text-foreground">H S Detectives Agency Mumbai</span>, we do not just find information; we deliver the absolute truth. With a legacy built on integrity, precision, and a 100% case-solving ratio, we are Mumbai's leading agency for corporate, matrimonial, and civil investigations.
                  </p>
                  <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                    Our strength lies in a multi-disciplinary team of veteran law enforcement officers, legal strategists, and technical experts from our specialized division, <span className="font-semibold text-foreground">IndieBim Technology Solutions Private Limited</span>.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white dark:bg-black border border-neutral-200 dark:border-white/10 rounded-2xl p-8 shadow-xl sticky top-24">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative w-24 h-24 mb-4 border-2 border-red-600 rounded-full p-1 bg-white overflow-hidden">
                    <Image
                      src="/h-s-detectives-agency-goa-1603869378-5619610-removebg-preview (1).png"
                      alt="H S Detectives Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <h3 className="font-playfair text-2xl uppercase tracking-wider">H S Detectives</h3>
                  <p className="font-space text-[10px] text-red-600 tracking-widest uppercase mt-1">Agency Mumbai</p>
                </div>

                <div className="space-y-4">
                  {corporateInfo.map((info, i) => (
                    <div
                      key={i}
                      className="flex justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="font-space text-xs text-foreground/50 uppercase tracking-tighter">{info.label}</span>
                      <span className="font-inter text-sm font-semibold text-right">{info.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-red-600/5 dark:bg-red-600/10 border border-red-600/20 rounded-lg text-center">
                  <p className="font-playfair italic text-sm text-foreground/90">
                    "Eliminate all other factors and what remains must be the truth."
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-10">
                <div className="space-y-5">
                  <h4 className="font-space text-red-600 text-xs tracking-widest uppercase">What Defines Us</h4>
                  <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                    Every assignment we accept is driven by disciplined intelligence gathering, lawful methodology, and outcome-focused reporting. Whether the matter is corporate risk, matrimonial verification, civil dispute support, or sensitive private intelligence, our role is to provide clear, dependable truth backed by professional investigation.
                  </p>
                  <p className="font-inter text-lg text-foreground/70 leading-relaxed italic bg-neutral-100 dark:bg-white/5 p-6 rounded-xl border-l-[6px] border-red-600">
                    Our investigations unite field surveillance, strategic analysis, legal awareness, and advanced technical support so clients receive evidence that is actionable, confidential, and professionally handled from start to finish.
                  </p>
                </div>

                <div className="space-y-6 pt-4">
                  <h4 className="font-space text-red-600 text-xs tracking-widest uppercase">Field Presence</h4>
                  <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                    While based in Mumbai, our rapid-response network supports assignments across key locations in India, allowing our teams to move quickly wherever facts need to be verified on the ground.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {officePresence.map((city, i) => (
                      <div
                        key={i}
                        className="px-4 py-3 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-white/5 text-center shadow-sm"
                      >
                        <span className="font-space text-[10px] uppercase tracking-widest">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-20">
              <h2 className="font-playfair text-4xl md:text-5xl uppercase tracking-tighter mb-4">
                Our Leadership & Elite Investigation Team
              </h2>
              <div className="h-1 w-24 bg-red-600 mb-8" />
              <p className="text-white/60 font-inter max-w-3xl leading-relaxed">
                H S Detectives Agency Mumbai is led by professionals who bring together private intelligence experience, elite law-enforcement insight, and technical counter-surveillance expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((member, i) => (
                <div
                  key={i}
                  className="group p-8 border border-white/10 bg-white/5 hover:border-red-600 transition-all duration-500 rounded-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 font-bebas text-7xl text-white group-hover:opacity-10 pointer-events-none">
                    {i + 1}
                  </div>
                  <h3 className="font-playfair text-2xl text-red-100 mb-2 relative z-10">{member.name}</h3>
                  <p className="font-space text-[10px] uppercase tracking-[0.2em] text-red-500 mb-6 relative z-10">
                    {member.role}
                  </p>
                  <p className="text-white/75 font-inter text-sm leading-relaxed relative z-10">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-neutral-950">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-red-600" />
                  <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">Technical Edge</span>
                </div>
                <h3 className="font-playfair text-4xl md:text-5xl uppercase text-foreground leading-tight">
                  Cyber <span className="text-foreground/30">& Forensic Support</span>
                </h3>
                <p className="font-inter text-lg text-foreground/70 leading-relaxed max-w-2xl">
                  Through our specialized technical wing, <span className="font-semibold text-foreground">IndieBim Technology Solutions Private Limited</span>, our investigations are supported by internationally trained experts in cyber risk, digital evidence handling, and offensive security.
                </p>
              </div>

              <div className="space-y-6">
                {technicalExperts.map((expert, i) => (
                  <div
                    key={i}
                    className="p-8 border border-neutral-200 dark:border-white/10 rounded-2xl bg-neutral-50 dark:bg-black"
                  >
                    <h4 className="font-playfair text-2xl text-foreground mb-2">{expert.name}</h4>
                    <p className="font-space text-[10px] uppercase tracking-[0.2em] text-red-600 mb-4">
                      {expert.role}
                    </p>
                    <p className="font-inter text-base text-foreground/70 leading-relaxed">{expert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-100 dark:bg-neutral-900/50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-playfair text-4xl text-center mb-16 uppercase italic">
              Why Choose <span className="text-neutral-400">H S Detectives Agency Mumbai</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {reasons.map((reason, i) => (
                <div key={i} className="p-8 bg-white dark:bg-black rounded-2xl shadow-sm border border-neutral-200 dark:border-white/10">
                  <h3 className="font-playfair text-2xl mb-4">{reason.title}</h3>
                  <p className="font-inter text-sm md:text-base text-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-black p-12 rounded-[32px] border border-neutral-200 dark:border-white/10 shadow-xl">
              <div className="space-y-8">
                <h4 className="font-playfair text-3xl">Direct Inquiries</h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-space text-[10px] text-red-600 uppercase mb-1">Email Address</p>
                    <p className="font-inter text-lg">info@hsdetectives.com</p>
                  </div>
                  <div>
                    <p className="font-space text-[10px] text-red-600 uppercase mb-1">Mobile Support</p>
                    <p className="font-inter text-lg font-bold">+91 99304 03115</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-8 bg-neutral-50 dark:bg-white/5 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-0.5 w-8 bg-red-600" />
                  <span className="font-space text-red-600 text-xs tracking-widest uppercase">The Motto</span>
                  <div className="h-0.5 w-8 bg-red-600" />
                </div>
                <p className="font-playfair text-2xl md:text-3xl leading-snug italic max-w-sm">
                  "Eliminate all other factors and what remains must be the truth."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
