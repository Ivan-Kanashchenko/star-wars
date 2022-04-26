import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import "./App.css";
import { Content } from "../Content/Content";
import ContentProvider from "../Context/ContentContext";
import { Navigation } from "../Navigation/Navigation";
import Styled from "./styles";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Chat } from "../Chat/Chat";
import AuthProvider from "../../auth/AuthContext";
import Modal from "../Modal/Modal";
import ModalProvider from "../Context/ModalContext";
import { Route, Routes } from "react-router-dom";
import Register from "../Register/Register";

const queryClient = new QueryClient();

function App() {
  return (
    <ContentProvider>
      <AuthProvider>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <Styled.GlobalStyles />
            <Styled.App>
              <Header />
              <Navigation />
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/registration" element={<Register />} />
              </Routes>
              <Chat />
              <Modal />
              <Footer />
            </Styled.App>
          </QueryClientProvider>
        </ModalProvider>
      </AuthProvider>
    </ContentProvider>
  );
}

export default App;
