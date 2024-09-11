
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-6 bg-primary/20 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <aside className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Rakib Hossen. All rights reserved.
          </p>
        </aside>

        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100056015882794"
            aria-label="Facebook"
            className="hover:text-purple-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hossen-rakib/"
            aria-label="LinkedIn"
            className="hover:text-purple-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/RakibHossen678"
            aria-label="Github"
            className="hover:text-pruple-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
