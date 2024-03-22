import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../../../assets/Images/donate.jpg";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0.5, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};
const child = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

const Volunteer = () => {
  return (
    <Container className="flex justify-between gap-5 my-16">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: "easeInOut", staggerChildren: 0.3 }}
        className="flex flex-col w-full pt-12 mx-auto items-start gap-4 pr-4"
      >
        <motion.p variants={child} className="text-secondary text-xl">
          Volunteer in action
        </motion.p>
        <motion.h1
          variants={child}
          className="text- text-3xl lg:text-5xl font-bold pb-2"
        >
          A Little Help Can Make <br /> A Big Change.
        </motion.h1>
        <motion.p variants={child}>
          At Food Distribution and Supplies Management System, our mission is to
          provide timely access to essential resources. At Food Distribution and
          Supplies Management System, our mission is to provide timely access to
          essential resources
        </motion.p>
        <Button className="mt-4 text-lg px-10 py-6">Donate Now!</Button>
      </motion.div>
      <motion.div
        initial={{ x: 200, scale: 0.4 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.4,
        }}
        className="w-full"
      >
        <img className="rounded-sm" src={image} alt="Donat now!" />
      </motion.div>
    </Container>
  );
};

export default Volunteer;
