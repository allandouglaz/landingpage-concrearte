const Services: React.FC = () => (
  <section id="services" className="bg-white py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-2xl shadow p-6 text-center">
          <h3 className="font-bold text-xl mb-2">Concreto dosado em central</h3>
          <p>Concreto de alta qualidade, produzido sob rigorosos padrões, pronto para sua obra.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow p-6 text-center">
          <h3 className="font-bold text-xl mb-2">Bombeamento de concreto</h3>
          <p>Serviço de bombeamento ágil e seguro, atendendo projetos de todos os portes.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow p-6 text-center">
          <h3 className="font-bold text-xl mb-2">Locação de equipamentos</h3>
          <p>Frota moderna de betoneiras, bombas e caminhões para locação e apoio logístico.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow p-6 text-center">
          <h3 className="font-bold text-xl mb-2">Consultoria técnica</h3>
          <p>Acompanhamento de obra, orientações técnicas e suporte especializado do início ao fim.</p>
        </div>
      </div>
    </div>
  </section>
);

  
  export default Services;