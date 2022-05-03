import * as React from "react";
import { Content } from "../Content/Content";
import { Navigation } from "../Navigation/Navigation";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
// import { Chat } from "../Chat/Chat";
import { Route, Routes } from "react-router-dom";
import { Register } from "../Register/Register";
import { Films } from "../Content/Films";
import { People } from "../Content/People";
import { Planets } from "../Content/Planets";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { Providers } from "../../providers/Providers";
import { Styled } from "./styles";

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
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/films" element={<Films />} />
            <Route
              path="/people"
              element={
                <RequireAuth>
                  <People />
                </RequireAuth>
              }
            />
            <Route
              path="/planets"
              element={
                <RequireAuth>
                  <Planets />
                </RequireAuth>
              }
            />
          </Routes>
        </Content>
        {/* <Chat /> */}
        <Footer />
      </Styled.App>
    </Providers>
  );
};
