const Projects: React.FC = () => (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Projetos Atendidos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl shadow p-4">
            <span className="font-bold">Residencial Topázio</span>
            <p>Fornecimento de concreto para mais de 200 apartamentos.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-4">
            <span className="font-bold">Shopping Concretão</span>
            <p>Concreto especial para shopping de grande porte.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Projects;