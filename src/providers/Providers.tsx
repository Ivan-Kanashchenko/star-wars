import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "../auth/AuthContext";

const queryClient = new QueryClient();

export const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
};
