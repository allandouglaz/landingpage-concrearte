import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-gray-600 py-4 mt-12 bg-gray-300 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 px-4">
           <div className="text-center font-bold" style={{ fontSize: 18 }}>
          Copyright © {year} ConcreArte
          <div className="text-xs font-bold mt-1">
            32.917.836/0001-41
          </div>
        </div>
        {/* Social icons centralizados */}
        <ul className="flex gap-3 justify-center mt-1">
          <li>
            <a
              href="https://www.linkedin.com/in/concrearte-servi%C3%A7os-de-concretagens-a73b02297/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition text-blue-999"
            >
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/concrearte.concreto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition text-blue-999"
            >
              <FaFacebook size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/concrearteconcreto/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition text-blue-999"
            >
              <AiFillInstagram size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
