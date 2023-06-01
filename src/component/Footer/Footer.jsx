import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const socialUrls = [
    { id: 1, icon: faGithub, url: "https://github.com/Shazeb16180" },
    { id: 2, icon: faInstagram, url: "https://www.instagram.com/shazeb1890/" },
    {
      id: 3,
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/shazeb-khan-28013b218/",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-links">
        {socialUrls.map(({ id, icon, url }) => (
          <a key={id} href={url} target="_blank">
            <FontAwesomeIcon
              icon={icon}
              size="2xl"
              style={{ color: "white" }}
            />
          </a>
        ))}
        ;
      </div>
      <div className="copy-right">No Copy Right....</div>
    </footer>
  );
}
