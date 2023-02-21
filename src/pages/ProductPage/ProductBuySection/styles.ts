import styled from "styled-components";

const BuyContainer = styled.div`
  width: 50%;
  border-radius: 5px;
  padding: 5px;
`;

const BuySection = styled.div<{ flexStart?: boolean; spaceEvenly?: boolean }>`
  display: flex;

  ${({ flexStart }) =>
    flexStart && `justify-content: flex-start; text-align: start;`};

  ${({ spaceEvenly }) => spaceEvenly && `justify-content: space-evenly;`};

  line-height: 20px;
  align-items: center;
  width: 100%;
  margin: 0px 0px 10px;
  border-radius: 3px;
  padding: 10px 20px;
  border: 1px solid var(--primary3);
`;

const StandartPrice = styled.span`
  color: var(--primary2);
  font-size: 16px;
  text-decoration: line-through;
`;

const Price = styled.span<{ isDiscount: boolean }>`
  ${({ isDiscount }) =>
    isDiscount ? `color: var(--accent1);` : `color: var(--primary2);`}
  font-size: 38px;
`;

const BuyButton = styled.button<{ inStock?: boolean }>`
  text-transform: uppercase;
  border: 2px solid var(--primary3);
  border-radius: 3px;
  color: var(--primary3);
  padding: 10px 40px;
  transition: 0.2s;

  ${({ inStock }) =>
    inStock &&
    `border: 2px solid var(--accent3);
    color: var(--accent3);
    &:hover {
    background-color: var(--accent3);
    border-color: var(--accent3);
    color: var(--primary4);
  }`}
`;

const Span = styled.span`
  font-weight: 600;
  padding: 0 0 0 5px;
`;

export const Styled = {
  BuyContainer,
  BuySection,
  StandartPrice,
  Price,
  BuyButton,
  Span,
};
