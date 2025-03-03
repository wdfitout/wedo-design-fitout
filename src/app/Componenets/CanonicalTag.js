"use client"; // Required because usePathname() is a client-side hook

import { usePathname } from "next/navigation";
import Head from "next/head";

export default function CanonicalTag() {
  const pathname = usePathname();
  const canonicalUrl = `https://www.wedointerior.ae${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
