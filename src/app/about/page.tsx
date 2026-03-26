import PageHero from "@/components/shared/PageHero";
import PageTransition from "@/components/ui/PageTransition";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | H S Detectives Agency Mumbai",
  description: "Learn about H S Detectives Agency Mumbai, India's premier private investigation agency since 2011. Founded by Wahid Ali Shaikh.",
};

const corporateInfo = [
  { label: "Founded", value: "2011" },
  { label: "Founder", value: "Wahid Ali Shaikh" },
  { label: "Headquarters", value: "Mumbai, Maharashtra, India" },
  { label: "Industry", value: "Security & Investigations" },
  { label: "Areas Served", value: "India & International (UAE, Nepal, Mauritius)" },
  { label: "Success Rate", value: "4.8/5 (Based on Google & FaceBook)" },
];

const branches = [
  "Mumbai (Corporate & Registered)",
  "Thane",
  "Navi Mumbai",
  "Pune",
  "Nashik",
  "Nagpur",
  "Goa",
  "Ahmedabad"
];

const serviceCategories = [
  {
    title: "Personal Investigation",
    items: [
      "Pre-matrimonial investigation",
      "Post-matrimonial investigation",
      "Divorce case investigation",
      "Extra-marital affair investigation",
      "Missing person investigation",
      "Loyalty test investigation"
    ]
  },
  {
    title: "Corporate / Business Investigation",
    items: [
      "Employee background verification",
      "Corporate fraud investigation",
      "Asset verification",
      "Due diligence",
      "Intellectual property investigation",
      "Undercover operations"
    ]
  },
  {
    title: "Technical Services",
    items: [
      "Surveillance and shadowing",
      "Debugging and bug sweeping (Home & Office)",
      "Digital tracking and monitoring",
      "TSCM Services (via Indiebim Technology Solutions)"
    ]
  }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        <PageHero 
          title="About The Agency" 
          subtitle="Uncovering the truth with absolute precision and confidentiality since 2011."
          image="https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1920&q=80"
          breadcrumbs={[ { label: "About", href: "/about" } ]}
        />

        {/* 1. Overview & Corporate Profile */}
        <section className="py-24 bg-linear-to-b from-background to-neutral-50 dark:to-neutral-900/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-12 mb-12">
                 <h2 className="font-playfair text-4xl md:text-5xl border-l-4 border-red-600 pl-6 mb-8 uppercase tracking-tight">
                   Agency Overview
                 </h2>
                 <p className="font-inter text-xl text-foreground/80 leading-relaxed max-w-5xl">
                   <span className="font-bold text-foreground underline decoration-red-600 underline-offset-4">H S Detectives Agency Mumbai</span> is a private investigation agency based in Mumbai, India. The company specializes in personal and corporate investigative services, offering confidential and professional solutions to individuals, businesses, and legal entities. It is known for its high case-solving rate and use of modern surveillance technologies.
                 </p>
              </div>

              {/* Corporate Profile Card */}
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
                      <div key={i} className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 last:border-0 last:pb-0">
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

              {/* History & Details */}
              <div className="lg:col-span-8 space-y-12">
                 <div className="space-y-6">
                    <h4 className="font-space text-red-600 text-xs tracking-widest uppercase">History</h4>
                    <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                      HS Detectives Agency Mumbai was <span className="text-foreground font-semibold">founded in 2011</span> and operates as a privately held investigation firm headquartered in Mumbai, Maharashtra. The agency has expanded its services across multiple cities in India including Thane, Navi Mumbai, Pune, Nashik, Ahmedabad, Nagpur, and Goa.
                    </p>
                    <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                      The agency focuses on delivering accurate, confidential, and timely investigation services. Its operational approach includes field intelligence, digital surveillance, and analytical reporting. The firm claims a strong success rate in solving cases and emphasizes client satisfaction and confidentiality.
                    </p>
                    <p className="font-inter text-lg text-foreground/70 leading-relaxed italic bg-neutral-100 dark:bg-white/5 p-6 rounded-xl border-l-[6px] border-red-600">
                      HS Detectives operates with a network of trained investigators and utilizes advanced tools such as video surveillance systems, tracking technologies, and data analysis methods to gather reliable information.
                    </p>
                 </div>

                 <div className="space-y-6 pt-8">
                    <h4 className="font-space text-red-600 text-xs tracking-widest uppercase">Operations & Global Reach</h4>
                    <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                      The agency operates from its corporate office in Andheri West, Mumbai, with additional presence in Navi Mumbai and Thane. It also provides services across India and internationally in regions such as the <span className="text-foreground font-bold">UAE, Nepal, Bangladesh, and Mauritius.</span>
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                       {branches.map((city, i) => (
                         <div key={i} className="px-4 py-3 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-white/5 text-center shadow-sm">
                            <span className="font-space text-[10px] uppercase tracking-widest">{city}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Detailed Services Grid */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-20">
               <h2 className="font-playfair text-4xl md:text-5xl uppercase tracking-tighter mb-4">Our Service Ecosystem</h2>
               <div className="h-1 w-24 bg-red-600 mb-8" />
               <p className="text-white/60 font-inter max-w-2xl leading-relaxed">
                 Under the guidance of <span className="text-white font-bold">Retired DCP K. S. Shaikh (Crime Branch, Maharashtra Police)</span>, our investigative teams utilize law-enforcement-grade protocols for every case.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {serviceCategories.map((cat, i) => (
                 <div key={i} className="group p-8 border border-white/10 bg-white/5 hover:border-red-600 transition-all duration-500 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 font-bebas text-7xl text-white group-hover:opacity-10 pointer-events-none">
                       {i + 1}
                    </div>
                    <h3 className="font-playfair text-2xl text-red-100 mb-8 relative z-10">{cat.title}</h3>
                    <ul className="space-y-4 relative z-10">
                       {cat.items.map((item, j) => (
                         <li key={j} className="flex items-start gap-3 text-white/70 font-inter text-sm">
                            <span className="h-1 w-1 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>

            <div className="mt-16 p-8 bg-red-600/10 border border-red-600/30 rounded-2xl flex flex-col items-center text-center">
               <p className="font-inter text-white/90 text-lg max-w-3xl leading-relaxed">
                 We also provide TSCM & Debugging Services through our sister company <span className="font-bold text-white">Indiebim Technology Solutions Private Limited.</span>
               </p>
            </div>
          </div>
        </section>

        {/* 3. Packages & Reputation */}
        <section className="py-24 bg-white dark:bg-neutral-950">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="h-[1px] w-12 bg-red-600" />
                     <span className="font-space text-red-600 text-sm tracking-[0.2em] uppercase">Structured Excellence</span>
                  </div>
                  <h3 className="font-playfair text-4xl md:text-5xl uppercase text-foreground leading-tight">
                    Investigation <span className="text-foreground/30">Packages</span>
                  </h3>
                  <p className="font-inter text-lg text-foreground/70 leading-relaxed max-w-xl">
                    HS Detectives offers multiple investigation tiers designed to provide factual reports and evidence for personal decisions or legal proceedings.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     {["Basic Verification", "Basic Plus", "Advanced", "Advanced Plus"].map((p, i) => (
                       <div key={i} className="p-4 border border-neutral-200 dark:border-white/10 rounded-xl flex flex-col gap-2 hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                          <span className="font-space text-[10px] text-red-600 uppercase">Tier 0{i+1}</span>
                          <span className="font-playfair text-lg font-bold">{p}</span>
                       </div>
                     ))}
                  </div>
                  <p className="font-inter text-sm text-foreground/50">
                    *Packages include background verification, financial status, criminal records, social profiling, and lifestyle analysis.
                  </p>
               </div>

               <div className="relative p-12 bg-neutral-950 dark:bg-black rounded-[40px] shadow-2xl overflow-hidden text-center text-white">
                  <div className="absolute inset-0 bg-red-600/5 mix-blend-color" />
                  <h4 className="font-space text-red-500 text-xs tracking-widest uppercase mb-12">Global Reputation</h4>
                  <div className="relative z-10 space-y-8">
                     <div className="space-y-2">
                        <span className="font-playfair text-7xl md:text-8xl block text-white">4.8</span>
                        <div className="flex justify-center gap-1 text-red-600">
                           {[1,2,3,4,5].map(s => (
                             <svg key={s} className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                               <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                             </svg>
                           ))}
                        </div>
                     </div>
                     <p className="font-inter text-xl text-white/80 leading-relaxed max-w-md mx-auto">
                       High customer satisfaction across Google, Facebook, and Justdial.
                     </p>
                     <p className="font-space text-[10px] text-white/50 tracking-[0.3em] uppercase">Trusted by Thousands</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 4. Branch Network & Contact Details */}
        <section className="py-24 bg-neutral-100 dark:bg-neutral-900/50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-playfair text-4xl text-center mb-16 uppercase italic">Our Presence <span className="text-neutral-400">&</span> Contact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               <div className="p-8 bg-white dark:bg-black rounded-2xl shadow-sm space-y-6">
                  <span className="font-space text-red-600 text-[10px] uppercase tracking-[0.2em] block mb-4">Corporate Office</span>
                  <div className="space-y-2">
                     <p className="font-playfair text-xl">Andheri West, Mumbai</p>
                     <p className="font-inter text-sm text-foreground/60 leading-relaxed">
                        A/514, Crystal Plaza, New Link Road, Veera Desai Industrial Estate, Mumbai – 400053
                     </p>
                  </div>
               </div>
               
               <div className="p-8 bg-white dark:bg-black rounded-2xl shadow-sm space-y-6">
                  <span className="font-space text-red-600 text-[10px] uppercase tracking-[0.2em] block mb-4">Registered Office</span>
                  <div className="space-y-2">
                     <p className="font-playfair text-xl">Mira Road East, Thane</p>
                     <p className="font-inter text-sm text-foreground/60 leading-relaxed">
                        204, N G Canery, Plot No. 98, Hatkesh Road, Thane – 401107
                     </p>
                  </div>
               </div>

               <div className="p-8 bg-white dark:bg-black rounded-2xl shadow-sm space-y-6">
                  <span className="font-space text-red-600 text-[10px] uppercase tracking-[0.2em] block mb-4">Navi Mumbai Office</span>
                  <div className="space-y-2">
                     <p className="font-playfair text-xl">Nerul East</p>
                     <p className="font-inter text-sm text-foreground/60 leading-relaxed">
                        F-01 A/16, Haware Centurion Mall, Sector 19, Navi Mumbai – 400706
                     </p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-black p-12 rounded-[32px] border border-neutral-200 dark:border-white/10 shadow-xl">
               <div className="space-y-8">
                  <h4 className="font-playfair text-3xl">Direct Inquiries</h4>
                  <div className="space-y-6">
                     <div>
                        <p className="font-space text-[10px] text-red-600 uppercase mb-1">Email Addresses</p>
                        <p className="font-inter text-lg">info@hsdetectives.com</p>
                        <p className="font-inter text-lg">wahid@hsdetectives.com</p>
                     </div>
                     <div>
                        <p className="font-space text-[10px] text-red-600 uppercase mb-1">Mobile Support</p>
                        <p className="font-inter text-lg font-bold">+91 91525 31394</p>
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
