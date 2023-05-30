import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const socialUrls = [
    { icon: faGithub, url: "https://github.com/Shazeb16180" },
    { icon: faInstagram, url: "https://www.instagram.com/shazeb1890/" },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/shazeb-khan-28013b218/",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-links">
        {socialUrls.map(({ icon, url }) => (
          <a href={url} target="_blank">
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
