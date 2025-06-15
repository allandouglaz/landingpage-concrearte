import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  }),
};

const projects = [
  {
    title: "Obra X - Recife/PE",
    description: "Fornecimento de concreto e bombeamento para empreendimento residencial de grande porte."
  },
  {
    title: "Complexo Y - Salvador/BA",
    description: "Participação em todas as etapas de concretagem de um dos maiores centros comerciais da região."
  },
  {
    title: "Parque Industrial Z - SP",
    description: "Concreto especial, atendimento personalizado e entrega em prazos desafiadores."
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Projetos Atendidos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-gray-50 rounded-2xl shadow p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <span className="font-bold">{project.title}</span>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
