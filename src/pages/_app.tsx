import { ToggleThemeProvider } from "@/contexts/ToggleTheme";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyle";
import { Aside } from "@/components/layouts/Aside";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToggleThemeProvider>
      <Aside />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
      <GlobalStyles />
    </ToggleThemeProvider>
  );
}
