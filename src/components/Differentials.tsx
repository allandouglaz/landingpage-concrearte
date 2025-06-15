import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  }),
};

const differentials = [
  {
    title: "Frota Própria",
    desc: "Veículos modernos, manutenção preventiva e equipe qualificada para garantir entregas pontuais."
  },
  {
    title: "Laboratório próprio",
    desc: "Controle total da qualidade com ensaios rigorosos, tecnologia de ponta e certificações técnicas."
  },
  {
    title: "Atendimento personalizado",
    desc: "Equipe técnica e comercial dedicada a entender e atender cada cliente de forma exclusiva."
  },
  {
    title: "Abrangência nacional",
    desc: "Unidades estrategicamente localizadas para atender projetos em todo o Brasil."
  },
  {
    title: "Sustentabilidade",
    desc: "Práticas sustentáveis e compromisso ambiental em todas as etapas do processo."
  },
];

const Differentials: React.FC = () => (
  <section
    id="differentials"
    className="py-16 relative"
    style={{
      backgroundImage: "url('/bg-diferenciais.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    <div className="absolute inset-0 pointer-events-none z-0"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-999">Nossos Diferenciais</h2>
      <ul className="grid md:grid-cols-3 gap-8">
        {differentials.map((item, i) => (
          <motion.li
            key={item.title}
            className="bg-white rounded-2xl shadow p-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <span className="block text-2xl font-bold mb-2">{item.title}</span>
            <p>{item.desc}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);


export default Differentials;
