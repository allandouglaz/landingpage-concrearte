import { FaWhatsapp } from "react-icons/fa";


const WhatsAppButton = () => (
    <a
      href="https://wa.me/+55819181868140?text=Olá,%20gostaria%20de%20um%20orçamento%20da%20Concrearte!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition"
      aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
    </a>
  );
  
 export default WhatsAppButton;
  