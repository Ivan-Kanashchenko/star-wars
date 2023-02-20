import React from "react";
import { Route, Routes } from "react-router-dom";
import { Films } from "../Content/Films";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Market } from "../Market/Market";
import { People } from "../Content/People";
import { Planets } from "../Content/Planets";
import { ProductPage } from "../ProductPage/ProductPage";
import { Providers } from "../../providers/Providers";
import { Register } from "../Register/Register";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { Styled } from "./styles";
import { Layout } from "components/Layout";

export const App = () => {
  return (
    <Providers>
      <Styled.GlobalStyles />
      <Styled.App>
        <Layout>
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
            <Route path="market" element={<Market />} />
            <Route path="market/:id" element={<ProductPage />} />
          </Routes>
        </Layout>
      </Styled.App>
    </Providers>
  );
};
