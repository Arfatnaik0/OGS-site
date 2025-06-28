import { FaInstagram, FaWhatsapp} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/__the_ogss?utm_source=ig_web_button_share_sheet&igsh=MWJsdnB6djU0MnUweA==", icon: <FaInstagram /> },
  { href: "https://wa.me/918779901410", icon: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className=" bg-[#262625] text-white mt-5 pb-2 pt-2">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row h-[10vh]">
        <p className="text-center text-sm font-light md:text-left">
          ©TheOGSS 
        </p>

        <div className="flex justify-center gap-10 md:ml-34">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-gray-600"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p
          className="text-center text-sm font-light md:text-right"
        >
          Site Designed and coded by Arfat
        </p>
      </div>
    </footer>
  );
};

export default Footer;