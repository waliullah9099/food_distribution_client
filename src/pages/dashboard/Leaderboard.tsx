import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "@/components/shared/Container";
import { useGetAllPostQuery } from "@/redux/feathers/posts/postApi";
import { Edit, Trash2 } from "lucide-react";
import { getQuantity } from "@/utils/getQuantity";

const Leaderboard = () => {
  const posts = useGetAllPostQuery(undefined);
  const quantities = getQuantity(posts);
  console.log(posts.data);
  console.log(quantities);
  return (
    <Container>
      <Table className="p-3">
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className=" pr-0">Serial</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="">Edit</TableHead>
            <TableHead className="">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts?.data?.map((post: TPosts, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <img className="w-16 h-12 rounded-sm" src={post.image} alt="" />
              </TableCell>
              <TableCell className="text-lg">{post?.title}</TableCell>
              <TableCell className="text-lg">{post?.category}</TableCell>
              <TableCell className="text-lg">{post?.quantity}</TableCell>
              <TableCell>
                <Edit className="size-8 bg-blue-600 text-white p-2 rounded-sm " />
              </TableCell>
              <TableCell>
                <Trash2
                  onClick={() => handleRemove(post._id)}
                  className="size-8 bg-red-600 text-white p-2 rounded-sm ml-3"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
