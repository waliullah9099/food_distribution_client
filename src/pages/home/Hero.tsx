import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../../assets/Images/hero.webp";
import image2 from "../../assets/Images/bg-1.svg";

const Hero = () => {
  return (
    <div className="setBgImage bg-dark-gray h-screen flex justify-center items-center mb-8">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div data-aos="fade-up" className="flex justify-center items-center">
            <div className="space-y-8">
              <span className="bg-[#293d36] px-6 py-3 text-light-gray">
                FOOD DISTRIBUTION SOFTWARE
              </span>
              <h1 className="text-6xl leading-tight font-medium">
                Track & trace product from origin to point of sale
              </h1>
              <p className="text-xl">
                Optimized ERP for Food & Beverage Distributors: Unify
                multi-entity operations with our specialized software solution.
              </p>
              <div className="space-x-4">
                <Button
                  data-aos="fade-up"
                  className="px-12 font-semibold text-lg py-6 shadow-xl"
                >
                  Features
                </Button>
                <Button
                  data-aos="fade-up"
                  variant="outline"
                  className="px-12 font-semibold text-lg py-6 shadow-xl"
                >
                  Benefits
                </Button>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="relative">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
