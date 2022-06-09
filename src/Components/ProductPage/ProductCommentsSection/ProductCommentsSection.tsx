import * as React from "react";
import { Rating } from "@material-ui/lab";
import { Styled } from "./styles";
import { StyledElement } from "../../StyledComponents/Elements/Elements";

interface IProductCommentsSectionProps {
  comments: {
    id: number;
    author: string;
    rate: number;
    comment: string;
  }[];
}

export const ProductCommentsSection: React.FC<IProductCommentsSectionProps> = ({
  comments,
}) => {
  return (
    <Styled.InfoContainer>
      <Styled.Span>Comments</Styled.Span>
      <StyledElement.Ul commentsList>
        {comments.map((comment) => (
          <StyledElement.Li commentsList key={comment.id}>
            <Styled.Span>{comment.author}</Styled.Span>
            <Styled.RateBlock>
              <Rating name="read-only" value={comment.rate} readOnly />
            </Styled.RateBlock>
            <div>{comment.comment}</div>
          </StyledElement.Li>
        ))}
      </StyledElement.Ul>
    </Styled.InfoContainer>
  );
};
