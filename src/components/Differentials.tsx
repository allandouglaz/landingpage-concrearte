const Differentials: React.FC = () => (
    <section id="differentials" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Nossos Diferenciais</h2>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="bg-white rounded-2xl shadow p-6 text-center">
            <span className="block text-2xl font-bold mb-2">+15 Anos</span>
            <p>Experiência e tradição no mercado de concreto.</p>
          </li>
          <li className="bg-white rounded-2xl shadow p-6 text-center">
            <span className="block text-2xl font-bold mb-2">Frota Própria</span>
            <p>Veículos modernos garantindo entregas ágeis e seguras.</p>
          </li>
          <li className="bg-white rounded-2xl shadow p-6 text-center">
            <span className="block text-2xl font-bold mb-2">Atendimento Especializado</span>
            <p>Equipe técnica pronta para te ajudar em todas as etapas.</p>
          </li>
        </ul>
      </div>
    </section>
  );
  
  export default Differentials;