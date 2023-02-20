import React, { FC } from "react";
import AuthProvider from "../auth/AuthContext";
import ModalProvider from "../context/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const Providers: FC = ({ children }) => {
  return (
    <ModalProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </ModalProvider>
  );
};
