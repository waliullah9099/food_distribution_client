import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const { title, image } = data;
  console.log(data);

  return (
    <Container className="my-16">
      <SectionTitle
        fTitle="All About"
        lTitle="This Supply Post"
        description="  At Food Distribution and Supplies Management System, our mission is to
          provide timely access to essential resources, promoting food security
          and well-being for all members of our community."
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <img
          className="w-1/2 h-[400px] rounded-md shadow-md hover:scale-105 hover:shadow-2xl transition-all "
          src={data?.image}
          alt="Post image"
        />
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Title: {data?.title}</h1>
          <h1 className=" font-medium">
            Category: <span className="font-semibold">{data?.category}</span>
          </h1>
          <h1 className=" font-medium">
            Quantity: <span className="font-semibold">{data?.quantity}</span>
          </h1>
          <h1 className=" font-medium">
            Manufacturer:{" "}
            <span className="font-semibold">{data?.manufacturer}</span>
          </h1>
          <h1 className=" font-medium">
            Price: <span className="font-semibold">{data?.price_per_unit}</span>
          </h1>
          <h1 className=" font-medium">
            Expiration Date:{" "}
            <span className="font-semibold">{data?.expiration_date}</span>
          </h1>
          <p className="text-lg">{data?.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default ViewDetails;
