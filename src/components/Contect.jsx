import { useEffect, useState, useRef, useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaLinkedin, FaGithubSquare, FaMapMarkerAlt } from "react-icons/fa";
import { apiConnector } from "../services/apiConnector";
import { contactusEndpoint } from "../services/api";
import { CountryCode } from "../data/CountryCode";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Search, FileText, ExternalLink } from "lucide-react";
import ProfilePhoto from "../assets/profile.jpeg";
import RESUME_URL from "../assets/Mohammad_Akram.pdf";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  /* ── Country code dropdown (unchanged logic) ────────────────────────── */
  const [dialCode, setDialCode]       = useState(CountryCode[0]);
  const [ccOpen, setCcOpen]           = useState(false);
  const [ccQuery, setCcQuery]         = useState("");
  const [ccHighlight, setCcHighlight] = useState(0);
  const ccContainerRef = useRef(null);
  const ccSearchRef    = useRef(null);

  useEffect(() => {
    register("CountryCode");
    setValue("CountryCode", dialCode.code);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCountries = useMemo(() => {
    const q = ccQuery.trim().toLowerCase().replace("+", "");
    if (!q) return CountryCode;
    return CountryCode.filter(
      (c) =>
        c.country.toLowerCase().includes(q) ||
        c.code.replace("+", "").includes(q)
    );
  }, [ccQuery]);

  useEffect(() => setCcHighlight(0), [ccQuery, ccOpen]);

  useEffect(() => {
    const onClick = (e) => {
      if (ccContainerRef.current && !ccContainerRef.current.contains(e.target)) {
        setCcOpen(false);
        setCcQuery("");
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    if (ccOpen) ccSearchRef.current?.focus();
  }, [ccOpen]);

  const pickCountry = (country) => {
    setDialCode(country);
    setValue("CountryCode", country.code);
    setCcOpen(false);
    setCcQuery("");
  };

  const onCcKeyDown = (e) => {
    if (e.key === "Escape") { setCcOpen(false); setCcQuery(""); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setCcHighlight((h) => Math.min(h + 1, filteredCountries.length - 1)); }
    else if (e.key === "ArrowUp")   { e.preventDefault(); setCcHighlight((h) => Math.max(h - 1, 0)); }
    else if (e.key === "Enter")     { e.preventDefault(); if (filteredCountries[ccHighlight]) pickCountry(filteredCountries[ccHighlight]); }
  };

  /* ── Form submit (unchanged logic) ──────────────────────────────────── */
  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data, {
        "Content-Type": "application/json",
      });
      if (res.data?.success) {
        toast.success(res.data.message || "Message sent successfully!");
        reset();
        setDialCode(CountryCode[0]);
        setValue("CountryCode", CountryCode[0].code);
      } else {
        toast.error(res.data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  /* ── Shared input styles ────────────────────────────────────────────── */
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

  /* ── Left column data ───────────────────────────────────────────────── */
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

        {/* ── Header ──────────────────────────────────────────────────── */}
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
            Have an exciting project or opportunity? I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN
          ══════════════════════════════════════════════════════════════ */}
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
                  Full-stack developer focused on scalable web apps, backend systems, and CI/CD-driven delivery.
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

              {/* ── Right half: blurred resume preview + open icon */}
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

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN — Form (zero changes from before)
          ══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
            >
              <form onSubmit={handleSubmit(submitContactForm)} className="space-y-5">

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { field: "firstName", label: "First Name", placeholder: "Akram" },
                    { field: "lastName",  label: "Last Name",  placeholder: "Shaikh" },
                  ].map(({ field, label, placeholder }) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                        {label} <span className="text-red-400">*</span>
                      </label>
                      <input
                        id={field}
                        placeholder={placeholder}
                        style={inputBase}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        {...register(field, { required: `${label} is required` })}
                      />
                      {errors[field] && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <span>•</span>{errors[field]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email" type="email" placeholder="you@example.com"
                    style={inputBase} onFocus={onFocus} onBlur={onBlur}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><span>•</span>{errors.email.message}</p>}
                </div>

                {/* Phone — OPTIONAL */}
                <div>
                  <label htmlFor="contactNumber" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Phone Number <span className="text-slate-600">(optional)</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div ref={ccContainerRef} className="relative" style={{ width: "110px", flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => setCcOpen((o) => !o)}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={{ ...inputBase, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
                      >
                        <span>{dialCode.code}</span>
                        <ChevronDown size={14} style={{ flexShrink: 0, transform: ccOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
                      </button>

                      {ccOpen && (
                        <div
                          className="absolute z-50 mt-2 rounded-lg overflow-hidden"
                          style={{ width: "240px", background: "#0f172a", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)" }}
                        >
                          <div style={{ padding: "8px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                            <div className="relative">
                              <Search size={13} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                              <input
                                ref={ccSearchRef}
                                value={ccQuery}
                                onChange={(e) => setCcQuery(e.target.value)}
                                onKeyDown={onCcKeyDown}
                                placeholder="Search country or code…"
                                style={{ ...inputBase, padding: "8px 10px 8px 30px", fontSize: "13px" }}
                              />
                            </div>
                          </div>
                          <ul role="listbox" style={{ maxHeight: "220px", overflowY: "auto", padding: "4px 0" }}>
                            {filteredCountries.length === 0 && (
                              <li style={{ padding: "10px 14px", fontSize: "13px", color: "#64748B" }}>No matches found</li>
                            )}
                            {filteredCountries.map((c, i) => {
                              const isSelected = c.code === dialCode.code && c.country === dialCode.country;
                              const isHighlighted = i === ccHighlight;
                              return (
                                <li
                                  key={c.country}
                                  role="option"
                                  aria-selected={isSelected}
                                  onMouseEnter={() => setCcHighlight(i)}
                                  onClick={() => pickCountry(c)}
                                  style={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px",
                                    padding: "9px 14px", fontSize: "13px", cursor: "pointer",
                                    color: isSelected ? "#5EEAD4" : "#CBD5E1",
                                    background: isHighlighted ? "rgba(255,255,255,0.06)" : "transparent",
                                  }}
                                >
                                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.country}</span>
                                  <span style={{ flexShrink: 0, color: "#64748B" }}>{c.code}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>

                    <input
                      id="contactNumber" type="tel" placeholder="1234567890"
                      style={{ ...inputBase, width: "100%" }}
                      onFocus={onFocus} onBlur={onBlur}
                      {...register("contactNumber", {
                        minLength: { value: 8, message: "Too short" },
                        maxLength: { value: 10, message: "Too long" },
                      })}
                    />
                  </div>
                  {errors.contactNumber && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><span>•</span>{errors.contactNumber.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message" rows="4"
                    placeholder="Tell me about your project or opportunity..."
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={onFocus} onBlur={onBlur}
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><span>•</span>{errors.message.message}</p>}
                </div>

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