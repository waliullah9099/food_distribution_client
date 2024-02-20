import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import image1 from "../../../assets/Images/902.jpeg";
import image2 from "../../../assets/Images/1.avif";
import image3 from "../../../assets/Images/3.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const About = () => {
  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="About"
        lTitle="Us"
        description="At Food Distribution and Supplies Management System, our mission is to provide timely access to essential resources, promoting food security of our community.."
      />
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <motion.div variants={introChildren} className="border shadow-sm">
          <img className="w-full rounded-sm  h-[300px]" src={image1} alt="" />
          <div className="p-3 space-y-3">
            <h1 className="text-lg font-semibold">Reduced Food Waste</h1>
            <p>
              hrough our commitment to sustainable practices, we have minimized
              the environmental impact of food distribution activities,
              contributing to biodiversity conservation, and mitigating the
              effects of climate change.
            </p>
            <Button className="w-full"> Learn More</Button>
          </div>
        </motion.div>
        <motion.div variants={introChildren} className="border shadow-sm">
          <img className="w-full rounded-sm  h-[300px]" src={image2} alt="" />
          <div className="p-3 space-y-3">
            <h1 className="text-lg font-semibold">Sustainability Focus</h1>
            <p>
              hrough our commitment to sustainable practices, we have minimized
              the environmental impact of food distribution activities,
              contributing to biodiversity conservation, and mitigating the
              effects of climate change.
            </p>
            <Button className="w-full"> Learn More</Button>
          </div>
        </motion.div>
        <motion.div variants={introChildren} className="border shadow-sm">
          <img className="w-full rounded-sm h-[300px]" src={image3} alt="" />
          <div className="p-3 space-y-3">
            <h1 className="text-lg font-semibold">Equitable Access</h1>
            <p>
              hrough our commitment to sustainable practices, we have minimized
              the environmental impact of food distribution activities,
              contributing to biodiversity conservation, and mitigating the
              effects of climate change.
            </p>
            <Button className="w-full"> Learn More</Button>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
