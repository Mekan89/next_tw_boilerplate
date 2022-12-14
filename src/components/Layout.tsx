import Head from "next/head";
import { ReactNode } from "react";
import favicon from "../../public/favicon.ico";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  title: string;
  keywords: string;
  description: string;
};

export default function Layout({ title, keywords, description, children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon.src} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header />
      <main className="container flex-grow sm:px-6">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Create Next App", // DJ Events
  description: "Generated by create next app", // Find the latest DJ and other musical events'
  keywords: "nextjs", // music, dj, edm, events
};
