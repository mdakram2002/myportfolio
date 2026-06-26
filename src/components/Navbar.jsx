import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, Menu, X } from "lucide-react";
import Resume from "../assets/Mohammad_Akram.pdf";

// Exported so Home (and any other section) can offset its top padding.
// The navbar now floats with a top margin instead of sitting flush
// against the edge, so this accounts for that offset + the pill height.
export const NAV_HEIGHT = 96;

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
];

const Navbar = () => {
  const [active, setActive]     = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Portal-mount guard: document.body only exists on the client,
  // so we wait one render before portalling (also makes this
  // safe under Next.js / any SSR setup).
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Smooth scroll to a section, accounting for the floating navbar's height
  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Highlight whichever section is currently under the navbar
  useEffect(() => {
    const onScroll = () => {
      for (const { href } of [...navLinks].reverse()) {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= NAV_HEIGHT + 40) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarUI = (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');
        .ahn-body { font-family: 'Inter', sans-serif; }

        /* Small decorative handle floating just above the pill */
        .ahn-handle {
          position: fixed;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: 36px;
          height: 4px;
          border-radius: 999px;
          background: rgba(255,255,255,0.22);
        }

        /* The floating, centered pill navbar — glass background, not full-width */
        .ahn-navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px 8px 8px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.55);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
        }

        .ahn-links { align-items: center; gap: 2px; }

        .ahn-nav-link {
          color: #CBD5E1;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 18px;
          border-radius: 999px;
          white-space: nowrap;
          transition: color .2s, background .2s;
        }
        .ahn-nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        /* Active state — existing teal→violet brand gradient, dialed down to
           the same low opacity/weight as the muted pill in the reference image */
        .ahn-nav-active {
          color: #fff !important;
          background: linear-gradient(135deg, rgba(45,212,191,0.35), rgba(139,92,246,0.35)) !important;
        }

        /* Circular resume button — replaces the dark/light toggle slot */
        .ahn-resume-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(241,245,249,0.92);
          color: #0B0E1A;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform .2s, background .2s;
        }
        .ahn-resume-circle:hover { background: #fff; transform: scale(1.06); }

        /* "Hire Me" pill — sits slightly taller than the bar, same pop-out feel as the reference */
        .ahn-hire {
          background: #fff;
          color: #0B0E1A;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          margin: -6px 0;
          transition: transform .2s, filter .2s;
        }
        .ahn-hire:hover { filter: brightness(0.96); transform: scale(1.03); }

        /* Mobile hamburger toggle (sits inside the pill in place of the link row) */
        .ahn-burger {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #CBD5E1;
          transition: background .2s, color .2s;
        }
        .ahn-burger:hover { background: rgba(255,255,255,0.06); color: #fff; }

        .ahn-mobile-menu {
          position: fixed;
          top: 84px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9998;
          width: 220px;
          background: rgba(15, 23, 42, 0.92);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6);
        }
        .ahn-mobile-link {
          padding: 10px 14px;
          border-radius: 10px;
          color: #CBD5E1;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          transition: color .15s, background .15s;
        }
        .ahn-mobile-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .ahn-mobile-active {
          color: #fff !important;
          background: linear-gradient(135deg, rgba(45,212,191,0.35), rgba(139,92,246,0.35)) !important;
        }
      `}</style>

      <div className="ahn-handle" />

      <header className="ahn-navbar">
        {/* Desktop links */}
        <nav className="ahn-links hidden md:flex items-center">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className={`ahn-body ahn-nav-link ${active === href.replace("#", "") ? "ahn-nav-active" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger (replaces the link row on small screens) */}
        <button
          className="ahn-burger inline-flex items-center justify-center md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Resume — replaces the dark/light mode toggle */}
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="ahn-resume-circle"
          aria-label="Download résumé"
        >
          <FileText size={17} />
        </a>

        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className="ahn-hire ahn-body"
        >
          Hire Me
        </a>
      </header>

      {menuOpen && (
        <div className="ahn-mobile-menu md:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className={`ahn-body ahn-mobile-link ${active === href.replace("#", "") ? "ahn-mobile-active" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );

  // Render straight into <body>, bypassing wherever <Navbar /> happens to
  // sit in the component tree, so no parent's transform/filter/overflow
  // can ever interfere with this fixed positioning.
  if (!mounted) return null;
  return createPortal(navbarUI, document.body);
};

export default Navbar;