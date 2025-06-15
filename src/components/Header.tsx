const links = [
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "#differentials", label: "Diferenciais" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

const Header: React.FC = () => (
  <header className="sticky top-0 z-20 bg-gray-300 shadow">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between p-4 gap-2">
      <a href="#" className="flex items-center gap-2 mb-2 sm:mb-0">
        <img
          src="/LOGO CONCREARTE.png"
          alt="Logo Concrearte"
          className="h-7 sm:h-7 w-auto"
        />
      </a>
      <nav className="flex gap-3 sm:gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="
              relative
              after:content-[''] after:block after:h-[2px] after:w-0
              after:bg-blue-800 after:transition-all after:duration-300
              hover:after:w-full
              py-1
              font-medium
              "
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
