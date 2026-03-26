"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useState } from "react";

const clients = [
  { name: "JKumar", domain: "jkumar.com", isLarge: true },
  { 
    name: "L&T", 
    domain: "larsentoubro.com", 
    isLarge: true,
    logo: "https://th.bing.com/th/id/OIP.tTLyiq_bPXWgLH3OEwTtnAAAAA?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  { name: "Hiranandani", domain: "hiranandani.com" },
  { name: "ICICI Bank", domain: "icicibank.com" },
  { 
    name: "Axis Bank", 
    domain: "axisbank.com", 
    isLarge: true,
    logo: "https://tse1.explicit.bing.net/th/id/OIP.L7Biua-8HdBJJ9xABJvcIgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  { name: "RBL Bank", domain: "rblbank.com" },
  { name: "ArcelorMittal", domain: "arcelormittal.com" },
  { name: "Disney", domain: "disney.com" },
  { name: "Hotstar", domain: "hotstar.com" },
  { 
    name: "Kailash Parbat", 
    domain: "kailashparbat.co.in", 
    logo: "https://static.wixstatic.com/media/7971e4_d1f0890b7aba4c46ba73a9badf7fe268~mv2.png/v1/fill/w_206,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%202.png" 
  },
  { name: "JSW Group", domain: "jsw.in" },
  { name: "Index Logistic", domain: "indexlogistics.in" },
  { 
    name: "Kotak Bank", 
    domain: "kotak.com", 
    isLarge: true,
    logo: "https://tse2.mm.bing.net/th/id/OIP.K4zry5c4UIu_lWpnu_2H7AHaGX?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  { name: "HYT Engineering", domain: "hytengineering.com" },
  { name: "IBI Group", domain: "ibi-group.com" },
  { name: "Indiebim", domain: "indiebim.com" },
  { name: "Iiris Consulting", domain: "iirisconsulting.com" },
  { name: "Avant Group", domain: "avantgroup.co.in" },
  { name: "UPL", domain: "upl-ltd.com", isLarge: true },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "Quality Life", domain: "qlife.com" },
  { 
    name: "Quantum Leap", 
    domain: "quantumleap.in",
    logo: "https://insidepulse.com/wp-content/uploads/2022/06/Quantum-Leap-logo.png"
  },
  { 
    name: "Maruti Motors", 
    domain: "marutisuzuki.com",
    logo: "https://www.freepnglogos.com/uploads/suzuki-png-logo/suzuki-logo-png-clipart-8.png"
  },
  { name: "Success Gyan", domain: "successgyan.com" },
  { name: "Regent Hotel", domain: "regenthotels.com" },
  { name: "Shankar Multi", domain: "shankarmultimedia.com" },
  { name: "TVS", domain: "tvsmotor.com", isLarge: true },
  { name: "World Wide Tech", domain: "wwt.com" },
  { 
    name: "Amitek", 
    domain: "amitek.in",
    logo: "https://logonoid.com/images/ametek-logo.png"
  },
  { name: "Chamunda Ind.", domain: "chamundaindustries.com" },
  { name: "Infra Market", domain: "infra.market" },
  { 
    name: "Action Group", 
    domain: "actionshoes.com",
    logo: "https://th.bing.com/th/id/R.46d3639fba17cd6be2a4b0d6831f9825?rik=Q38w5ms4xW7abQ&riu=http%3a%2f%2fwww.actiongroup.net%2fwp-content%2fuploads%2f2015%2f07%2fActionLogo_resize.png&ehk=DLmm3ZYCQgeaGwRxG2M3iED4CwJ%2fHYHkxwhde1x0QI8%3d&risl=&pid=ImgRaw&r=0"
  },
  { 
    name: "Saint-Gobain", 
    domain: "saint-gobain.com", 
    isLarge: true,
    logo: "https://th.bing.com/th/id/OIP.uNsopPvBDi8zIlLA55vWsgHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  { name: "Corona Remedies", domain: "coronaremedies.com" },
  { name: "Jai-Kisan", domain: "jai-kisan.com" },
  { 
    name: "Urban Money", 
    domain: "urbanmoney.com", 
    isLarge: true,
    logo: "https://cdn.brandfetch.io/idpaC5ECxY/w/1080/h/1081/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1750212049715"
  },
  { name: "Aeon Credit", domain: "aeoncredit.com.my" },
  { name: "Maria Decor", domain: "mariadecor.com", isLarge: true },
  { 
    name: "Yes Bank", 
    domain: "yesbank.in", 
    isLarge: true,
    logo: "https://companieslogo.com/img/orig/YESBANK.NS_BIG-e4bb4b2a.png?t=1707747534&download=true"
  },
  { 
    name: "Orion Strategic", 
    domain: "orion.com", 
    isLarge: true,
    logo: "https://th.bing.com/th/id/OIP.uNsopPvBDi8zIlLA55vWsgHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  { name: "KW Dubai", domain: "kellerwilliamsdubai.com" },
  { name: "Third Bridge", domain: "thirdbridge.com" },
  { 
    name: "India Law Office", 
    domain: "indialawoffice.com",
    logo: "https://cdn.law.asia/wp-content/uploads/2021/11/India-Law-Offices-logo.jpg"
  },
  { name: "Zen Pharma", domain: "zenpharma.com" },
  { 
    name: "Dermax", 
    domain: "dermax.com",
    logo: "https://dharab.com/wp-content/uploads/2023/08/dermax-logo.png"
  },
  { 
    name: "Examplad Media", 
    domain: "examplad.com",
    isLarge: true,
    logo: "https://images.yourstory.com/cs/images/companies/827000e14e7e-em-1687328326863.jpeg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
  }
];

function ClientCard({ client, idx }: { client: { name: string; domain: string; logo?: string; isLarge?: boolean }, idx: number }) {
  const [logoSrc, setLogoSrc] = useState(client.logo || `https://logo.clearbit.com/${client.domain}`);
  const [imgStatus, setImgStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [retryStep, setRetryStep] = useState(0);

  const handleImgError = () => {
    if (retryStep === 0) {
      if (client.logo && logoSrc === client.logo) {
        setLogoSrc(`https://logo.clearbit.com/${client.domain}`);
      } else {
        setLogoSrc(`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`);
      }
      setRetryStep(1);
    } else if (retryStep === 1) {
      const googleSrc = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`;
      if (logoSrc !== googleSrc) {
        setLogoSrc(googleSrc);
        setRetryStep(2);
      } else {
        setImgStatus('error');
      }
    } else {
      setImgStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: (idx % 24) * 0.02 }}
      className="group relative h-48 flex flex-col items-center justify-center p-4 border border-neutral-100 bg-white hover:bg-neutral-50 hover:border-red-600/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Logo Area */}
      <div className="relative z-10 w-full h-24 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 px-2 text-center">
        {imgStatus !== 'error' ? (
          <>
            {imgStatus !== 'success' && (
              <div className="absolute inset-0 flex items-center justify-center">
                 <Building2 size={32} className="text-neutral-100 animate-pulse" />
              </div>
            )}
            <img 
              key={logoSrc}
              src={logoSrc} 
              alt={client.name}
              className={`object-contain transition-opacity duration-500 ${imgStatus === 'success' ? 'opacity-100' : 'opacity-0'} ${client.isLarge ? 'h-24 w-auto scale-110' : 'h-16 w-auto'}`}
              onLoad={() => setImgStatus('success')}
              onError={handleImgError}
            />
          </>
        ) : (
          <Building2 size={client.isLarge ? 48 : 32} className="text-neutral-200 group-hover:text-red-600 transition-colors" strokeWidth={1.5} />
        )}
      </div>
      
      <span className="font-space text-[10px] md:text-[11px] text-neutral-400 group-hover:text-neutral-900 transition-colors text-center relative z-10 uppercase tracking-widest font-bold leading-tight max-w-full px-2">
        {client.name}
      </span>
    </motion.div>
  );
}

export default function ClientsView() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center mb-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="font-space text-red-600 text-xs tracking-[0.3em] uppercase">Global Recognition</span>
          <h1 className="font-playfair text-4xl md:text-7xl uppercase tracking-wider mb-8 leading-[1.1]">
             Corporate <span className="text-white/40 italic">Portfolio</span>
          </h1>
          <p className="font-inter text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
             Strategically positioned to support industry leaders across various sectors. Our commitment to accuracy, confidentiality, and professional integrity defines our legacy.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {clients.map((client, idx) => (
          <ClientCard key={idx} client={client} idx={idx} />
        ))}
      </div>

      <div className="mt-40 text-center">
         <div className="inline-block p-12 bg-white/[0.03] border border-white/5 rounded-[40px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="font-playfair text-3xl md:text-4xl italic text-white mb-6 relative z-10">"A Legacy of Confidentiality & Proven Results"</h2>
            <div className="h-px w-24 bg-red-600 mx-auto mb-6 relative z-10" />
            <p className="font-inter text-white/50 text-sm max-w-xl mx-auto leading-relaxed relative z-10">
              Operating with 100% discretion, we facilitate high-stakes investigations for some of the world's most renowned organizations. Your trust is our ultimate benchmark.
            </p>
         </div>
      </div>
    </section>
  );
}
