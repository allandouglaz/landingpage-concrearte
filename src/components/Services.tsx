import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  }),
};

const services = [
  {
    title: "Concreto dosado em central",
    desc: "Concreto de alta qualidade, produzido sob rigorosos padrões, pronto para sua obra.",
    img: "/concreto-central.jpg"
  },
  {
    title: "Bombeamento de concreto",
    desc: "Serviço de bombeamento ágil e seguro, atendendo projetos de todos os portes.",
    img: "/bombeamento.jpg"
  },
  {
    title: "Locação de equipamentos",
    desc: "Frota moderna de betoneiras, bombas e caminhões para locação e apoio logístico.",
    img: "/locacao-equipamentos.jpg"
  },
  {
    title: "Consultoria técnica",
    desc: "Acompanhamento de obra, orientações técnicas e suporte especializado do início ao fim.",
    img: "/consultoria-tecnica.jpg"
  },
];

const Services: React.FC = () => (
  <section id="services" className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Nossos Serviços</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="relative rounded-2xl shadow text-center h-56 flex flex-col justify-end items-center overflow-hidden"
            style={{
              backgroundImage: `url(${service.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            {/* Overlay escura para contraste */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-4">
              <h3 className="font-bold text-xl mb-2 text-white drop-shadow">{service.title}</h3>
              <p className="text-white drop-shadow">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
