import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLinkedin, FaGithubSquare, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Sparkles, FileText, ExternalLink } from "lucide-react";
import ProfilePhoto from "../assets/profile.jpeg";
import RESUME_URL from "../assets/Mohammad_Akram.pdf";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitContactForm = async (data) => {
    setFormStatus(null);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setFormStatus({
        type: "error",
        message: "The contact form is not configured yet. Please try again later.",
      });
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message. Please try again.");
      }

      reset();
      setFormStatus({ type: "success", message: "Thanks! Your message has been sent." });
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setFormStatus({
        type: "error",
        message: error.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputBase = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    borderRadius: "8px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };
  const onFocus = (e) => { e.target.style.borderColor = "rgba(45,212,191,0.45)"; };
  const onBlur  = (e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; };

  const socialCards = [
    { icon: FaLinkedin,     label: "LinkedIn", value: "Connect with me",    href: "https://www.linkedin.com/in/mdakram2002", from: "#8B5CF6", to: "#EC4899" },
    { icon: FaGithubSquare, label: "GitHub",   value: "View my projects",   href: "https://github.com/mdakram2002",          from: "#6366F1", to: "#8B5CF6" },
    { icon: FaMapMarkerAlt, label: "Location", value: "India — remote open", href: null,                                      from: "#F59E0B", to: "#F97316" },
  ];

  return (
    <section
      id="contact"
      className="text-white py-20 px-4 sm:px-6 md:px-16 lg:px-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-teal-300 mb-5"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Sparkles size={13} />
            Get in Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Hire{" "}
            <span style={{ background: "linear-gradient(135deg, #2DD4BF, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an exciting project or opportunity? I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* 1 ── Profile card (unchanged) */}
            <div
              className="flex items-center gap-5 p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(45,212,191,0.25)",
                boxShadow: "0 0 24px rgba(45,212,191,0.10)",
              }}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={ProfilePhoto}
                  alt="Mohammad Akram"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
                  style={{ border: "1px solid rgba(45,212,191,0.35)" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl items-center justify-center text-2xl font-extrabold"
                  style={{ display: "none", background: "linear-gradient(135deg, #2DD4BF, #8B5CF6)", color: "#0B0E1A" }}
                >
                  MA
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#2DD4BF" }}>
                  Available for Hire
                </p>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Mohammad Akram
                </h3>
                <p className="text-slate-400 text-sm leading-snug">
                  Full Stack Developer focused on scalable web apps, backend systems, and CI/CD-driven delivery.
                </p>
              </div>
            </div>

            {/* 2 ── Email card (unchanged) */}
            <motion.a
              href="mailto:mdakram12022002@gmail.com"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(45,212,191,0.44)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.25)" }}
              >
                <FaEnvelope style={{ color: "#2DD4BF", fontSize: "18px" }} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5">Email</p>
                <span className="text-slate-200 text-sm font-semibold break-all">mdakram12022002@gmail.com</span>
              </div>
            </motion.a>

            {/* 3 ── TWO-COLUMN SPLIT: social cards left | resume right */}
            <div className="grid grid-cols-2 gap-3 flex-1">

              {/* ── Left half: LinkedIn + GitHub + Location stacked */}
              <div className="flex flex-col gap-3">
                {socialCards.map(({ icon: Icon, label, value, href, from, to }) => {
                  const Tag = href ? motion.a : motion.div;
                  const linkProps = href
                    ? { href, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Tag
                      key={label}
                      {...linkProps}
                      whileHover={href ? { x: 4 } : {}}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 p-3 rounded-xl group transition-all duration-200 flex-1"
                      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${from}44`)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                        style={{ background: `linear-gradient(135deg, ${from}22, ${to}22)`, border: `1px solid ${from}33` }}
                      >
                        <Icon style={{ color: from, fontSize: "15px" }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider leading-none mb-0.5">{label}</p>
                        <span className="text-slate-200 text-xs font-semibold leading-tight">{value}</span>
                      </div>
                    </Tag>
                  );
                })}
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  minHeight: "200px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(45,212,191,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {/* Blurred resume background — lines simulated with CSS */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "100% 22px, 40px 100%",
                    filter: "blur(0.5px)",
                    opacity: 0.6,
                  }}
                />

                {/* Faux resume content blocks — blurred */}
                <div className="absolute inset-0 p-4 flex flex-col gap-2 pointer-events-none" style={{ filter: "blur(3px)", opacity: 0.35 }}>
                  {/* Header block */}
                  <div className="h-5 w-3/4 rounded" style={{ background: "linear-gradient(90deg,#2DD4BF,#8B5CF6)" }} />
                  <div className="h-2.5 w-1/2 rounded bg-slate-500" />
                  <div className="mt-2 h-px w-full bg-slate-600" />
                  {/* Body lines */}
                  {[100, 90, 80, 95, 75, 85, 70, 88, 60, 78].map((w, i) => (
                    <div key={i} className="h-2 rounded bg-slate-600" style={{ width: `${w}%`, opacity: 0.7 }} />
                  ))}
                  <div className="mt-1 h-px w-full bg-slate-600" />
                  {[95, 80, 85].map((w, i) => (
                    <div key={i} className="h-2 rounded bg-slate-600" style={{ width: `${w}%`, opacity: 0.6 }} />
                  ))}
                </div>

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(2,8,23,0.55), rgba(45,212,191,0.06))" }}
                />

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
                    <p className="text-white text-xs font-bold uppercase tracking-widest leading-none">View Resume</p>
                    <p className="text-slate-400 text-xs mt-1">Click to open PDF</p>
                  </div>
                </div>

                {/* Corner badge */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full"
                  style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.25)" }}
                >
                  <FileText size={10} color="#2DD4BF" />
                  <span style={{ fontSize: "10px", color: "#2DD4BF", fontWeight: 700 }}>PDF</span>
                </div>
              </a>

            </div>{/* end two-col split */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
            >
              <form onSubmit={handleSubmit(submitContactForm)} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    style={inputBase}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-invalid={Boolean(errors.name)}
                    {...register("name", {
                      required: "Name is required",
                      validate: (value) => value.trim().length > 0 || "Name is required",
                    })}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    style={inputBase}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-invalid={Boolean(errors.email)}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    style={{ ...inputBase, resize: "vertical" }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-invalid={Boolean(errors.message)}
                    {...register("message", {
                      required: "Message is required",
                      validate: (value) => value.trim().length > 0 || "Message is required",
                    })}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {formStatus && (
                  <p
                    role={formStatus.type === "error" ? "alert" : "status"}
                    aria-live={formStatus.type === "error" ? "assertive" : "polite"}
                    className={`text-sm ${formStatus.type === "success" ? "text-teal-300" : "text-red-400"}`}
                  >
                    {formStatus.message}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 font-semibold text-sm rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #2DD4BF, #8B5CF6)", color: "#0B0E1A" }}
                  onMouseEnter={(e) => !loading && (e.currentTarget.style.filter = "brightness(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : "Send Message"}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
