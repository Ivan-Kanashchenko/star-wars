import React, { FC } from "react";

import { Portal } from "../Portal";
import { Modal } from "../Modal";
import { Chat } from "../Chat";
import { FeedbackForm } from "../Forms";

import { ContentWrapper, Footer, Header, Navigation } from "./components";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
      <Chat />
      <Portal>
        <Modal title={"left feedback..."}>
          <FeedbackForm />
        </Modal>
      </Portal>
      <Footer />
    </>
  );
};
