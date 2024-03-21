import { TPosts } from "@/types";

export const getQuantity = (posts: any) => {
  const quantity = posts?.data?.map((d: TPosts) => {
    const parts = d.quantity.split(" ");
    const quantity = parseInt(parts[0]);

    const data = {
      name: d.title,
      quantity,
    };

    return data;
  });

  return quantity;
};
