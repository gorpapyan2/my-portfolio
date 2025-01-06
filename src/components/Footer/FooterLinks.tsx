export function FooterLinks() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <ul className="flex flex-wrap gap-6">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-300 hover:text-[#edfc3a] transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}