import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Our Trusted Clients | H S Detectives Agency Mumbai",
  description: "Recognized and trusted by industry leaders across corporate, banking, infrastructure, and hospitality sectors. See our extensive client list.",
};

const clients = [
  "JKumar", "L&T", "Hiranandani", "ICICI Bank", "Axis Bank", "RBL Bank", "Arcelormittal", "Disney", "Hotstar", 
  "Kailash Parbat Restaurant", "JSW Group", "Index Logistic", "Kotak Bank", "HYT Engineering", "IBI Group", 
  "Indiebim", "Iiris Consulting", "Avant Group Builder", "UPL", "Deloitte", "Quality Life Science Pvt Ltd", 
  "Quantum Leap", "Maruti Motors", "Success Gyan", "Regent Hotel", "Shankar Multimedia", "TVS", 
  "World Wide Technology Dehradoon", "Amitek", "Chamunda Industries", "Infra Market", "Action Group of Company", 
  "Saint-Gobain", "Corona Remedies Limited", "Jai-Kisan NBFC", "Urban Money", "Aeon Credit", "Maria Decor", 
  "Yes Bank", "Orion Strategic Consultants", "KW Dubai (Keller Williams)", "Third Bridge", "India Law Office (ILO)", 
  "Zen Pharma Private Limited", "Dermax", "Examplad Media"
];

export default function ClientsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-foreground">
        <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-28 text-center">
          <div className="max-w-5xl mx-auto rounded-2xl border border-white/20 bg-white/90 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)] mb-20">
            <h1 className="font-playfair text-4xl md:text-6xl uppercase tracking-wide text-neutral-950 mb-6">
              Our Trusted Clients
            </h1>
            <p className="font-inter text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              At <span className="font-bold">H S Detectives Agency Mumbai</span>, we take pride in our diverse portfolio of high-profile clients across various sectors. Our commitment to accuracy, confidentiality, and professional integrity has made us a trusted partner for leaders in industry, finance, and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {clients.map((client, idx) => (
              <div 
                key={idx}
                className="group relative h-40 flex items-center justify-center p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-red-500 hover:bg-black/60 transition-all duration-500 overflow-hidden"
              >
                {/* Background number ornament */}
                <div className="absolute -bottom-2 -right-2 opacity-5 font-bebas text-6xl text-white group-hover:opacity-10 transition-opacity">
                   {idx + 1}
                </div>
                
                <span className="font-playfair text-xl md:text-2xl text-amber-50 group-hover:text-white group-hover:scale-110 transition-all duration-500 text-center relative z-10 uppercase tracking-wider">
                  {client}
                </span>
                
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="mt-24 max-w-4xl mx-auto p-12 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
             <h2 className="font-playfair text-3xl text-white mb-6 italic">"A Legacy of Confidentiality & Proven Results"</h2>
             <p className="font-inter text-neutral-400">
               Operating with 100% discretion, we facilitate high-stakes investigations for some of the world's most renowned organizations. Your trust is our ultimate benchmark.
             </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
