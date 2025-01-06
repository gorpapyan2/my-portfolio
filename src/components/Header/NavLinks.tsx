import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => `
        relative px-4 py-2 text-gray-600 dark:text-gray-300 
        hover:text-[#edfc3a] transition-colors duration-300 group
        ${isActive ? 'text-[#edfc3a]' : ''}
      `}
    >
      {children}
      <span
        className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#edfc3a] scale-x-0 group-hover:scale-x-100 
        transition-transform duration-300 origin-left"
      />
    </RouterNavLink>
  );
}

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
