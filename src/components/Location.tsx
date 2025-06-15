import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 }
  }),
};

const units = [
  { nome: "UPC-Ouricuri", estado: "PE", cidade: "Ouricuri", lat: -7.9833, lon: -40.0319, img: "/upc-ouricuri.jpg" },
  { nome: "UPC-Carpina", estado: "PE", cidade: "Carpina", lat: -7.8670, lon: -35.2980, img: "/upc-carpina.jpg" },
  { nome: "UPC-Caruaru", estado: "PE", cidade: "Caruaru", lat: -8.2828, lon: -35.9758, tipo: "matriz", img: "/upc-caruaru.jpg" },
  { nome: "UPC-Palmares", estado: "PE", cidade: "Palmares", lat: -8.6566, lon: -35.4879, img: "/upc-palmares.jpg" },
  { nome: "UPC-Barreiros", estado: "PE", cidade: "Barreiros", lat: -8.6699, lon: -35.0629, img: "/upc-barreiros.jpg" },
  { nome: "UPC-Jaboatão dos Guararapes", estado: "PE", cidade: "Jaboatão dos Guararapes", lat: -8.1120, lon: -34.9456, img: "/upc-jaboatao.jpg" },
  { nome: "UPC-Suape", estado: "PE", cidade: "Suape", lat: -8.2499, lon: -34.9474, img: "/upc-suape.jpg" },
  { nome: "UPC-Arcoverde", estado: "PE", cidade: "Arcoverde", lat: -8.4199, lon: -37.0570, img: "/upc-arcoverde.jpg" },
  { nome: "UPC-Araripina", estado: "PE", cidade: "Araripina", lat: -7.5877, lon: -40.4961, img: "/upc-araripina.jpg" },
  { nome: "UPC-Escada", estado: "PE", cidade: "Escada", lat: -8.2172, lon: -35.1611, img: "/upc-escada.jpg" },
  { nome: "UPC-Recife", estado: "PE", cidade: "Recife", lat: -8.0476, lon: -34.8770, img: "/upc-recife.jpg" },
  { nome: "UPC-Tamandaré", estado: "PE", cidade: "Tamandaré", lat: -8.7550, lon: -35.0403, img: "/upc-tamandare.jpg" },
  { nome: "UPC-Vitória de Santo Antão", estado: "PE", cidade: "Vitória de Santo Antão", lat: -8.1124, lon: -35.3226, img: "/upc-vitoria.jpg" },
  { nome: "UPC-Campina Grande", estado: "PB", cidade: "Campina Grande", lat: -7.2306, lon: -35.8819, img: "/upc-campina-grande.jpg" },
  { nome: "UPC-Cabedelo", estado: "PB", cidade: "Cabedelo", lat: -7.0853, lon: -34.8277, img: "/upc-cabedelo.jpg" },
  { nome: "UPC-Santana do Ipanema", estado: "AL", cidade: "Santana do Ipanema", lat: -9.3778, lon: -37.2450, img: "/upc-santana-do-ipanema.jpg" },
  { nome: "UPC-Crato", estado: "CE", cidade: "Crato", lat: -7.2328, lon: -39.3888, img: "/upc-crato.jpg" },
  { nome: "UPC-Paulo Afonso", estado: "BA", cidade: "Paulo Afonso", lat: -9.4089, lon: -38.2455, img: "/upc-paulo-afonso.jpg" },
  { nome: "UPC-Picos", estado: "PI", cidade: "Picos", lat: -7.0870, lon: -41.4699, img: "/upc-picos.jpg" },
  { nome: "UPC-Mossoró", estado: "RN", cidade: "Mossoró", lat: -5.1878, lon: -37.3442, img: "/upc-mossoro.jpg" },
];

const Locations: React.FC = () => (
  <section id="locations" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-940">Nossas Unidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {units.map((unit, i) => (
          <motion.div
            key={unit.nome}
            className="relative rounded-2xl shadow text-center h-56 flex flex-col justify-center items-center overflow-hidden"
            style={{
              backgroundImage: unit.img ? `url(${unit.img})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="block text-lg font-bold text-white drop-shadow">
                {unit.nome}
                {unit.tipo === "matriz" && (
                  <span className="inline-block bg-blue-200 text-blue-900 rounded px-2 py-0.5 text-xs ml-2">
                    Matriz
                  </span>
                )}
              </span>
              <span className="block text-sm text-gray-200 mt-2 drop-shadow">
                {unit.cidade} - {unit.estado}
              </span>
              {"lat" in unit && "lon" in unit && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${unit.lat},${unit.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs text-blue-200 underline hover:text-blue-400 transition"
                >
                  Ver no Google Maps
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Locations;
