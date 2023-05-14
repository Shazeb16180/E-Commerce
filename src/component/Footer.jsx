import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="./" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            style={{ color: "white" }}
          />
        </a>
        <a href="./" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            style={{ color: "white" }}
          />
        </a>
        <a href="./" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            style={{ color: "white" }}
          />
        </a>
      </div>
      <div className="copy-right">No Copy Right....</div>
    </footer>
  );
}
