"use client"; // Required because usePathname() is a client-side hook

import { usePathname } from "next/navigation";
import Head from "next/head";

export default function CanonicalTag() {
  const pathname = usePathname();
  
  // ✅ Remove trailing slash (if exists) to prevent duplicate canonical URLs
  const canonicalUrl = `https://www.wedointerior.ae${pathname}`.replace(/\/$/, "");

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
