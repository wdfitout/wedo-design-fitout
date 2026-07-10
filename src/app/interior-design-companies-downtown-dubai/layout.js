export const metadata = {
  title: "Best Interior Design Companies in Downtown Dubai | WE DO",
  description:
    " Comparing interior design companies in Downtown Dubai? Learn how to choose the right firm for luxury fit-outs, Emaar approvals, and expert design.",
  alternates: {
    canonical:
      "/interior-design-companies-downtown-dubai",
  },
  openGraph: {
    title: "Best Interior Design Companies in Downtown Dubai | WE DO",
    description:
      "WE DO delivers turnkey interior design and fit-out for luxury residential, restaurant, and office projects in Downtown Dubai.",
    url: "https://wedointerior.ae/interior-design-companies-downtown-dubai",
    siteName: "WE DO Interior Design & Fit-Out",
    images: [
      {
        url: "https://wedointerior.ae/images/luxury-downtown-dubai-interior-transformation.png",
        width: 1200,
        height: 630,
        alt: "WE DO luxury interior fit-out project in Downtown Dubai",
      },
    ],
    locale: "en_AE",
    type: "article",
    publishedTime: "2026-07-07",
modifiedTime: "2026-07-10",
authors: ["WE DO Editorial Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Design Companies in Downtown Dubai | WE DO",
    description:
      "WE DO delivers turnkey interior design and fit-out for luxury residential, restaurant, and office projects in Downtown Dubai.",
    images: [
      "https://wedointerior.ae/images/luxury-downtown-dubai-interior-transformation.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I check in an interior design firm in Downtown Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When checking the firms, you need to ensure that they have an active DED commercial fit-out contracting license, complete third party corporate insurance liability and an extensive track record of designing projects within high rise developer towers. The firm will be better if it integrates engineering, design and logistics management under one roof."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price charged by interior design firms in Downtown Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In case you want a structurally solid space, the structural and cosmetic changes can cost somewhere between AED 400 to AED 850+. It all depends on your material choices and the complexity involved in the process of changing the structure."
      }
    },
    {
      "@type": "Question",
      "name": "Is it more beneficial to choose a company or a freelance interior designer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Even though the freelance interior designer will be able to come up with amazing 3D drawings in the conceptual phase, they will not have the licensing requirements for the DED contracts, company insurance, and engineering skills needed in order to obtain the government permits or oversee the construction site of the high-rise building."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Downtown Dubai fit-out usually last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A luxurious apartment or commercial area measuring between 1,500 to 4,000 square feet usually takes 8 to 12 weeks from sign-off on the final drawings to the actual delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the best interior design company in Downtown Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WE DO Interior Design & Fitout is trusted for its turnkey approach for the best interior design company in Downtown Dubai. By handling everything from high-end architectural concepts and Emaar approvals to in-house joinery manufacturing and physical construction, WE DO delivers world-class spaces seamlessly under a single turnkey contract."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need special approval to renovate an Emaar-managed Downtown Dubai building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You are legally required to obtain a formal No Objection Certificate (NOC) from Emaar Community Management (ECM) before executing any cosmetic, structural, or mechanical work. This developer NOC is a mandatory legal prerequisite before you can secure your official permits from the Dubai Municipality and Dubai Civil Defense."
      }
    },
    {
      "@type": "Question",
      "name": "What is the distinction between a turnkey firm and a design firm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A design-only firm only offers designs, concepts, mood boards, and 3D drawings, while the management and coordination with individual contractors and permit authority remain your responsibility. Turnkey firms take complete charge of the whole process from design through manufacture up to the actual construction on site."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://wedointerior.ae/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Interior Design Dubai",
      item: "https://wedointerior.ae/interior-design-dubai",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Interior Design Companies in Downtown Dubai",
      item:
        "https://wedointerior.ae/interior-design-companies-downtown-dubai",
    },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  headline: "Best Interior Design Companies in Downtown Dubai",

  alternativeHeadline:
    "A Guide to Choosing the Best Interior Design Company in Downtown Dubai",

  description:
    "Discover what to look for when comparing interior design companies in Downtown Dubai, from design expertise and approvals to turnkey project delivery.",

  image: [
    "https://wedointerior.ae/images/luxury-downtown-dubai-interior-transformation.png",
  ],

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://wedointerior.ae/interior-design-companies-downtown-dubai",
  },

  url: "https://wedointerior.ae/interior-design-companies-downtown-dubai",

  author: {
    "@type": "Organization",
    name: "WE DO Interior Design & Fit-Out",
  },

  publisher: {
  "@type": "Organization",
  name: "WE DO Interior Design & Fit-Out",
  url: "https://wedointerior.ae",
  logo: {
    "@type": "ImageObject",
    url: "https://wedointerior.ae/images/logo.png",
  },
},
  datePublished: "2026-07-07",

  dateModified: "2026-07-07",

  inLanguage: "en-AE",

  keywords: [
    "Interior Design Companies Downtown Dubai",
    "Downtown Dubai Interior Design",
    "Luxury Interior Design Dubai",
    "Interior Fit Out Dubai",
    "Commercial Interior Design Dubai",
  ],

  articleSection: "Interior Design",
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />

      {children}
    </>
  );
}