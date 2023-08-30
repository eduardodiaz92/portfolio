import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-01 pb-24">
      {/*Header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red ">SKILLS</span>
          </p>
          <LineGradient width="w-/3" />
        </motion.div>
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Backend */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Back-end
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"></div>
          </div>

          <div className="flex items-start mt-20 ">
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/springio-icon.svg"
              alt="Spring"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg"
              alt="NodeJs"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nestjs-plain.svg"
              alt="NestJs"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/graphql-icon.svg"
              alt="Graphql"
              width="40"
              height="40"
            />
            <img
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="Express"
              width="40"
              height="40"
            />
          </div>
        </motion.div>
        {/* Front-end */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl"></p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Front-end
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange absolute right-0 top-0 z-[-1]"></div>
          </div>
          <div className="flex items-start mt-20">
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg"
              alt="Css"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg"
              alt="HTML"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg"
              alt="React"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg"
              alt="Tailwindcss"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/sass-original.svg"
              alt="Sass"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/webpack-original-wordmark.svg"
              alt="Webpack"
              width="40"
              height="40"
            />
          </div>
        </motion.div>
        {/* Others */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl"></p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Others
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"></div>
          </div>
          <div className="flex items-start mt-20">
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg"
              alt="Javascript"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/python-original.svg"
              alt="Python"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/java-original.svg"
              alt="Java"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mysql-original-wordmark.svg"
              alt="Mysql"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/postgresql-original-wordmark.svg"
              alt="Postgresql"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg"
              alt="Firebase"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/heroku-icon.svg"
              alt="Heroku"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Devops/amazonwebservices-original-wordmark.svg"
              alt="Amazon Web Services"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Devops/docker-original-wordmark.svg"
              alt="Docker"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Static/nextjs-2.svg"
              alt="Nextjs"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg"
              alt="Git"
              width="40"
              height="40"
            />
            <img
              src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/linux-original.svg"
              alt="Linux"
              width="40"
              height="40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
