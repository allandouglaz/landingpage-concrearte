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
    desc: "Concreto de alta qualidade, produzido sob rigorosos padrões, pronto para sua obra."
  },
  {
    title: "Bombeamento de concreto",
    desc: "Serviço de bombeamento ágil e seguro, atendendo projetos de todos os portes."
  },
  {
    title: "Locação de equipamentos",
    desc: "Frota moderna de betoneiras, bombas e caminhões para locação e apoio logístico."
  },
  {
    title: "Consultoria técnica",
    desc: "Acompanhamento de obra, orientações técnicas e suporte especializado do início ao fim."
  },
];

const Services: React.FC = () => (
  <section
    id="services"
    className="py-16 relative"
    style={{
      backgroundImage: "url('/bg-servicos.jpg')", // sua imagem no public/
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    {/* Overlay para suavizar e manter legibilidade */}
    <div className="absolute inset-0 pointer-events-none z-0"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-2xl shadow p-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
