import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 md:hidden">
      {/* Closed State - Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0A0A0B] rounded-full shadow-lg w-full">
        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-300 hover:text-[#FFFF00] transition-colors duration-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Open State - Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-b from-[#0A0A0B] to-[#111112] backdrop-blur-xl">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Navigation Menu */}
          <nav className="relative z-50 flex flex-col items-center justify-center h-full space-y-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#FFFF00] transition-transform duration-300 transform hover:scale-110"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Logo at the top center */}
            <div className="absolute top-10 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FFFF00] rounded-full shadow-lg">
                <span className="text-black font-bold text-lg">⚡</span>
              </div>
              <span className="text-gray-300 mt-2 text-xl font-semibold">Gor Papyan</span>
            </div>

            {/* Menu Links */}
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink to="/work" onClick={() => setIsOpen(false)}>
              Work
            </MobileNavLink>
            <MobileNavLink to="/experience" onClick={() => setIsOpen(false)}>
              Experience
            </MobileNavLink>
            <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>

            {/* Footer (optional) */}
            <div className="absolute bottom-10 text-gray-500 text-sm">
              © {new Date().getFullYear()} Gor Papyan
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ to, children, onClick }: MobileNavLinkProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `
        text-2xl font-medium text-gray-300 
        hover:text-[#FFFF00] transition-colors duration-300 
        ${isActive ? "text-[#FFFF00]" : ""}
      `}
    >
      {children}
    </NavLink>
  );
}
