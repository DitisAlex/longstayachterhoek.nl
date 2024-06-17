import Head from "next/head";
import NavbarComponent from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Suites from "../components/Suites";

import { ThemeModeScript } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Longstay Achterhoek</title>
        <meta name="description" content="A home away from home" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
        <ThemeModeScript />
      </Head>
      <NavbarComponent />
      <Landing />
      <About />
      <Suites />
    </div>
  );
}
