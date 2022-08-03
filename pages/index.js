import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Safe Haven in Christ</title>
        <meta
          name="description"
          content="A space for conversations about controversial topics."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen place-items-center">
        <img
          className="w-80"
          src="https://ik.imagekit.io/et8vxrzxxdj/shic/shic_C6X_rWOyY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659550687817"
        />
      </div>
    </div>
  );
}
