import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../assets/Images/hero.webp";

const Hero = () => {
  return (
    <div className="bg-dark-gray h-screen flex justify-center items-center">
      <Container className="">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex justify-center items-center">
            <div className="space-y-8">
              <span className="bg-[#293d36] px-6 py-3  text-light-gray">
                FOOD DISTRIBUTION SOFTWARE
              </span>
              <h1 className="font-medium text-6xl li">
                Track & trace product from origin to point of sale
              </h1>
              <p className="text-xl">
                Optimized ERP for Food & Beverage Distributors: Unify
                multi-entity operations with our specialized software solution.
              </p>
              <div className="space-x-4">
                <Button className="px-12 font-semibold text-lg py-6 shadow-xl">
                  Features
                </Button>
                <Button
                  variant="outline"
                  className="px-12 font-semibold text-lg py-6 shadow-xl"
                >
                  Benefits
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img
              className="h-[500px] w-[600px] rounded-sm"
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
