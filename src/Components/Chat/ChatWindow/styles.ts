import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 5px;
  justify-content: flex-start;
`;

const WrapperScrollBottom = styled.div``;

const Message = styled.div<{ owner: boolean }>`
  width: fit-content;
  max-width: 80%;
  margin: 5px;
  padding: 5px 10px;
  text-align: left;
  word-wrap: wrap;

  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background: var(--secondary);
  color: var(--accent4);
  color: ${({ owner }) => (owner ? `var(--accent3)` : `var(--accent5)`)};
  ${({ owner }) => owner && `align-self: flex-end;`}
`;

const MessageAuthor = styled.div<{ owner: boolean }>`
  font-weight: 700;
  ${({ owner }) => owner && `text-align: right;`}
`;
const MessageText = styled.div<{ owner: boolean }>`
  padding: 5px 20px 5px 0;
  color: var(--accent4);

  ${({ owner }) =>
    owner &&
    `text-align: right;
  padding-right: 0;
  `}
`;
const MessageDate = styled.div<{ owner: boolean }>`
  text-align: right;
  font-style: italic;
  color: var(--accent4);
  ${({ owner }) => owner && `padding-right: 5px;`}
`;

export const Styled = {
  Container,
  Message,
  MessageAuthor,
  MessageText,
  MessageDate,
  WrapperScrollBottom,
};
