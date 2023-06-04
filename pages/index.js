import Head from "next/head";
import WIP from "../components/WIP";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Longstay Achterhoek</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/favicon-16x16.png"
        />
        <link rel="manifest" href="../public/site.webmanifest" />
      </Head>
      <WIP />
    </div>
  );
}
