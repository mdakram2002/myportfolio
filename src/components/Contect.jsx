import { useEffect, useState, useRef, useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { apiConnector } from "../services/apiConnector";
import { contactusEndpoint } from "../services/api";
import { CountryCode } from "../data/CountryCode";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Search } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  /* ── Country code: name + code + search logic (UI/layout unchanged) ── */
  const [dialCode, setDialCode]       = useState(CountryCode[0]); // same default the native <select> used (first item)
  const [ccOpen, setCcOpen]           = useState(false);
  const [ccQuery, setCcQuery]         = useState("");
  const [ccHighlight, setCcHighlight] = useState(0);

  const ccContainerRef = useRef(null);
  const ccSearchRef    = useRef(null);

  // Register a hidden field so "CountryCode" still lands in the submitted
  // form data exactly like before — just set via setValue() now instead
  // of the browser's native <select> value.
  useEffect(() => {
    register("CountryCode");
    setValue("CountryCode", dialCode.code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Typing filters the list by country name OR code, so matches are the
  // only ones shown — effectively "shown first" instead of scrolling
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

  // Close dropdown on outside click
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

  // Autofocus the search box when opened
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
    if (e.key === "Escape") {
      setCcOpen(false);
      setCcQuery("");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCcHighlight((h) => Math.min(h + 1, filteredCountries.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCcHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCountries[ccHighlight]) pickCountry(filteredCountries[ccHighlight]);
    }
  };

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
  /* Subtle teal border on focus — no glow/shadow */
  const onFocus  = e => { e.target.style.borderColor = "rgba(45,212,191,0.45)"; };
  const onBlur   = e => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; };

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
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-teal-300 mb-5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Sparkles size={13} />
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: "'Manrope', sans-serif" }}>
            Let's{" "}
            <span style={{
              background: "linear-gradient(135deg, #2DD4BF, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Connect
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an exciting project or opportunity? I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Left: Info cards ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white"
                  style={{ fontFamily: "'Manrope', sans-serif" }}>
                Reach Out Directly
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Connect through any of these platforms. I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: FaEnvelope,     label: "Email",    display: "mdakram12022002@gmail.com",        href: "mailto:mdakram12022002@gmail.com",          from: "#2DD4BF", to: "#60A5FA" },
                { icon: FaLinkedin,     label: "LinkedIn", display: "Connect With Me",                   href: "https://www.linkedin.com/in/mdakram2002",   from: "#8B5CF6", to: "#EC4899" },
                { icon: FaGithubSquare, label: "GitHub",   display: "View My Projects",                  href: "https://github.com/mdakram2002",            from: "#6366F1", to: "#8B5CF6" },
              ].map(({ icon: Icon, label, display, href, from, to }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${from}44`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                       style={{ background: `linear-gradient(135deg, ${from}22, ${to}22)`, border: `1px solid ${from}33` }}>
                    <Icon style={{ color: from, fontSize: "18px" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5">{label}</p>
                    <span className="text-slate-200 text-sm font-semibold break-all">{display}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 sm:p-8 rounded-2xl"
                 style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>
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

                    {/* Country code — searchable by name, shows name + code in the list,
                        same footprint (110px / inputBase look) as the old native <select> */}
                    <div ref={ccContainerRef} className="relative" style={{ width: "110px", flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => setCcOpen(o => !o)}
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
                  onMouseEnter={e => !loading && (e.currentTarget.style.filter = "brightness(1.08)")}
                  onMouseLeave={e => (e.currentTarget.style.filter = "none")}
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