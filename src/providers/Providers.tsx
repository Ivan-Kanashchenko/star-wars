import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "../auth/AuthContext";
import ModalProvider from "../Context/ModalContext";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
