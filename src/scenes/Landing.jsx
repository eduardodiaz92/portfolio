import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfilePicture from "@assets/profile.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex mt-16 md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* Image section */}
      <div className="basis-3/5 z-10 mt-16 md:mt-34 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute mt-12 mr-5 before:-top-10 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[200px] md:before:max-w-[600px] before:h-full before:border-2 before:border-red before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter mt-12 hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[300px] "
              src={ProfilePicture}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px] md:max-w-[350px]"
            src={ProfilePicture}
          />
        )}
      </div>
      {/*Main section */}
      <div className="z-30  basis-2/5 mt-12 md:mt-40 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Eduardo {""}
            <span
              className="xs: relative xs:text-yellow xs:font-semibold z-20
                xs:before:content-smoke2 before:absolute before:-left-[25px]
                before:-top-[70px]  before:z-[-1]
                "
            >
              Díaz
            </span>
          </p>
          <p className="mt-10 mb-7 text-xl text-center md:text-start">
            Hi!, I'm a passionate Full-stack developer with experience in many
            different technologies.
          </p>
        </motion.div>
        {/*Call to actions*/}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-white rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-red transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <div
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5
            "
          >
            <a
              className="bg-black hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10"
              href="https://drive.google.com/drive/folders/1CoCXByKhBZA-nUaQc3TUlN-aahvPSS9_"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
