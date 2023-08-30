import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import ReactShop from "@assets/react-shop.png";
import ReactGame from "@assets/gato.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

const Project2 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-red ">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Westeros-API</p>
              <p className="mt-5">
                An API Rest from Game of thrones , you can get characters,
                houses and kingdoms. Made with NodeJs in framework Express.{" "}
                <br />
                <a
                  className="text-xl text-decoration-line: underline"
                  href="https://westeros-api-production.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check
                </a>
              </p>
            </div>
            <img
              src={`https://camo.githubusercontent.com/b6284639ddcf5c429fe67cbdb74cc592536103bb5fb39536859a9783de64d8cd/68747470733a2f2f696d616765732e616c706861636f646572732e636f6d2f3232362f7468756d622d313932302d3232363039312e6a7067`}
            />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">React-game</p>
              <p className="mt-5">
                Just a fun game made it with React
                <br />
                <a
                  className="text-xl text-decoration-line: underline"
                  href="https://eduardodiaz92.github.io/react-juego/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check
                </a>
              </p>
            </div>
            <img src={ReactGame} />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">React-shop</p>
              <p className="mt-5">
                E-Commerce made it with React & responsive design
                <br />
                <a
                  className="text-xl text-decoration-line: underline"
                  href="https://github.com/eduardodiaz92/react-shop"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check
                </a>
              </p>
            </div>
            <img src={ReactShop} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
