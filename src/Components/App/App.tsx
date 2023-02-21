import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "consts";
import { Providers } from "providers";

import { RequireAuth } from "../RequireAuth";
import { Layout } from "../Layout";

import { Styled } from "./styles";

export const App = () => {
  return (
    <Providers>
      <Styled.GlobalStyles />
      <Styled.App>
        <Layout>
          <Routes>
            {ROUTES.map(({ isProtected, path, Component }) =>
              isProtected ? (
                <Route
                  path={path}
                  element={
                    <RequireAuth>
                      <Component />
                    </RequireAuth>
                  }
                />
              ) : (
                <Route path={path} element={<Component />} />
              )
            )}
          </Routes>
        </Layout>
      </Styled.App>
    </Providers>
  );
};
