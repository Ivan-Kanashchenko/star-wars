import { commentsData } from "../market/data/commentsData";

export const useCommentsData = (id: string) => {
  const comments = commentsData.filter(
    (product) => product.productId === Number(id)
  );

  return { comments };
};
