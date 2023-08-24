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
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse qui
            vel laborum possimus fugiat aperiam reiciendis, minus deserunt ea
            ipsum!
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
            before:w-full before:h-full before:border-2 before:border-red before:z-[-1]"
            >
              <img
                alt="skills"
                className=" z-10 "
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className=" z-10 "
              src="assets/skills-image.png"
            />
          )}
        </div>
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
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Back-end
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ad
            tempora sint, aliquid eius quam! Autem voluptatibus harum
            doloremque. Nesciunt?
          </p>
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
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Front-end
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ad
            tempora sint, aliquid eius quam! Autem voluptatibus harum
            doloremque. Nesciunt?
          </p>
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
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Others
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ad
            tempora sint, aliquid eius quam! Autem voluptatibus harum
            doloremque. Nesciunt?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
