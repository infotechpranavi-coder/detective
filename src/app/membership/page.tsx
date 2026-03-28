import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: "Memberships | H S Detectives",
  description:
    "Major national and international private detective associations and memberships.",
};

type AssociationItem = {
  name: string;
  description: string;
  founded?: string;
  reach?: string;
  focus?: string;
  shortName: string;
  category: "India" | "International";
  logo?: string;
};

const indiaAssociations: AssociationItem[] = [
  {
    name: "APDI (Association of Private Detectives & Investigators)",
    description:
      "Founded in 2005, APDI is the foremost representative body for private detectives in India. It is officially recognized by the Government of India and works closely with the Ministry of Home Affairs on legislative matters like the Private Detective Agencies (Regulation) Bill.",
    founded: "2005",
    reach: "India (National)",
    focus: "Government advocacy & Regulation",
    shortName: "APDI",
    category: "India",
    logo: "/apdi-logo.jpg",
  },
  {
    name: "TPDIA (The Professional Detectives and Investigators Association)",
    description:
      "A prominent national organization with chapters across Maharashtra, Gujarat, and Tamil Nadu, focused on maintaining strict ethics and professional standards.",
    shortName: "TPDIA",
    category: "India",
    logo: "https://tse2.mm.bing.net/th/id/OIP.tqmIgsKMpLEZmgtvKi3NdgHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "NIDA (National Institute of Detectives and Investigators)",
    description:
      "Widely associated with professional training and standard-setting within the Indian investigative community.",
    shortName: "NIDA",
    category: "India",
    logo: "https://nida.nih.gov/sites/default/files/images/international_logo_2023_1200x800.jpg",
  },
];

const globalAssociations: AssociationItem[] = [
  {
    name: "W.A.D. (World Association of Detectives)",
    description:
      "Established in 1925, W.A.D. is one of the oldest and largest global associations with members across more than 80 countries.",
    founded: "1925",
    reach: "Global (80+ countries)",
    focus: "Networking & International standards",
    shortName: "W.A.D.",
    category: "International",
    logo: "/wad.jpg",
  },
  {
    name: "CII (Council of International Investigators)",
    description:
      "Founded in 1955, CII is known for highly selective membership and strong emphasis on integrity, trust, and expertise.",
    founded: "1955",
    reach: "Global (Highly selective)",
    focus: "Elite professional ethics & trust",
    shortName: "CII",
    category: "International",
    logo: "http://www.madhavmineral.com/wp-content/uploads/2023/10/Official_logo_of_the_Confederation_of_Indian_Industry_CII.png",
  },
  {
    name: "ABI (Association of British Investigators)",
    description:
      "Founded in 1913, ABI is a premier UK body with international recognition, including acknowledgment by the Law Society of England and Wales.",
    founded: "1913",
    reach: "UK & International",
    focus: "Professional accreditation & Self-regulation",
    shortName: "ABI",
    category: "International",
    logo: "http://www.firstintelligence.co.uk/img/preview/slide-620-1aib.jpg",
  },
  {
    name: "WAPI (World Association of Professional Investigators)",
    description:
      "A global body covering multiple investigative domains, including public, corporate, and domestic private-sector work.",
    shortName: "WAPI",
    category: "International",
    logo: "https://tse1.mm.bing.net/th/id/OIP.PxqHy14hQavvZf8svLpKVwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "ASIS International (American Society for Industrial Security)",
    description:
      "A major international organization for security professionals and a key network for corporate investigators worldwide.",
    shortName: "ASIS",
    category: "International",
    logo: "https://tse2.mm.bing.net/th/id/OIP.nfMRMql6oV6_BBiN-Ew3mwHaG9?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const allAssociations = [...indiaAssociations, ...globalAssociations];

export default function MembershipPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="max-w-6xl">
            <p className="font-space text-[#a100a6] text-xs tracking-[0.2em] uppercase">
              Professional Memberships
            </p>
            <h1 className="mt-4 font-playfair text-4xl md:text-5xl uppercase tracking-wide text-white">
              Detective Associations
            </h1>
            <p className="mt-4 font-inter text-white/70 max-w-3xl">
              Major national and international private detective associations
              relevant to professional investigative standards, networking, and
              compliance.
            </p>
          </div>

          <div className="mt-12 max-w-6xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-10">
            <aside className="border border-white/20 bg-[#0d0d0d] h-max">
              <div className="px-4 py-3 bg-[#a100a6] text-white font-space text-xs tracking-[0.14em] uppercase">
                Membership Categories
              </div>
              <div className="divide-y divide-white/10">
                <div className="px-4 py-3 font-space text-[11px] uppercase tracking-[0.12em] text-[#a100a6]">
                  India
                </div>
                {indiaAssociations.map((item) => (
                  <div
                    key={item.shortName}
                    className="px-4 py-3 font-inter text-sm text-white/85 hover:bg-white/5"
                  >
                    {item.shortName}
                  </div>
                ))}
                <div className="px-4 py-3 font-space text-[11px] uppercase tracking-[0.12em] text-[#a100a6]">
                  International
                </div>
                {globalAssociations.map((item) => (
                  <div
                    key={item.shortName}
                    className="px-4 py-3 font-inter text-sm text-white/85 hover:bg-white/5"
                  >
                    {item.shortName}
                  </div>
                ))}
              </div>
            </aside>

            <div className="border border-white/20 bg-[#0d0d0d]">
              {allAssociations.map((item, index) => (
                <article
                  key={item.name}
                  className={`grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 p-6 ${
                    index !== allAssociations.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex md:block items-center justify-center">
                    <div className="w-28 h-28 mx-auto rounded-full border border-white/20 bg-white flex items-center justify-center overflow-hidden p-2">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`${item.shortName} Logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="font-space text-white/90 text-sm tracking-widest uppercase">
                          {item.shortName}
                        </span>
                      )}
                    </div>
                    <span
                      className={`mt-4 block w-max mx-auto px-3 py-1 font-space text-[10px] tracking-widest uppercase ${
                        item.category === "India"
                          ? "bg-[#efe5ff] text-[#553099]"
                          : "bg-[#e5f2ff] text-[#174a7a]"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-playfair text-2xl text-white leading-snug">
                      {item.name}
                    </h2>
                    <p className="mt-3 font-inter text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                    {(item.founded || item.reach || item.focus) && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {item.founded && (
                          <span className="px-3 py-1 text-xs font-space tracking-widest uppercase bg-white/5 border border-white/15 text-white/90">
                            Founded: {item.founded}
                          </span>
                        )}
                        {item.reach && (
                          <span className="px-3 py-1 text-xs font-space tracking-widest uppercase bg-white/5 border border-white/15 text-white/90">
                            Reach: {item.reach}
                          </span>
                        )}
                        {item.focus && (
                          <span className="px-3 py-1 text-xs font-space tracking-widest uppercase bg-white/5 border border-white/15 text-white/90">
                            Focus: {item.focus}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
