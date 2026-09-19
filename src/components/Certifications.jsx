import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Sparkles, ExternalLink, X } from "lucide-react";
import AZ900 from "../assets/AZ-900.pdf";
import genAIImage from "../assets/GenAI.jpg";

const certificationsData = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    year: "2026",
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

          <div className="grid gap-6 max-w-4xl mx-auto">
            {certificationsData.map((cert, index) => (
              <motion.div key={index} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                          transition={{ duration:0.6, delay:index*0.2 }}
                          className="rounded-2xl p-6 transition duration-300 relative overflow-hidden"
                          style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.08)", backdropFilter:"blur(12px)" }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(45,212,191,0.2)"}
                          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Code */}
                  <div className="flex items-center gap-4 md:min-w-[200px]">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl text-2xl"
                         style={{ background:"rgba(45,212,191,0.1)", border:"1px solid rgba(45,212,191,0.2)" }}>
                      {cert.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{cert.issuer}</p>
                      <p className="text-sm text-slate-400 font-semibold">{cert.code}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1"
                        style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontFamily:"'Manrope',sans-serif" }}>
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">{cert.issuer} · {cert.year}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-3 py-1 rounded-full"
                              style={{ background:"rgba(45,212,191,0.1)", border:"1px solid rgba(45,212,191,0.2)", color: "#2DD4BF" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center md:items-start">
                    {cert.type === 'pdf' ? (
                      <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer">
                        {/* Center: icon + label */}
                        <div className="relative z-10 flex flex-col items-center gap-3 text-center px-3">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: "linear-gradient(135deg, #2DD4BF, #8B5CF6)",
                              boxShadow: "0 0 20px rgba(45,212,191,0.35)",
                            }}
                          >
                            <ExternalLink size={20} color="#0B0E1A" strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-white text-xs font-bold uppercase tracking-widest leading-none">View Credential</p>
                            <p className="text-slate-400 text-xs mt-1">Click to open PDF</p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="relative group cursor-pointer" onClick={() => openImageModal(cert.credential)}>
                        {/* Center: icon + label */}
                        <div className="relative z-10 flex flex-col items-center gap-3 text-center px-3">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: "linear-gradient(135deg, #2DD4BF, #8B5CF6)",
                              boxShadow: "0 0 20px rgba(45,212,191,0.35)",
                            }}
                          >
                            <ExternalLink size={20} color="#0B0E1A" strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-white text-xs font-bold uppercase tracking-widest leading-none">View Credential</p>
                            <p className="text-slate-400 text-xs mt-1">Click to open Image</p>
                          </div>
                        </div>
                      </div>
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
