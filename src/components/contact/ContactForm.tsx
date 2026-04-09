"use client";

import { motion } from "framer-motion";
import CustomImage from "@/components/ui/CustomImage";
import { fadeUp, fadeRight, staggerContainer, scaleUp } from "@/lib/animations";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import Image from "next/image";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
  captcha: string;
};

const createCaptcha = () => {
  const left = Math.floor(Math.random() * 8) + 2;
  const right = Math.floor(Math.random() * 8) + 1;

  return {
    left,
    right,
    answer: String(left + right),
  };
};

const INITIAL_CAPTCHA = {
  left: 8,
  right: 7,
  answer: "15",
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ContactFormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitComplete, setSubmitComplete] = useState(false);
  const [captcha, setCaptcha] = useState(INITIAL_CAPTCHA);
  const [submitError, setSubmitError] = useState("");
  const captchaPrompt = useMemo(
    () => `${captcha.left} + ${captcha.right}`,
    [captcha.left, captcha.right]
  );

  const onSubmit = async (data: ContactFormValues) => {
    if (data.captcha.trim() !== captcha.answer) {
      setError("captcha", {
        type: "validate",
        message: "Please solve the CAPTCHA correctly.",
      });
      setCaptcha(createCaptcha());
      return;
    }

    clearErrors("captcha");
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          category: data.category,
          message: data.message,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      setSubmitComplete(true);
      reset();
      setCaptcha(createCaptcha());
      setTimeout(() => setSubmitComplete(false), 5000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.";
      setSubmitError(message);
      setCaptcha(createCaptcha());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-foreground/10 py-16 sm:py-20 md:py-32">
      <CustomImage 
        src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80"
        alt="Dark City Lights"
        animation="none"
        containerClassName="absolute inset-0 z-0 h-full w-full"
        className="object-cover object-center"
        overlay="bg-white/88 dark:bg-black/95"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          
          {/* LEFT COLUMN - INFO */}
          <motion.div 
            className="space-y-10 lg:col-span-5 lg:space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="font-space text-accent text-sm tracking-[0.2em] uppercase">Connect</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="mb-2 font-playfair text-3xl uppercase tracking-wide text-foreground sm:text-4xl md:text-5xl md:tracking-wider">
                Secure <span className="text-foreground/40 italic">Communication</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mb-4 font-playfair text-xl uppercase tracking-wide text-accent sm:text-2xl md:text-3xl md:tracking-wider">
                24/7
              </motion.p>
              <motion.p variants={fadeUp} className="font-inter text-foreground/60 leading-relaxed mb-10">
                Reach out securely to discuss your situation. We maintain absolute confidentiality from the first touchpoint.
              </motion.p>
            </div>

            {/* Inline Image "Confidential by Default" */}
            <motion.div variants={fadeRight} className="group relative mb-8 h-[180px] w-full overflow-hidden border border-foreground/10 sm:mb-12 sm:h-[200px]">
               <Image 
                 src="https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=500&h=200&q=80"
                 alt="Noir Atmosphere"
                 fill
                 className="object-cover object-[center_30%] img-noir group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-background/60 mix-blend-multiply transition-colors duration-500 group-hover:bg-background/40" />
               <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10 pointer-events-none">
                 <span className="font-playfair italic text-lg tracking-wide text-foreground sm:text-xl md:text-2xl">&ldquo;Confidential by Default&rdquo;</span>
               </div>
            </motion.div>

            {/* Contact Details List */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase mb-1">Mobile Support 24/7</h4>
                  <p className="break-all font-inter text-base tracking-wide text-foreground sm:text-lg">+91 99304 03115</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase mb-1">Direct Email</h4>
                  <p className="break-all font-inter text-base tracking-wide text-foreground sm:text-lg">info@hsdetectives.com</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase mb-1">Headquarters</h4>
                  <a
                    href="https://www.google.com/maps?q=H+S+Detectives+Agency+Mumbai,+crystal+plaza,+A/514,+New+Link+Rd,+Veera+Desai+Industrial+Estate,+Andheri+West,+Mumbai,+Maharashtra+400053&ftid=0x3be7b06618f08abb:0xc675e5f7f07f1ecd&entry=gps&shh=CAE&lucs=,94259550,94297699,94284457,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjEwLjIuODc3MzE3OTEwMBgAINeCAypRLDk0MjU5NTUwLDk0Mjk3Njk5LDk0Mjg0NDU3LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJJTg%3D%3D&skid=d87bc999-7f57-468b-8340-e5d438ebe1a2&g_st=iwb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-full font-inter text-sm leading-relaxed text-foreground underline-offset-4 hover:underline sm:max-w-[260px] sm:text-base"
                  >
                    Crystal Plaza, A/514, New Link Rd, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053
                  </a>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase mb-1">Appointment</h4>
                  <p className="font-inter text-foreground text-base leading-relaxed">
                    Prior appointment required for office visit.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase mb-1">Consultation</h4>
                  <p className="font-inter text-foreground text-base leading-relaxed">
                    Free consultation over call and office visit.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - FORM */}
          <motion.div 
            className="lg:col-span-7 relative"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Blurred background decoration for form */}
            <div className="absolute inset-0 -top-10 -bottom-10 -left-10 -right-10 pointer-events-none mix-blend-screen opacity-[0.08] hidden md:block z-0">
              <Image 
                src="https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=600&q=80"
                alt="Tech Flow"
                fill
                className="object-cover blur-[30px]"
              />
            </div>

            <div className="relative z-10 border border-foreground/10 bg-white/84 p-5 shadow-[0_24px_80px_rgba(238,57,57,0.12)] backdrop-blur-xl sm:p-8 md:p-12 dark:bg-[#0A0A0A]/80">
              <h3 className="mb-6 font-playfair text-xl uppercase tracking-wide text-foreground sm:mb-8 sm:text-2xl sm:tracking-wider">Case Submission Panel</h3>
              
              {submitComplete ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                  className="flex h-[320px] flex-col items-center justify-center border border-accent/30 bg-accent/5 p-6 text-center sm:h-[400px]"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h4 className="font-playfair text-xl text-foreground uppercase tracking-wider mb-2">Message Received</h4>
                  <p className="font-inter text-foreground/60">Our senior investigator will contact you securely within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase">Full Name or Alias</label>
                      <input 
                        {...register("name", { required: true })}
                        className="w-full bg-background/50 border border-foreground/20 p-4 font-inter text-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase">Phone Number</label>
                      <input 
                        {...register("phone", { required: true })}
                        className="w-full bg-background/50 border border-foreground/20 p-4 font-inter text-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="+91"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase">Secure Email</label>
                    <input 
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full bg-background/50 border border-foreground/20 p-4 font-inter text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase">Investigation Category</label>
                    <div className="relative">
                      <select 
                        {...register("category", { required: true })}
                        className="w-full bg-background/50 border border-foreground/20 p-4 font-inter text-foreground focus:outline-none focus:border-accent transition-colors appearance-none"
                      >
                        <option value="personal">Personal Investigation</option>
                        <option value="corporate">Corporate Investigation</option>
                        <option value="tscm">TSCM Services</option>
                        <option value="risk-management">Risk Management</option>
                        <option value="surveillance">Surveillance</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50">▼</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase">Message Details</label>
                    <textarea 
                      {...register("message", { required: true })}
                      rows={5}
                      className="w-full bg-background/50 border border-foreground/20 p-4 font-inter text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Please provide initial context without sharing highly sensitive details yet..."
                    />
                  </div>

                  <div className="space-y-3 border border-foreground/10 bg-background/40 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <label className="font-space text-[10px] text-foreground/50 tracking-[0.2em] uppercase block mb-2">
                          CAPTCHA Verification
                        </label>
                        <p className="font-inter text-sm text-foreground/70">
                          Solve this to confirm you are human.
                        </p>
                      </div>
                      <div className="font-space text-lg tracking-[0.2em] text-accent">
                        {captchaPrompt} =
                      </div>
                    </div>
                    <input
                      {...register("captcha", { required: "Please solve the CAPTCHA." })}
                      className="w-full bg-background/50 border border-foreground/20 p-4 font-inter text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter answer"
                      inputMode="numeric"
                    />
                    {errors.captcha ? (
                      <p className="font-inter text-sm text-red-600">{errors.captcha.message}</p>
                    ) : null}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent text-background font-space font-bold py-5 uppercase tracking-widest hover:bg-foreground transition-colors duration-300 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? "Transmitting..." : "Send Securely"}
                  </button>

                  {submitError ? (
                    <p className="font-inter text-sm text-red-600">{submitError}</p>
                  ) : null}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
