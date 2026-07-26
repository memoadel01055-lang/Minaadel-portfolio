import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-black border-t border-white/10 text-white py-10"
      id="footer"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h3 className="text-2xl font-bold tracking-widest">
            MINA ADEL
          </h3>

          <p className="text-gray-500 mt-2">
            Digital Imaging Technician
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://instagram.com/"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
          >
            <FaFacebook />
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
          >
            <FaYoutube />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
}