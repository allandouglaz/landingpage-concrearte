const links = [
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "#differentials", label: "Diferenciais" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

const Header: React.FC = () => (
  <header className="sticky top-0 z-20 bg-white shadow">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
    <a href="#" className="flex items-center gap-2">
        <img
          src="/LOGO CONCREARTE.png"
          alt="Logo Concrearte"
          className="h-10 w-auto"
          style={{ maxHeight: 25 }} 
          />
      </a>
      <nav className="flex gap-6">
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
