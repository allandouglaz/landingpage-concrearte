import { motion } from "framer-motion";

const Hero: React.FC = () => (
  <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
    {/* Imagem animada, começa mais distante */}
    <motion.div
      initial={{ scale: 1.28, opacity: 0.85, filter: "blur(2px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 2.9, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: "url('/capa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
    />
    {/* Overlay escura */}
    <div className="absolute inset-0 bg-black/60 z-10"></div>

    {/* Conteúdo central */}
    <div className="relative z-20 text-center text-white px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">
        Solidez e tradição em soluções para concreto.
      </h1>
      <p className="mb-6 text-xl max-w-2xl">
        Há mais de 20 anos sendo referência nacional em fornecimento de concreto, excelência em serviços e inovação em todas as etapas da obra.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
        <a
          href="#about"
          className="px-8 py-3 bg-blue-900 rounded-2xl shadow hover:bg-blue-800 font-semibold transition"
        >
          Conheça a Concrearte
        </a>
        <a
          href="/PORTFOLIO_DIGITAL.pdf"
          download="Concrearte_Portfolio.pdf"
          className="px-8 py-3 bg-white/30 hover:bg-white/50 rounded-2xl shadow font-semibold text-white transition"
        >
          Portfólio Digital
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
