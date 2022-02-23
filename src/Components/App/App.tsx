import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Content } from "../Content/Content";
import ContentProvider from "../ContentContext/ContentContext";
import { Navigation } from "../Navigation/Navigation";

const queryClient = new QueryClient();

function App() {
  return (
    <ContentProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Navigation />
          <Content />
        </div>
      </QueryClientProvider>
    </ContentProvider>
  );
}

export default App;
