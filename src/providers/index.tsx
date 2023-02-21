import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import AuthProvider from "auth/AuthContext";
import ModalProvider from "context/ModalContext";

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
