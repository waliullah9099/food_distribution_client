import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const PostCard = ({ item }) => {
  return (
    <div
      className="shadow-md border rounded-md flex flex-col justify-center items-start space-y-4 p-4"
      key={item._id}
      data-aos="zoom-in-up"
    >
      <img
        className="rounded-sm border shadow-sm p-1 hover:scale-90 transition-transform duration-300 transform origin-center"
        src={item.image}
      />

      <div>
        <h1 className="text-xl font-semibold">Title: {item.title}</h1>
        <h1 className=" font-medium">
          Category: <span className="font-semibold">{item.category}</span>
        </h1>
        <h1 className=" font-medium">
          Quantity: <span className="font-semibold">{item.quantity}</span>
        </h1>
      </div>

      <Button className="w-full">
        <NavLink to={`/view-details/${item._id}`}>View Detail</NavLink>
      </Button>
    </div>
  );
};

export default PostCard;
