import "../styles/globals.css";
import Nav from "../components/Nav";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <Nav />
      <body className="text-stark">{children}</body>
    </html>
  );
}
