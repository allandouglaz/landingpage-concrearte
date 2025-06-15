import { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Fale Conosco</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="rounded-lg p-3 border border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="rounded-lg p-3 border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Sua mensagem"
            className="rounded-lg p-3 border border-gray-300 min-h-[120px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;