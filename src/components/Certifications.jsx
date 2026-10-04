import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink, X } from "lucide-react";
import AZ900 from "../assets/AZ-900.pdf";
import genAIImage from "../assets/GenAI.jpg";

const certificationsData = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    year: "2025",
    description: "Foundational knowledge of Azure cloud concepts, core services, security, pricing, and governance.",
    tags: ["Azure", "Cloud", "Microsoft Azure"],
    credential: AZ900,
    icon: "☁",
    type: "pdf"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    code: "GenAI",
    year: "2026",
    description: "Foundations of generative AI, large language models, responsible AI, and practical AI applications.",
    tags: ["Generative AI", "LLMs", "AI"],
    credential: genAIImage,
    icon: "✦",
    type: "image"
  }
];

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <section id="certifications" className="text-white py-20 relative">
        <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24">
          <motion.div initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-teal-300"
                  style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)" }}>
              <Sparkles size={13} /> Credentials
            </span>
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:-30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
                     className="text-4xl font-bold text-center mb-4" style={{ fontFamily:"'Manrope',sans-serif" }}>
            Certifications
          </motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.8, delay:0.2 }}
                    className="text-center text-slate-400 mb-12">
            Professional certifications and credentials validating my technical expertise.
          </motion.p>

          <div className="grid max-w-5xl grid-cols-1 items-stretch gap-6 mx-auto md:grid-cols-2">
            {certificationsData.map((cert, index) => (
              <motion.div key={index} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                          transition={{ duration:0.6, delay:index*0.2 }}
                          className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl p-6 sm:p-7 transition duration-300"
                          style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.08)", backdropFilter:"blur(12px)" }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(45,212,191,0.2)"}
                          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>

                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
                     style={{ background:"rgba(45,212,191,0.08)" }} />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
                         style={{ background:"rgba(45,212,191,0.1)", border:"1px solid rgba(45,212,191,0.2)" }}>
                      {cert.icon}
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-300">
                      {cert.code}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                      {cert.issuer} · {cert.year}
                    </p>
                    <h3 className="mb-3 text-2xl font-bold leading-tight sm:text-[1.7rem]"
                        style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontFamily:"'Manrope',sans-serif" }}>
                      {cert.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-400">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="rounded-full px-3 py-1.5 text-xs"
                              style={{ background:"rgba(45,212,191,0.1)", border:"1px solid rgba(45,212,191,0.2)", color: "#2DD4BF" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-white/[0.08] pt-5">
                    {cert.type === 'pdf' ? (
                      <a href={cert.credential} target="_blank" rel="noopener noreferrer"
                         className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-teal-300/30 hover:bg-white/[0.06]">
                        <div>
                          <p className="text-sm font-bold text-white">View credential</p>
                          <p className="mt-1 text-xs text-slate-400">Open certificate PDF</p>
                        </div>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                              style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)", boxShadow:"0 0 20px rgba(45,212,191,0.25)" }}>
                          <ExternalLink size={18} color="#0B0E1A" strokeWidth={2.5} />
                        </span>
                      </a>
                    ) : (
                      <button type="button" onClick={() => openImageModal(cert.credential)}
                         className="flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors hover:border-teal-300/30 hover:bg-white/[0.06]">
                        <div>
                          <p className="text-sm font-bold text-white">View credential</p>
                          <p className="mt-1 text-xs text-slate-400">Preview certificate image</p>
                        </div>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                              style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)", boxShadow:"0 0 20px rgba(45,212,191,0.25)" }}>
                          <ExternalLink size={18} color="#0B0E1A" strokeWidth={2.5} />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.9)" }} onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-teal-300 transition-colors"
              onClick={closeImageModal}
            >
              <X size={24} />
            </button>
            <img 
              src={modalImage} 
              alt="Certificate" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
