import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../../assets/Images/hero.webp";
import image2 from "../../assets/Images/bg-1.svg";

import { motion } from "framer-motion";

const Hero = () => {
  const intro = {
    hidden: { opacity: 0.5, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const introChildren = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div className="setBgImage bg-dark-gray h-screen flex justify-center items-center mb-8">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.4,
              staggerChildren: 0.3,
            }}
            className="flex justify-center items-center"
          >
            <motion.div variants={introChildren} className="space-y-8">
              <span className="bg-[#293d36] px-6 py-3 text-light-gray">
                FOOD DISTRIBUTION SOFTWARE
              </span>
              <motion.h1
                variants={introChildren}
                className="text-6xl leading-tight font-medium"
              >
                Track & trace product from origin to point of sale
              </motion.h1>
              <motion.p variants={introChildren} className="text-xl">
                Optimized ERP for Food & Beverage Distributors: Unify
                multi-entity operations with our specialized software solution.
              </motion.p>
              <motion.div variants={introChildren} className="space-x-4">
                <Button className="px-12 font-semibold text-lg py-6 shadow-xl">
                  Features
                </Button>
                <Button
                  variant="outline"
                  className="px-12 font-semibold text-lg py-6 shadow-xl"
                >
                  Benefits
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 200, scale: 0.4 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.4,
            }}
            className="relative"
          >
            <img
              className="size-[150px] absolute -bottom-12 right-0"
              src={image2}
            />
            <img
              className="size-[150px] absolute -bottom-12 -left-24"
              src={image2}
            />
            <img
              className="h-[450px] w-[500px] rounded-sm"
              src={image}
              alt="Hero Image"
            />
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Hero;
