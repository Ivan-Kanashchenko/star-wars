import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import "./App.css";
import { Content } from "../Content/Content";
import ContentProvider from "../ContentContext/ContentContext";
import { Navigation } from "../Navigation/Navigation";
import Styled from "./styles";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Chat } from "../Chat/Chat";

const queryClient = new QueryClient();

function App() {
  return (
    <ContentProvider>
      <QueryClientProvider client={queryClient}>
        <Styled.GlobalStyles />
        <Styled.App>
          <Header />
          <Navigation />
          <Content />
          <Chat />
          <Footer />
        </Styled.App>
      </QueryClientProvider>
    </ContentProvider>
  );
}

export default App;
