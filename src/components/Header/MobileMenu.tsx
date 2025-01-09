import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 md:hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0B] rounded-full shadow-lg transition-all duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-300 hover:text-[#FFFF00] transition-colors duration-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Expanding Header with Links */}
      <div
        className={`${isOpen ? "max-h-screen py-10" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <nav className="flex flex-col items-center space-y-4">
          {[
            { to: "/about", label: "About" },
            { to: "/work", label: "Work" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <MobileNavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </MobileNavLink>
          ))}
        </nav>
      </div>
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
      className={({ isActive }) =>
        `
          ${isActive ? "text-[#FFFF00]" : ""}
        `
      }
    >
      {children}
    </NavLink>
  );
}
