import { TPosts } from "@/types";

export const getQuantity = (posts: any) => {
  const quantity = posts?.data
    ?.map((d: TPosts) => {
      const parts = d.quantity?.split(" ") ?? [];
      if (parts.length > 0) {
        const quantity = parseInt(parts[0]);
        const email = d.email;
        const displayName = d.displayName;

        const data = {
          name: d.title,
          quantity,
          email,
          displayName,
        };

        return data;
      } else {
        return null;
      }
    })
    .filter((data: TPosts) => data !== null);

  return quantity;
};
