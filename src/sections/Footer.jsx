import { Instagram, Linkedin, Github } from "lucide-react";
import LeetCodeIcon from "../components/icons/LeetCodeIcon";

const socialLinks = [
  {
    name: "instagram",
    url: "https://www.instagram.com/atharva_pingale45/",
    icon: Instagram,
  },
  {
    name: "github",
    url: "https://github.com/Atharvasp333",
    icon: Github,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/atharva-pingale-25387432a/",
    icon: Linkedin,
  },
  {
    name: "leetcode",
    url: "https://leetcode.com/u/Atharva_0506/",
    icon: LeetCodeIcon,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon text-gray-400 hover:text-white transition-colors"
              >
                <IconComponent size={18} />
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Atharva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
