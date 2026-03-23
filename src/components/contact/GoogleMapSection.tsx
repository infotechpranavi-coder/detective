"use client";

const MAP_URL =
  "https://www.google.com/maps?q=H+S+Detectives+Agency+Mumbai,+crystal+plaza,+A/514,+New+Link+Rd,+Veera+Desai+Industrial+Estate,+Andheri+West,+Mumbai,+Maharashtra+400053&ftid=0x3be7b06618f08abb:0xc675e5f7f07f1ecd&entry=gps&shh=CAE&lucs=,94259550,94297699,94284457,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjEwLjIuODc3MzE3OTEwMBgAINeCAypRLDk0MjU5NTUwLDk0Mjk3Njk5LDk0Mjg0NDU3LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJJTg%3D%3D&skid=d87bc999-7f57-468b-8340-e5d438ebe1a2&g_st=iwb";

const EMBED_MAP_URL =
  "https://maps.google.com/maps?q=H+S+Detectives+Agency+Mumbai,+crystal+plaza,+A/514,+New+Link+Rd,+Veera+Desai+Industrial+Estate,+Andheri+West,+Mumbai,+Maharashtra+400053&output=embed";

export default function GoogleMapSection() {
  return (
    <section className="py-24 md:py-28 bg-black border-y border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="font-space text-accent text-xs tracking-[0.2em] uppercase mb-3">
              Location
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white uppercase tracking-wider">
              Visit Our Mumbai Office
            </h2>
            <p className="mt-4 font-inter text-white/70 max-w-3xl">
              Crystal Plaza, A/514, New Link Rd, Veera Desai Industrial Estate,
              Andheri West, Mumbai, Maharashtra 400053
            </p>
          </div>

          <div className="border border-white/20 overflow-hidden">
            <iframe
              title="H S Detectives Agency Mumbai Location Map"
              src={EMBED_MAP_URL}
              className="w-full h-[360px] md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 border-2 border-white text-white font-space text-xs uppercase tracking-widest hover:bg-accent hover:border-accent transition-all"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
