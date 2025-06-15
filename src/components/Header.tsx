const Header: React.FC = () => (
    <header className="sticky top-0 z-10 bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-2xl text-blue-800">Concrearte</span>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-700">Sobre</a>
          <a href="#services" className="hover:text-blue-700">Serviços</a>
          <a href="#differentials" className="hover:text-blue-700">Diferenciais</a>
          <a href="#projects" className="hover:text-blue-700">Projetos</a>
          <a href="#contact" className="hover:text-blue-700">Contato</a>
        </nav>
      </div>
    </header>
  );
  
  export default Header;