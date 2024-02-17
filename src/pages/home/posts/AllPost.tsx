import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetAllPostQuery } from "@/redux/feathers/posts/postApi";
import { TPosts } from "@/types";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data } = useGetAllPostQuery(undefined);
  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="Our All "
        lTitle="Supply Post"
        description="  At Food Distribution and Supplies Management System, our mission is to
          provide timely access to essential resources, promoting food security
          and well-being for all members of our community."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((item: TPosts) => (
          <PostCard item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AllPost;
