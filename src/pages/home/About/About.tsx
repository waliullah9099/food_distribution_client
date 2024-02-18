import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import image1 from "../../../assets/Images/902.jpeg";
import image2 from "../../../assets/Images/1.avif";
import image3 from "../../../assets/Images/3.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="About"
        lTitle="Us"
        description="At Food Distribution and Supplies Management System, our mission is to provide timely access to essential resources, promoting food security of our community.."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border shadow-sm">
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
        </div>
        <div className="border shadow-sm">
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
        </div>
        <div className="border shadow-sm">
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
        </div>
      </div>
    </Container>
  );
};

export default About;
