const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/jose-diaz-dev/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../../public/assets/linkedin.png" alt="linkedin-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/eduardodiaz92"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../../public/assets/github-30-2.png" alt="github-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/EduardoDiaz92"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../../public/assets/twitter.png" alt="twitter-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/eduardo.diaz.39904/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../../public/assets/facebook.png" alt="facebook-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/eduardodiaz92"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../../public/assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
