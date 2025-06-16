import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result) => {
            setStatus("sucesso");
            form.current?.reset();
          },
          (error) => {
            setStatus("erro");
          }
        );
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Fale Conosco</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="rounded-lg p-3 border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="rounded-lg p-3 border border-gray-300"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            className="rounded-lg p-3 border border-gray-300 min-h-[120px]"
          />

          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            disabled={status === "enviando"}
          >
            {status === "enviando" ? "Enviando..." : "Enviar Mensagem"}
          </button>
          {status === "sucesso" && (
            <div className="text-green-600 mt-2 text-center font-semibold">
              Mensagem enviada com sucesso!
            </div>
          )}
          {status === "erro" && (
            <div className="text-red-600 mt-2 text-center font-semibold">
              Houve um erro ao enviar. Tente novamente!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
