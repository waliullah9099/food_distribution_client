import { TComment } from "@/types";
import Container from "@/components/shared/Container";
import { SkeletonCard } from "./Skeleton";

const ALlCOmment = ({
  comments,
  isFetching,
}: {
  comments: TComment[];
  isFetching: boolean;
}) => {
  if (isFetching) {
    <SkeletonCard />;
  }
  return (
    <Container>
      <h1 className="text-secondary text-4xl font-semibold text-center my-8">
        All <span className="text-primary">Comment </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {comments?.map((comment: TComment) => (
          <div
            key={comment._id}
            className="border transition-all hover:shadow-2xl hover:scale-105 rounded-sm shadow-sm"
          >
            <img
              className="w-full rounded-sm h-[300px]"
              src={comment.image}
              alt=""
            />
            <div className="p-3 space-y-3">
              <h1 className="text-lg font-semibold">{comment.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ALlCOmment;
