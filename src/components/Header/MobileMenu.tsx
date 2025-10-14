import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedRef = useRef<Element | null>(null);
  const location = useLocation();
  const navItems = [
    { to: "/about", label: "About" },
    { to: "/work", label: "Work" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // (reduced-motion, focus traps, inert) intentionally omitted for baseline stability

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Underlay inert/aria-hidden removed for simplicity

  // Focus management: move focus to close button when opened
  useEffect(() => {
    if (isOpen) {
      // Delay to ensure element exists after render
      const id = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
      return () => window.clearTimeout(id);
    }
  }, [isOpen]);

  // Restore focus to the previously focused opener when closed
  useEffect(() => {
    if (!isOpen && previouslyFocusedRef.current instanceof HTMLElement) {
      previouslyFocusedRef.current.focus();
    }
  }, [isOpen]);

  // Handle ESC to close when drawer has focus
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) return;
    if (e.key === "Escape") {
      e.stopPropagation();
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <button
        ref={triggerButtonRef}
        onClick={() => {
          previouslyFocusedRef.current = document.activeElement;
          setIsOpen(true);
        }}
        className="p-2 text-gray-300 hover:text-[#FFFF00] transition-colors duration-300 hover:scale-110 active:scale-95"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isMounted && createPortal(
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
            aria-hidden={!isOpen}
          />

          {/* Sidebar Drawer */}
          <div
            id="mobile-sidebar"
            ref={sidebarRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-sidebar-title"
            className={`fixed top-0 right-0 z-[1001] h-full w-[90vw] max-w-sm sm:w-80 sm:max-w-[85%] text-white shadow-2xl ring-1 ring-white/10 transform transition-transform duration-300 overscroll-contain ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } relative`}
            onKeyDown={onKeyDown}
            style={{
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            {/* Solid background layer to prevent bleeding */}
            <div className="absolute inset-0 bg-[#0A0A0B]/95" aria-hidden="true" />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1012]/90" aria-hidden="true" />

            <div className="relative z-10 flex items-center justify-between px-4 py-4 border-b border-white/10">
              <h2 id="mobile-sidebar-title" className="text-lg font-semibold">Menu</h2>
              <button
                ref={closeButtonRef}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-300 hover:text-[#FFFF00] focus:outline-none focus:ring-2 focus:ring-[#FFFF00]/60 transition-transform duration-300 hover:rotate-90"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="relative z-10 px-4 py-6">
              <ul className="space-y-1 divide-y divide-white/5">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <MobileNavLink to={to} onClick={() => setIsOpen(false)}>
                      {label}
                    </MobileNavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>,
        document.body
      )}
    </div>
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
        `block rounded-md px-4 py-3 text-base transition-colors duration-200 ${
          isActive
            ? "text-[#FFFF00]"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
