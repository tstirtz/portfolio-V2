import Head from "next/head";
import Link from "next/link";
import { AppProps } from "next/app";

export default function Home() {
  return (
    <div className="text-stark">
      <Head>
        <title>Tyler Stirtz Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          src="https://cdn.tiny.cloud/1/xa8bj0gpu9r7bkldwuvl0rm30jowdh5sgiecd30ferstgi56/tinymce/6/tinymce.min.js"
          referrerPolicy="origin"
        ></script> */}
      </Head>
      {/* <main>
      </main> */}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
