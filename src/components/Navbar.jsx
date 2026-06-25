import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, Menu, X } from "lucide-react";
import Resume from "../assets/Mohammad_Akram.pdf";

// Exported so Home (and any other section) can offset its top padding
// by exactly the navbar's height, since the navbar is position:fixed
// and sits outside the normal document flow.
export const NAV_HEIGHT = 80;

const navLinks = [
  { label: "About",       href: "#home" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

const Navbar = () => {
  const [active, setActive]     = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Portal-mount guard: document.body only exists on the client,
  // so we wait one render before portalling (also makes this
  // safe under Next.js / any SSR setup).
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Smooth scroll to a section, accounting for the fixed navbar's height
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
        .ahn-display { font-family: 'Manrope', sans-serif; }
        .ahn-body    { font-family: 'Inter', sans-serif; }

        /* Fixed navbar — pinned directly to the viewport via document.body portal,
           so no parent's transform/filter/overflow can ever drag it along on scroll */
        .ahn-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 80px;
          z-index: 9999;
          background-color: #020817;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
        }

        .ahn-nav-link {
          color: #94A3B8;
          transition: color .2s, background .2s;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }
        .ahn-nav-link:hover { color: #F1F5F9; background: rgba(255,255,255,0.05); }
        .ahn-nav-active     { color: #0B0E1A !important; background: linear-gradient(135deg,#2DD4BF,#8B5CF6) !important; }

        .ahn-resume {
          border: 1px solid rgba(255,255,255,0.18);
          color: #E2E8F0;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background .2s, border-color .2s;
          cursor: pointer;
          text-decoration: none;
        }
        .ahn-resume:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.32); }

        .ahn-mobile-menu {
          position: fixed;
          top: 80px; left: 0; right: 0;
          z-index: 9998;
          background: #020817;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 16px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ahn-mobile-link {
          padding: 10px 16px;
          border-radius: 10px;
          color: #94A3B8;
          font-size: 15px;
          font-weight: 500;
          transition: color .15s, background .15s;
        }
        .ahn-mobile-link:hover { color: #F1F5F9; background: rgba(255,255,255,0.05); }
        .ahn-mobile-active { color: #0B0E1A !important; background: linear-gradient(135deg,#2DD4BF,#8B5CF6) !important; }
      `}</style>

      <header className="ahn-navbar">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="flex items-center gap-3 no-underline">
            <div className="ahn-display w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-violet-500 flex items-center justify-center text-slate-950 font-extrabold text-sm flex-shrink-0">
              MA
            </div>
            <div className="leading-tight">
              <p className="ahn-display font-bold text-sm text-white">Mohammad Akram</p>
              <p className="ahn-body text-xs text-slate-400">Full Stack Engineer</p>
            </div>
          </a>

          <nav
            className="hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
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

          <div className="flex items-center gap-3">
            {/* Uses the imported PDF module (Resume), not a raw string path —
                the bundler resolves this to the correct hashed asset URL. */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ahn-resume ahn-body"
            >
              <FileText size={15} /> Resume
            </a>

            <button
              className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
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
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ahn-resume ahn-body mt-2 justify-center"
          >
            <FileText size={15} /> Resume
          </a>
        </div>
      )}
    </>
  );

  // Render straight into <body>, bypassing wherever <Navbar /> happens to
  // sit in the component tree. This is the fix: if any parent wrapper in
  // the app (a page-transition div, an AOS/Framer Motion container, an
  // "overflow-x-hidden" shell, etc.) has a transform/filter/perspective
  // style, the browser makes THAT element the positioning context for any
  // position:fixed descendant — so the navbar ends up "fixed" to that
  // moving wrapper instead of the real viewport, and appears to scroll.
  // Portalling to document.body sidesteps that entirely.
  if (!mounted) return null;
  return createPortal(navbarUI, document.body);
};

export default Navbar;