import Head from "next/head";
import Image from "next/image";
import Obfuscate from "react-obfuscate";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Confluence Designs</title>
        <meta
          name="description"
          content="Inspired by each sites’s distinguishing qualities, Confluence Designs’ projects reveal an inherent respect for the sense of place which is reflected in their site specific designs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-full max-w-3xl mx-auto text-center flex items-center px-4">
        <div className="grid gap-8 md:gap-12">
          <h1 className="text-5xl font-bold uppercase">Confluence Designs</h1>
          <p className="text-xl">
            Inspired by each sites&apos;s distinguishing qualities, Confluence
            Designs&apos; projects reveal an inherent respect for the sense of
            place which is reflected in their site specific designs.
          </p>
          <div className="max-w-[240px] mx-auto shadow-lg leading-[0] rounded-xl">
            <Image
              alt="Statue"
              className="rounded-xl"
              height={1024}
              src="/images/statue.jpg"
              width={768}
            />
          </div>
          <div>
            Contact us at{" "}
            <Obfuscate
              className="text-blue-500 hover:text-blue-600"
              email="jbear@confluencedesigns.com"
              headers={{
                subject: "Confluence Designs contact",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
