const Hero: React.FC = () => (
    <section
      className="relative h-[65vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/hero-betoneiras.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          A Concrearte é conhecida por sua solidez, abrangência e tradição.
        </h1>
        <p className="mb-6 text-xl max-w-2xl mx-auto">
          Consolidada como referência no segmento, com unidades espalhadas pelo Brasil,
          oferecendo produtos e serviços com excelência.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 font-semibold text-white transition shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" fill="white"/>
            </svg>
            Vídeo Institucional
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 font-semibold text-white transition shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="white"/>
            </svg>
            Apresentação Institucional
          </a>
        </div>
      </div>
    </section>
  );
  
  export default Hero;
  