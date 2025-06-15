const Services: React.FC = () => (
    <section id="services" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl shadow p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Concreto Usinado</h3>
            <p>Concreto de alta resistência e qualidade, pronto para sua obra.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Entrega Programada</h3>
            <p>Agendamento e entrega pontual de concreto, com frota própria.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Consultoria Técnica</h3>
            <p>Suporte especializado para garantir o melhor desempenho no seu projeto.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Services;