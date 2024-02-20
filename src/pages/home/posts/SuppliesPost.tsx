import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { useGetAllPostQuery } from "@/redux/feathers/posts/postApi";
import { TPosts } from "@/types";
import PostCard from "./PostCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { NavLink } from "react-router-dom";

const SuppliesPost = () => {
  const { data } = useGetAllPostQuery(undefined);

  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="Our"
        lTitle="Mission"
        description="  At Food Distribution and Supplies Management System, our mission is to
        provide timely access to essential resources, promoting food security
        and well-being for all members of our community."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.slice(0, 6).map((item: TPosts) => (
          <PostCard item={item} key={item._id} />
        ))}
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        className="flex items-center justify-center my-6"
      >
        <NavLink to="/supplies">
          <Button className="bg-primary hover:bg-secondary text-white py-6 px-10 text-lg">
            View All
          </Button>
        </NavLink>
      </div>
    </Container>
  );
};

export default SuppliesPost;
