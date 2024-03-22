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
import { getQuantity } from "@/utils/getQuantity";
import { TPosts } from "@/types";

const Leaderboard = () => {
  const posts = useGetAllPostQuery(undefined);
  const quantities = getQuantity(posts);
  const sortedPosts = quantities
    ?.slice()
    .sort((a: TPosts, b: TPosts) => b.quantity - a.quantity);
  return (
    <Container>
      <Table className="p-3">
        <TableHeader>
          <TableRow className="text-lg shadow-md">
            <TableHead className=" pr-0">Serial</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPosts?.map((post: TPosts, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="text-lg">{post?.displayName}</TableCell>
              <TableCell className="text-lg">{post?.email}</TableCell>
              <TableCell className="text-lg">{post?.name}</TableCell>
              <TableCell className="text-lg">{post?.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
