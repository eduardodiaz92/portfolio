import Linkedin from "@assets/linkedin.png";
import Github from "@assets/github-30-2.png";
import Twitter from "@assets/twitter.png";
import Facebook from "@assets/facebook.png";
import Instagram from "@assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/jose-diaz-dev/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/eduardodiaz92"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/EduardoDiaz92"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Twitter} alt="twitter-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/eduardo.diaz.39904/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Facebook} alt="facebook-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/eduardodiaz92"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={Instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
