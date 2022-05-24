import styled from "styled-components";

const Container = styled.div`
  padding: 7px;
  border-radius: 5px;

  &:hover {
    padding: 0;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: var(--primary4);
  color: var(--primary2);
  position: relative;
`;

const Link = styled.a<{ inStock: boolean }>`
  color: var(--primary1);

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--primary4);
    opacity: ${({ inStock }) => (inStock ? `0;` : `0.5;`)};
    cursor: pointer;
    content: "";
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

const Discount = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 5px 8px;
  border-radius: 7px;
  background-color: var(--accent8);
  color: var(--accent7);
`;

const Image = styled.img<{ inStock: boolean }>`
  width: 100%;
`;

const Title = styled.div`
  margin: 5px 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.div<{ discount: boolean }>`
  ${({ discount }) => discount && `color: var(--accent8);`};
  ${({ discount }) => !discount && `margin-top: 14px;`};

  font-size: 26px;
`;

const OldPrice = styled.div`
  color: var(--secondary2);
  text-decoration: line-through;
`;

const Stock = styled.div<{ inStock: boolean }>`
  color: ${({ inStock }) =>
    inStock ? `var(--accent3);` : `var(--secondary2);`};
  font-size: 12px;
`;

export const Styled = {
  Card,
  Container,
  Image,
  Discount,
  ImageContainer,
  Title,
  Price,
  OldPrice,
  Stock,
  Link,
};
