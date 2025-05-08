import logo from "../assets/sclogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex container mx-auto px-8 items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://drive.google.com/file/d/1X9yRmKGbcGYXcocOhh70EQE92uOtCUtG/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
        <FaFilePdf/>
        </a>
      <a
          href="https://www.linkedin.com/in/bercilin-jose/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
        <FaLinkedin/>
        </a>
        <a
          href="https://github.com/bercilin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
        <FaGithub/>
        </a>
        
        <a
          href="https://www.instagram.com/bercilinjose/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
        <FaInstagram/>
        </a>

      </div>
    </nav>
  )
}

export default Navbar
