// Server Component: no "use client" needed. Nothing here uses state, effects or
// browser APIs, so this ships zero client-side JS (better INP / TBT).
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Shared class strings                                                */
/* ------------------------------------------------------------------ */
const BOX = "border border-[#caa193]/10 bg-[#111]";
const H2 = "font-conthrax leading-tight text-[#b98877]";
const INLINE_LINK =
  "text-[#caa193] underline decoration-[#caa193]/40 underline-offset-4 transition-colors hover:text-white";
const CELL = "border border-[#caa193]/20 p-2";
const COL_HEAD = `${CELL} text-left font-conthrax text-xs text-[#caa193] sm:text-sm`;
const ROW_HEAD = `${CELL} text-left font-semibold text-white`;
const BTN =
  "inline-flex items-center justify-center rounded-md bg-[#b98877] font-conthrax text-black transition-colors duration-300 hover:bg-[#caa193]";
const CONTACT_LINK =
  "underline decoration-white/30 underline-offset-2 transition-colors hover:text-white";

/* ------------------------------------------------------------------ */
/* Content data (text identical to the original page)                  */
/* ------------------------------------------------------------------ */
const services = [
  {
    no: "01",
    title: "Villa Renovation",
    href: "/villa-renovation-dubai",
    body: (
      <>
        Full or room-by-room renovation for standalone and twin villas, MEP
        upgrades, kitchens, bathrooms, majlis interiors, flooring, and exterior
        work. This is our most detailed service; see{" "}
        <Link href="/villa-renovation-dubai" className={INLINE_LINK}>
          villa renovation in Dubai
        </Link>{" "}
        for the complete process, cost breakdown, and room-by-room services,
        including{" "}
        <Link href="/kitchen-renovation-dubai" className={INLINE_LINK}>
          kitchen renovation
        </Link>{" "}
        and{" "}
        <Link href="/bathroom-renovation-dubai" className={INLINE_LINK}>
          bathroom renovation
        </Link>{" "}
        detail.
      </>
    ),
  },
  {
    no: "02",
    title: "Apartment & Home Renovation",
    href: "/apartment-renovation-dubai",
    body: (
      <>
        Apartment renovation in Dubai works to your building&apos;s rules. Many
        towers need a developer or building-management NOC before work starts,
        and some restrict working hours or wet trades to certain days. We manage
        that process as part of the job. Typical scope: kitchen and bathroom
        updates, flooring, built-in joinery, and full interior refreshes for
        units in Business Bay, Downtown Dubai, and Dubai Marina. See{" "}
        <Link href="/apartment-renovation-dubai" className={INLINE_LINK}>
          apartment renovation in Dubai
        </Link>{" "}
        for more.
      </>
    ),
  },
  {
    no: "03",
    title: "Office & Commercial Renovation",
    href: "/office-renovation-dubai",
    body: (
      <>
  Office and commercial renovation in Dubai is as much about performance
  as it is about looks: layout, lighting, acoustics, and brand
  presentation all matter. We handle partition and layout changes, MEP and
  electrical upgrades, flooring, and joinery for offices, clinics, and{" "}
  <Link href="/retail-renovation-dubai" className={INLINE_LINK}>
    retail spaces
  </Link>
  . See{" "}
  <Link href="/office-renovation-dubai" className={INLINE_LINK}>
    office renovation in Dubai
  </Link>{" "}
  for the full process and cost breakdown.
</>
    ),
  },
];

const fitOutRows = [
  [
    "Scope",
    "Updating an existing space: finishes, MEP, and non-structural layout changes",
    "Interior systems, joinery, and furnishing — typically shell-and-core or post-handover",
  ],
  [
    "Best for",
    "Older villas, apartments, or offices needing an update",
    "New units or handed-over shells needing interior build-out",
  ],
  [
    "Typical timeline",
    "Weeks to several months, depending on scope",
    "Confirmed at your site visit, based on scope",
  ],
  [
    "Approvals needed",
    "DEWA, building/community NOC (Dubai Municipality permit only if structural work is involved)",
    "Developer/community NOC, DEWA for MEP",
  ],
];

const structuralRows = [
  [
    "What's included",
    "Flooring, paint, cabinetry fronts, fixtures, no layout changes",
    "Moving walls, relocating plumbing/electrical, extensions",
  ],
  ["Permit required?", "Usually no", "Yes, Dubai Municipality building permit"],
  ["Structural engineer needed?", "No", "Yes"],
  [
    "Typical timeline",
    "1–6 weeks (single room) to 3–4 months (whole villa)",
    "4–8 months, including permit approval",
  ],
];

const approvals = [
  "Dubai Municipality — most mainland areas",
  "Zone authorities (DIFC, Trakhees or the DDA) for properties within their jurisdictions",
  "Dubai Civil Defence — any work affecting fire or life-safety systems",
  "Developers (Emaar, Damac, etc.) — their own separate approval route in their communities",
];

const processStages = [
  {
    title: "1. Consultation & Site Visit",
    text: "We start with a conversation about your goals and your building's or community's requirements. Once you confirm you'd like to move forward, we schedule a complimentary site visit before anything gets scoped or priced.",
  },
  {
    title: "2. Design & 3D Visualization",
    duration: "4–8 weeks",
    text: "We map out layout options and selection, and produce a full design brief with 3D visuals, so you're approving the actual design, not imagining it.",
  },
  {
    title: "3. Approvals",
    duration: "4–8 weeks, usually alongside design",
    text: "We prepare and submit whatever approvals the project needs, based on the property and scope.",
  },
  {
    title: "4. Construction & MEP Works",
    duration: "4–16 weeks, depending on scope",
    text: "Demolition, layout changes, and plumbing and electrical work, built exactly to the approved design.",
  },
  {
    title: "5. Joinery, Finishes & Styling",
    duration: "4–8 weeks",
    text: "Custom carpentry from our own factory, flooring, painting, and final material installation.",
  },
  {
    title: "6. Snagging & Final Handover",
    text: "A full quality inspection and walkthrough with you before you move back in or reopen.",
  },
];

const costRows = [
  ["Bathroom renovation (per bathroom)", "15,000 – 140,000+"],
  ["Kitchen renovation", "15,000 – 180,000+"],
  ["Full apartment renovation, cosmetic", "80,000 – 250,000"],
  ["Full villa renovation, cosmetic only", "150,000 – 400,000"],
  ["Full villa renovation with MEP upgrades", "400,000 – 1,000,000+"],
  ["Small to mid-size office fit-out/renovation", "150,000 – 600,000"],
];

const trends = [
  {
    id: "ageing-mep",
    title: (
      <Link href="/villa-renovation-dubai" className={INLINE_LINK}>
        Ageing MEP replacement in older villas
      </Link>
    ),
    text: "Properties from the 2000s often need electrical and plumbing systems replaced outright rather than repaired, especially once a renovation already requires walls or ceilings to be opened.",
  },
  {
    id: "waterproofing-failures",
    title: (
      <Link href="/bathroom-renovation-dubai" className={INLINE_LINK}>
        Waterproofing failures found once old tiling comes off
      </Link>
    ),
    text: "A common discovery mid-renovation, not something visible beforehand — one reason a fixed-price contract with a contingency allowance matters more than a bare-minimum quote.",
  },
  {
    id: "dewa-load",
    title: "Upgrading DEWA load during renovation",
    text: "Older properties were wired for far less electrical demand than a modern kitchen, smart home system, or office fit-out needs. Load upgrades are increasingly part of the renovation scope itself, not an afterthought.",
  },
  {
    id: "open-plan-kitchen",
    title: (
      <>
        <Link href="/kitchen-renovation-dubai" className={INLINE_LINK}>
          Open-plan kitchen conversions
        </Link>{" "}
        and their NOC implications
      </>
    ),
    text: "Removing the wall between a closed kitchen and the living area remains one of the most requested layout changes, but it is also one of the more common triggers for needing building or developer approval, even in an otherwise cosmetic renovation.",
  },
];

const testimonials = [
  {
    quote:
      "We worked with WE DO on our villa renovation in MBR City and were very happy with the experience. The team understood what we wanted and handled the design and execution really well. The finishing quality was excellent, and the villa now feels completely refreshed. Very happy with the final result.",
    name: "James Anderson",
    location: "MBR City, Dubai",
  },
  {
    quote:
      "WE DO did a great job renovating our villa in Emirates Hills. The team was professional, responsive, and paid close attention to the details throughout the project. Everything was managed smoothly from the initial discussions through to the final finishing. We’re very pleased with how the villa turned out.",
    name: "Sarah Mitchell",
    location: "Emirates Hills, Dubai",
  },
];

const faqs = [
  {
    q: "How much does renovation cost in Dubai?",
    a: "It depends heavily on property type and scope. As a rough guide, a kitchen renovation runs around AED 15,000–180,000+, a bathroom AED 15,000–140,000+ per bathroom, a full apartment renovation AED 80,000–250,000, and a full villa renovation AED 150,000–1,000,000+ depending on whether MEP work is included. WE DO confirms exact numbers with an itemized quote after a complimentary site visit.",
  },
  {
  q: "Do you renovate apartments as well as villas?",
  a: (
    <>
      Yes. WE DO handles apartment and{" "}
      <Link href="/home-renovation-jumeirah-dubai" className={INLINE_LINK}>
        home renovation
      </Link>{" "}
      across Dubai, including kitchen and bathroom updates, flooring,
      joinery, and full interior refreshes, and manages the building or
      developer NOC process where one applies.
    </>
  ),
},
  {
    q: "Do you handle office and commercial renovation?",
    a: "Yes. WE DO provides commercial renovation in Dubai for offices, clinics, and retail spaces — layout and partition changes, MEP and electrical upgrades, flooring, and joinery, run by the same team that handles our residential projects.",
  },
  {
    q: "What's the difference between renovation and fit-out?",
    a: (
  <>
    Renovation covers cosmetic and interior updates to an existing, occupied
    space, villa, apartment, or office.{" "}
    <Link href="/fit-out-company-dubai" className={INLINE_LINK}>
      Fit-out
    </Link>{" "}
    usually means interior systems, joinery, and furnishing for a
    shell-and-core or newly handed-over space. Structural changes for villas
    are handled separately through our construction team. Many projects
    combine renovation and fit-out under one contract to avoid duplicate
    site visits.
  </>
),},
  {
  q: "What's the difference between a cosmetic and a structural renovation?",
  a: (
    <>
      Cosmetic work updates surfaces, flooring, paint, and cabinetry fronts
      without touching the layout, and usually needs no permit. Structural
      work means moving walls or extending the footprint, which needs Dubai
      Municipality approval and a licensed engineer&apos;s sign-off. WE DO
      covers the cosmetic side directly; structural work for villas goes
      through our{" "}
      <Link href="/villa-construction-dubai" className={INLINE_LINK}>
        construction team
      </Link>
      .
    </>
  ),
},
  {
    q: "Do I need approval to renovate my apartment or office in Dubai?",
    a: "Most renovation and fit-out work needs some form of approval. For apartments, that's usually a building-management or developer NOC. For offices, it depends on the zone, Dubai Municipality, DIFC, Trakhees, or the DDA, plus Dubai Civil Defence if the work affects fire or life-safety systems. WE DO's approvals team handles this as part of the project.",
  },
  {
    q: "How long does a renovation take?",
    a: "A single kitchen or bathroom typically takes 1–6 weeks. A full apartment or standard-scope villa renovation runs 3–4 months. Large villas, full MEP overhauls, or larger offices can run 6–8 months. NOC approvals and imported material lead times are the most common reasons a timeline extends.",
  },
  {
  q: "How do I find a good renovation company near me in Dubai?",
  a: (
    <>
      Look for a company that's DED-registered, shows{" "}
      <Link href="/gallery" className={INLINE_LINK}>
        a real, verifiable portfolio
      </Link>{" "}
      in your property type, and gives you an itemized quote after an
      in-person site visit rather than a flat number over the phone. WE DO
      has delivered 250+ projects across Dubai over 11+ years, across{" "}
      <Link href="/villa-projects" className={INLINE_LINK}>
        villas
      </Link>
      ,{" "}
      <Link href="/apartment-projects" className={INLINE_LINK}>
        apartments
      </Link>
      , and{" "}
      <Link href="/office-projects" className={INLINE_LINK}>
        offices
      </Link>
      .
    </>
  ),
},
];

/* ------------------------------------------------------------------ */
/* Reusable blocks (no props, so this works in .jsx and .tsx)          */
/* ------------------------------------------------------------------ */

// Same CTA was pasted twice in the original; now one component.
function SectionCta() {
  return (
    <div className="my-10">
      <div className="relative overflow-hidden border border-[#caa193]/20 bg-[#111] px-6 py-7 sm:px-10 sm:py-8">
        <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-[#b98877]" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 font-conthrax text-[10px] uppercase tracking-[3px] text-[#caa193] sm:text-xs">
              Start Your Renovation
            </p>
            <h3 className={`${H2} mb-2 text-lg sm:text-xl`}>
              Ready to Transform Your Property?
            </h3>
            <p className="font-play text-xs leading-relaxed text-white/60 sm:text-sm">
              Tell us about your renovation and let our team guide you through
              the design, approvals and execution.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/contact-us"
              className={`${BTN} whitespace-nowrap border border-[#caa193] px-6 py-3 text-xs`}
            >
              Book Your Free Site Visit →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// The original rendered this CTA twice (desktop + mobile copies, two identical
// H2s in the DOM). Now it renders once and adapts with breakpoints. The only
// text difference between the two copies ("Dubai - ") is kept per breakpoint.
function RenovationCta() {
  return (
    <div className="relative mb-10 overflow-hidden border border-[#caa193]/20 bg-[#111] sm:mb-12">
      <div className="relative h-[220px] w-full sm:h-[280px] md:h-[330px]">
        <Image
          src="/images/luxury-villa-renovation-dubai.webp"
          alt="Luxury villa renovation in Dubai"
          fill
          sizes="(max-width: 1536px) 100vw, 1400px"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-black/20 via-black/30 to-black/80 md:block"
        />
      </div>

      <div className="bg-[#111] px-5 py-6 md:absolute md:inset-y-0 md:right-0 md:flex md:w-[45%] md:flex-col md:justify-center md:bg-black/75 md:px-8 md:py-8 lg:w-[40%] lg:px-10">
        <p className="mb-2 font-conthrax text-[10px] uppercase tracking-[2px] text-[#caa193] md:mb-3 md:text-xs">
          Start Your Renovation
        </p>

        <h2 className={`${H2} mb-3 text-base uppercase sm:text-lg md:mb-4 lg:text-xl`}>
          Ready to Start Your Renovation in Dubai?
        </h2>

        <address className="font-play text-xs not-italic leading-relaxed text-gray-300 sm:text-sm lg:text-[15px]">
          WE DO Interior Design &amp; Fit-Out
          <br />
          <span className="hidden md:inline">Dubai - </span>Jebel Ali Industrial 1, Dubai
          <br />
          Phone &amp; WhatsApp:{" "}
          <a href="tel:+971588075603" className={CONTACT_LINK}>
            +971 58 807 5603
          </a>
          <br />
          Email:{" "}
          <a href="mailto:info@wedointerior.ae" className={CONTACT_LINK}>
            info@wedointerior.ae
          </a>
        </address>

        <div className="mt-5 md:mt-6">
          <Link href="/contact-us" className={`${BTN} px-5 py-2.5 text-[11px] md:py-3 md:text-sm`}>
            Book Your Free Site Visit →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page section                                                        */
/* ------------------------------------------------------------------ */
export default function AboutSection() {
  return (
    <section className="bg-black py-16 sm:py-5">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* ================= KEY FACTS ================= */}
        <div className={`${BOX} mb-5 p-5 sm:p-8`}>
          <p className="mb-4 font-conthrax text-xs uppercase tracking-[3px] text-[#caa193]">
            Key Facts
          </p>

          <ul className="list-inside list-disc space-y-1 font-play leading-8 text-white/80">
            <li>
              <strong>250+ projects</strong> delivered across Dubai over{" "}
              <strong>11+ years</strong>.
            </li>
            <li>
              <strong>DED-registered</strong>,ISO 9001:2015/14001:2015/45001:2018
              certified, externally audited
            </li>
            <li>
              Winner, Best Luxury Residential Renovation Interior Design,{" "}
              <strong>Luxury Lifestyle Awards 2026</strong>, for an <b className="text-[#caa193]"><a href="https://wedointerior.ae/ii-primo-penthouse">apartment in
              Primo Tower </a></b>
            </li>
            <li>Most renovations: 1 week to 8 months, depending on scope</li>
            <li>
              Complimentary site visit and itemized quote once you&apos;re ready to
              move forward
            </li>
            <li>
             <b className="text-[#caa193]"><a href="https://wedointerior.ae/joinery-company-dubai">Own joinery factory</a></b> , own crews, fit-out delivered in-house, not
              subcontracted out
            </li>
          </ul>
        </div>

        {/* ================= RENOVATION SERVICES ================= */}
        <section className="py-5">
          <h2 className={`${H2} mb-4 text-center text-2xl`}>
            Which Kind of Renovation Do You Need?
          </h2>
          <p className="mb-6 font-play text-base leading-relaxed text-white">
            A villa renovation deals with MEP systems, layouts, and finishes
            across a whole standalone home. An apartment renovation works inside a
            fixed building envelope and building-management rules. An office
            renovation is about function and brand as much as finish.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {services.map((s) => (
              <article
                key={s.no}
                className="flex h-full flex-col rounded-lg border border-[#caa193]/20 bg-[#111] p-5 transition duration-300 hover:border-[#caa193]/50 hover:shadow-lg"
              >
                <div className="mb-4 font-conthrax text-sm text-[#caa193]">{s.no}</div>
                <h3 className={`${H2} mb-4 text-xl`}>{s.title}</h3>
                <p className="font-play text-sm leading-relaxed text-white/80 sm:text-base">
                  {s.body}
                </p>
                <div className="mt-auto pt-6">
                  <Link
                    href={s.href}
                    className="font-conthrax text-sm text-[#caa193] transition-colors hover:text-white"
                  >
                    View Service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCta />

        {/* ================= RENOVATION vs FIT-OUT / COSMETIC vs STRUCTURAL ================= */}
        <section className="py-5">
          {/* Row 1 */}
          <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:mb-20 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className={`${H2} mb-5 text-2xl sm:text-3xl`}>Renovation vs. Fit-Out</h2>

              <p className="mb-6 font-play leading-relaxed text-white/80">
                These terms get used interchangeably, and mixing them up leads to a
mismatched quote: a fit-out quote won&apos;t cover structural work,
and a renovation quote may include fit-out elements you don&apos;t
need. If your project needs both,{" "}
<Link href="/design-build-services-in-dubai" className={INLINE_LINK}>
  we run them as one job under a single point of contact
</Link>
              </p>

              <div className="overflow-x-auto border border-[#caa193]/20 bg-[#111]">
                <table className="w-full min-w-[480px] border-collapse text-left">
                  <thead>
                    <tr>
                      <th scope="col" className={COL_HEAD}>Factor</th>
                      <th scope="col" className={COL_HEAD}>Renovation</th>
                      <th scope="col" className={COL_HEAD}>Fit-Out</th>
                    </tr>
                  </thead>
                  <tbody className="font-play text-sm leading-relaxed text-white/80">
                    {fitOutRows.map(([factor, a, b]) => (
                      <tr key={factor}>
                        <th scope="row" className={ROW_HEAD}>{factor}</th>
                        <td className={CELL}>{a}</td>
                        <td className={CELL}>{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative h-[260px] overflow-hidden sm:h-[450px] lg:h-[560px]">
              <Image
                src="/images/renovation-vs-fit-out-dubai.webp"
                alt="Luxury renovation and fit-out interior in Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[260px] overflow-hidden sm:h-[450px] lg:h-[560px]">
              <Image
                src="/images/structural-vs-cosmetic-renovation-dubai.webp"
                alt="Structural and cosmetic villa renovation in Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className={`${H2} mb-5 text-2xl sm:text-3xl`}>
                Cosmetic vs. Structural: What&apos;s the Difference?
              </h2>

              <p className="mb-5 font-play leading-relaxed text-white/80">
                This distinction applies mainly to villas, where structural work
                needs a Dubai Municipality permit. Apartments rarely allow
                structural changes at all, building management typically limits
                work to cosmetic scope. Offices need approval from Dubai
                Municipality or the relevant zone authority (DDA, DIFC, or
                Trakhees), depending on location, for partition or layout changes,
                rather than a residential permit.
              </p>

              <p className="mb-6 font-play leading-relaxed text-white/80">
                For villas specifically, here&apos;s where the line sits:
              </p>

              <div className="overflow-x-auto border border-[#caa193]/20 bg-[#111]">
                <table className="w-full min-w-[480px] border-collapse text-left">
                  <thead>
                    <tr>
                      <th scope="col" className={COL_HEAD}>Factor</th>
                      <th scope="col" className={COL_HEAD}>Cosmetic Renovation</th>
                      <th scope="col" className={COL_HEAD}>Structural Changes</th>
                    </tr>
                  </thead>
                  <tbody className="font-play text-sm leading-relaxed text-white/80">
                    {structuralRows.map(([factor, a, b]) => (
                      <tr key={factor}>
                        <th scope="row" className={ROW_HEAD}>{factor}</th>
                        <td className={CELL}>{a}</td>
                        <td className={CELL}>{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RENOVATION APPROVALS ================= */}
        <section>
          <h2 className={`${H2} mb-4 p-5 text-center text-2xl`}>
            Renovation Approvals in Dubai
          </h2>

          <div className={`${BOX} mb-5 p-5 text-left sm:p-10`}>
            <div className="flex flex-col items-center gap-10 lg:flex-row">
              <div className="flex-1">
                <p className="mb-5 font-play leading-relaxed text-white/80">
                  Most renovation work needs some form of approval, and which
                  authority applies depends on where the property is and what&apos;s
                  being done:
                </p>

                <ul className="list-inside list-disc space-y-3 font-play leading-7 text-white/80">
                  {approvals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mb-5 font-play leading-relaxed text-white/80">
                  WE DO&apos;s approvals team prepares and submits the relevant
                  package as part of the project, so this isn&apos;t something you
                  manage yourself.
                </p>
              </div>

              <div className="relative h-64 w-full flex-shrink-0 overflow-hidden lg:w-[48%]">
                <Image
                  src="/images/renovation-approvals-dubai-villa.webp"
                  alt="Villa renovation approvals in Dubai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= RENOVATION PROCESS ================= */}
        <section className="flex flex-col items-center gap-10 py-5 lg:flex-row">
         <div className="relative h-[420px] w-full overflow-hidden rounded-lg shadow-md sm:h-[550px] lg:h-[650px] lg:w-1/2">
  <Image
    src="/images/villa-renovation-process-dubai.webp"
    alt="Villa renovation process in Dubai"
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>

          <div className="w-full lg:w-1/2 lg:text-left">
            <h2 className={`${H2} mb-4 text-2xl`}>Our Renovation Process</h2>

            <p className="mb-6 font-play text-sm text-white sm:text-base">
              Six stages, from the first call to final handover, for full-scope
              renovations. Standard-scope projects wrap in{" "}
              <b className="text-[#caa193]">3–4 months</b>; large or full-scope
              projects run <b className="text-[#caa193]">6–8 months</b>. A single
              room or small partial job usually skips the longer design and
              approval stages and completes in about{" "}
              <b className="text-[#caa193]">1–6 weeks</b>.
            </p>

            <ol className="list-none space-y-5 text-left">
              {processStages.map((stage) => (
                <li key={stage.title}>
                  <h3 className="mb-1 font-conthrax text-sm text-[#caa193]">{stage.title}</h3>
                  <p className="font-play text-sm leading-relaxed text-white/80">
                    {stage.duration && (
                      <>
                        <b className="text-white">({stage.duration})</b> —{" "}
                      </>
                    )}
                    {stage.text}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-6 font-play text-xs leading-relaxed text-white/60">
              *Individual stage durations may overlap, so they should not be added
              together to calculate the total project duration.
            </p>
          </div>
        </section>

        {/* ================= RENOVATION COST ================= */}
        <section>
          <h2 className={`${H2} mb-4 p-5 text-center text-2xl`}>Renovation Cost in Dubai</h2>

          <div className={`${BOX} p-5 sm:p-8`}>
            <div className="flex flex-col items-start gap-10 lg:flex-row">
              <div className="w-full overflow-x-auto lg:w-1/2">
                <p className="mb-5 font-play leading-relaxed text-white/80">
                  Renovation cost in Dubai depends on property type, size, scope,
                  and material grade. As a general guide to current market rates:
                </p>

                <table className="w-full border-collapse text-left font-play text-sm">
                  <thead>
                    <tr className="border-b border-[#caa193]/20">
                      <th scope="col" className="py-3 pr-4 text-left font-conthrax text-[#caa193]">
                        Scope
                      </th>
                      <th scope="col" className="py-3 text-left font-conthrax text-[#caa193]">
                        Typical Range (AED)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    {costRows.map(([scope, range], i) => (
                      <tr
                        key={scope}
                        className={i < costRows.length - 1 ? "border-b border-[#caa193]/10" : undefined}
                      >
                        <th scope="row" className="py-3 pr-4 text-left font-normal">
                          {scope}
                        </th>
                        <td className="whitespace-nowrap py-3">{range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="w-full text-left lg:w-1/2">
                <p className="font-play text-sm leading-relaxed text-white sm:text-base">
                  These are a starting reference, not a quote, the real number
                  moves with the property&apos;s size, material grade, and any
                  building-specific requirements. See each service page for
                  detailed cost breakdowns.
                </p>

                <p className="mt-5 font-play text-sm leading-relaxed text-white sm:text-base">
                  Your itemized quote covers design, materials, labor, and project
                  management; furniture, appliances, and any NOC fees are confirmed
                  separately at the site visit.
                </p>

                <div className="relative mt-6 h-56 w-full overflow-hidden">
                  <Image
                    src="/images/renovation-cost-dubai-luxury-interior.webp"
                    alt="Luxury interior renovation in Dubai"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE WE DO ================= */}
        <section className="mt-10 py-5 text-center">
          <h2 className={`${H2} mb-4 text-2xl`}>Why Choose WE DO for Renovation in Dubai</h2>
          <p className="mx-auto max-w-6xl py-2 font-play text-sm text-white sm:text-base md:mt-4 md:py-6">
            As a renovation contractor in Dubai working across villas, apartments,
            and offices, WE DO runs projects through one design and build team. One
            contract, one point of contact, no tender gap between the company that
            draws the design and the one that builds it. Fit-out is delivered by
            our own crews rather than subcontracted out, and joinery is made in our
            own Dubai factory to your drawings, not adapted from a catalogue.
          </p>
        </section>

        <RenovationCta />

        {/* ================= RENOVATION TRENDS ================= */}
        <section className={`${BOX} mt-10 p-5 sm:p-6`}>
          <h2 className={`${H2} mb-4 text-2xl`}>Renovation Trends in Dubai</h2>
          <ul className="list-inside list-disc space-y-2 font-play text-white/80">
            {trends.map((t) => (
           <li key={t.id}>
                <strong>{t.title} -</strong> {t.text}
              </li>
            ))}
          </ul>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section>
          <h2 className={`${H2} mb-8 p-5 text-center text-xl sm:text-2xl`}>
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-lg border border-[#caa193]/20 bg-[#111] p-5 sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="mb-2 font-conthrax text-2xl leading-none text-[#caa193]"
                >
                  “
                </div>
                <blockquote className="mb-4 font-play text-xs leading-relaxed text-white/80 sm:text-sm">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="border-t border-[#caa193]/10 pt-3">
                  <p className="font-conthrax text-xs text-[#b98877]">{t.name}</p>
                  <p className="mt-1 font-play text-xs text-white/60">{t.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <SectionCta />

        {/* ================= FAQ ================= */}
        <section className="py-12 sm:py-16">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4 lg:gap-10">
            <div className="lg:sticky lg:top-24 lg:col-span-1">
              <div className="relative h-[300px] overflow-hidden rounded-lg border border-[#caa193]/20 sm:h-[400px] lg:h-[600px]">
                <Image
                  src="/images/villa-renovation-interior-dubai.webp"
                  alt="Villa renovation interior in Dubai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="mb-2 font-conthrax text-[9px] uppercase tracking-[2px] text-[#caa193]">
                    WE DO Interior Design &amp; Fit-Out
                  </p>
                  <p className="font-conthrax text-sm leading-tight text-white">
                    Renovation Designed Around Your Property
                  </p>
                </div>
              </div>
            </div>

            <div className="font-play text-sm leading-relaxed text-white lg:col-span-3">
              <h2 className={`${H2} mb-6 text-2xl sm:text-3xl`}>Frequently Asked Questions</h2>

              <div className="space-y-1">
                {faqs.map((f, i) => (
                  <div key={f.q}>
                    <h3 className="py-4 font-conthrax leading-tight text-[#b98877]">
                      {i + 1}- {f.q}
                    </h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}