import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../../../assets/Images/donate.jpg";

const Volunteer = () => {
  return (
    <Container className="flex justify-between gap-5 my-16">
      <div className="flex flex-col w-full pt-12 mx-auto items-start gap-4 pr-4">
        <p className="text-secondary text-xl">Volunteer in action</p>
        <h1 className="text-[#191F28] text-3xl lg:text-5xl font-bold pb-2">
          A Little Help Can Make <br /> A Big Change.
        </h1>
        <p>
          At Food Distribution and Supplies Management System, our mission is to
          provide timely access to essential resources. At Food Distribution and
          Supplies Management System, our mission is to provide timely access to
          essential resources
        </p>
        <Button className="mt-4 text-lg px-10 py-6">Donate Now!</Button>
      </div>
      <div className="w-full">
        <img className="rounded-sm" src={image} alt="Donat now!" />
      </div>
    </Container>
  );
};

export default Volunteer;
