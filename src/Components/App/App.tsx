import * as React from "react";
import { Chat } from "../Chat/Chat";
import { Content } from "../Content/Content";
import { FeedbackForm } from "../Forms/FeedbackForm/FeedbackForm";
import { Films } from "../Content/Films";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Market } from "../Market/Market";
import { Modal } from "../Modal/Modal";
import { Navigation } from "../Navigation/Navigation";
import { People } from "../Content/People";
import { Planets } from "../Content/Planets";
import { Portal } from "../Portal/Portal";
import { ProductPage } from "../ProductPage/ProductPage";
import { Providers } from "../../providers/Providers";
import { Register } from "../Register/Register";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { Styled } from "./styles";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Providers>
      <Styled.GlobalStyles />
      <Styled.App>
        <Header />
        <Navigation />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Register />} />
            <Route path="films" element={<Films />} />
            <Route
              path="people"
              element={
                <RequireAuth>
                  <People />
                </RequireAuth>
              }
            />
            <Route
              path="planets"
              element={
                <RequireAuth>
                  <Planets />
                </RequireAuth>
              }
            />
            <Route path="market" element={<Market />}></Route>
            <Route path="market/:id" element={<ProductPage />} />
          </Routes>
        </Content>
        <Chat />
        <Portal>
          <Modal title={"left feedback..."}>
            <FeedbackForm />
          </Modal>
        </Portal>
        <Footer />
      </Styled.App>
    </Providers>
  );
};
