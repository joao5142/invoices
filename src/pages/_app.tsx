import { ToggleThemeProvider } from "@/contexts/ToggleTheme";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyle";
import { Aside } from "@/components/layouts/Aside";
import { AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToggleThemeProvider>
      <Aside />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
        <ToastContainer />
      </AnimatePresence>

      <GlobalStyles />
    </ToggleThemeProvider>
  );
}
