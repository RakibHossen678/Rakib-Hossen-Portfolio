import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 px-4 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 md:flex-row md:px-8">
        <aside className="text-center md:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Rakib Hossen — MERN Stack Developer at
            Zentexx.
          </p>
        </aside>

        <div className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/profile.php?id=100056015882794"
            aria-label="Facebook"
            className="text-slate-400 transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hossen-rakib/"
            aria-label="LinkedIn"
            className="text-slate-400 transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/RakibHossen678"
            aria-label="Github"
            className="text-slate-400 transition hover:text-white"
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
