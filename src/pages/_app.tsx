import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />;
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
