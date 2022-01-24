import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthProviders";
import { CartProvider } from "./CartProviders";
interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <CartProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CartProvider>
  </AuthProvider>
);
