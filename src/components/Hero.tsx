import { motion } from "framer-motion";

const Hero: React.FC = () => (
  <section
    className="relative h-[65vh] flex items-center justify-center bg-center bg-cover"
    style={{
      backgroundImage: "url('/hero-betoneiras.jpg')", // Ou a imagem que preferir
    }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">
        Solidez e tradição em soluções para concreto.
      </h1>
      <p className="mb-6 text-xl max-w-2xl">
        Há mais de 20 anos sendo referência nacional em fornecimento de concreto, excelência em serviços e inovação em todas as etapas da obra.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
        <a
          href="#about"
          className="px-8 py-3 bg-blue-700 rounded-2xl shadow hover:bg-blue-800 font-semibold transition"
        >
          Conheça a Concrearte
        </a>
        <a
          href="/CONCREARTE_PORTFOLIO.pdf"
          className="px-8 py-3 bg-white/30 hover:bg-white/50 rounded-2xl shadow font-semibold text-white transition"
          target="_blank" rel="noopener noreferrer"
        >
          Portfólio Digital
        </a>
      </div>
    </div>
  </section>
);


export default Hero;
