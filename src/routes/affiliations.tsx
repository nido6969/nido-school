import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import imfLogo from "@/assets/affiliations/imf.png";
import rtiLogo from "@/assets/affiliations/rti.png";
import mibLogo from "@/assets/affiliations/mib.png";
import suprajaLogo from "@/assets/affiliations/supraja.png";
import mrttLogo from "@/assets/affiliations/mrtt.jpg";
import medhaLogo from "@/assets/affiliations/medha.png";
import vhmiLogo from "@/assets/affiliations/vhmi.png";
import jfaLogo from "@/assets/affiliations/jfa-mttc.jpg";

export const Route = createFileRoute("/affiliations")({
  component: AffiliationsPage,
  head: () => ({
    meta: [
      { title: "Affiliations & Montessori Training Centres — NIDO Montessori" },
      {
        name: "description",
        content:
          "Official directory of the Indian Montessori Foundation (IMF) and Montessori Training Centres across India listed by the IMF, presented by NIDO Montessori Preschool, an IMF Flagship School.",
      },
      {
        property: "og:title",
        content: "Affiliations & Montessori Training Centres — NIDO Montessori",
      },
      {
        property: "og:description",
        content:
          "Directory of the Indian Montessori Foundation and Montessori Training Centres across India listed by the Indian Montessori Foundation.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/affiliations" },
    ],
    links: [{ rel: "canonical", href: "/affiliations" }],
  }),
});

interface CentreItem {
  name: string;
  location: string;
  logo: string;
  description: string;
  url?: string;
  email?: string;
  additionalReference?: {
    label: string;
    url: string;
  };
}

const imfOrganisation: CentreItem = {
  name: "Indian Montessori Foundation",
  location: "Pan-India",
  logo: imfLogo,
  description:
    "The national organisation dedicated to promoting authentic Montessori philosophy and education across India, affiliated with the Association Montessori Internationale (AMI).",
  url: "https://www.montessori-india.org/",
};

const trainingCentres: CentreItem[] = [
  {
    name: "RTI Montessori Training, Mumbai",
    location: "Mumbai, Maharashtra",
    logo: rtiLogo,
    description:
      "Conducted at the Sir Ratan Tata Institute in Mumbai, offering recognized Montessori teacher training courses.",
    url: "https://www.montessori-mumbai.org/",
  },
  {
    name: "Montessori Institute of Bangalore, Bengaluru",
    location: "Bengaluru, Karnataka",
    logo: mibLogo,
    description:
      "Established training institute in Bengaluru conducting comprehensive Montessori teacher training and diploma programmes.",
    url: "https://www.montessoribangalore.org/",
  },
  {
    name: "Supraja Montessori Study Centre, Chennai",
    location: "Chennai, Tamil Nadu",
    logo: suprajaLogo,
    description:
      "Montessori teacher education and study centre based in Chennai, committed to authentic educator preparation.",
    url: "https://suprajamontessori.org/",
  },
  {
    name: "Montessori Research and Training Trust, Hyderabad",
    location: "Hyderabad, Telangana",
    logo: mrttLogo,
    description:
      "Foundational Montessori training and research trust in Hyderabad conducting educator courses and workshops.",
    url: "https://montessorihyderabad.org/about-mtrt/",
  },
  {
    name: "Medha Montessori Training Institute, Hyderabad",
    location: "Hyderabad, Telangana",
    logo: medhaLogo,
    description:
      "Montessori training centre located in Hyderabad providing diploma and certificate courses for Montessori educators.",
    url: "https://www.medhamontessori.com/",
  },
  {
    name: "Vivek High Training Institute, Chandigarh",
    location: "Chandigarh",
    logo: vhmiLogo,
    description:
      "Montessori educator training institute established under Vivek High School in Chandigarh.",
    email: "vhmi@vivekhighschool.edu.in",
    additionalReference: {
      label: "Institute Web Portal",
      url: "https://www.vhmi.in/",
    },
  },
  {
    name: "Jain Futuristic Academy – Montessori Teacher Training Centre, Kolkata",
    location: "Kolkata, West Bengal",
    logo: jfaLogo,
    description:
      "Teacher training centre operating under Jain Futuristic Academy in Kolkata, preparing educators in authentic Montessori pedagogy.",
    url: "https://mttc.jainfuturisticacademy.com/",
  },
];

function AffiliationsPage() {
  return (
    <PageShell>
      <div className="space-y-10 sm:space-y-12 lg:space-y-14 max-w-[1100px]">
        {/* PAGE HEADER */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f6edd8] px-3.5 py-1 text-xs sm:text-sm font-semibold text-[#636B2F] border border-[#d4b56a]/60">
            <span className="inline-block h-2 w-2 rounded-full bg-[#b3943c]" />
            IMF Flagship School
          </div>
          <h1 className="mt-3 font-body text-[#636B2F] text-[30px] sm:text-[40px] lg:text-[46px] font-bold leading-tight">
            Affiliations &amp; Montessori Training Centres
          </h1>
          <p className="mt-4 font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
            As an Indian Montessori Foundation (IMF) Flagship School, NIDO Montessori Preschool is
            deeply committed to upholding authentic Montessori principles. In alignment with the
            guidance of the Indian Montessori Foundation, we are pleased to list the Indian
            Montessori Foundation and the Montessori training centres across India.
          </p>
        </div>

        {/* FEATURED: INDIAN MONTESSORI FOUNDATION */}
        <section aria-label="Indian Montessori Foundation">
          <div className="rounded-2xl bg-[#faf6ec] p-6 sm:p-8 border border-[#d4b56a]/50 shadow-[0_4px_16px_oklch(0.4_0.04_80/0.08)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex h-20 sm:h-24 w-40 sm:w-48 shrink-0 items-center justify-center rounded-xl bg-white p-3 border border-[#d4b56a]/40 shadow-xs">
                  <img
                    src={imfOrganisation.logo}
                    alt="Indian Montessori Foundation official logo"
                    width={180}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block font-display text-xs font-bold uppercase tracking-[0.14em] text-[#b3943c]">
                    National Foundation
                  </span>
                  <h2 className="mt-1 font-serif text-[22px] sm:text-[28px] font-bold text-[#2a2a2a] leading-tight">
                    {imfOrganisation.name}
                  </h2>
                </div>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-[#ede3c7] px-3.5 py-1 font-serif text-xs font-semibold text-[#636B2F]">
                {imfOrganisation.location}
              </span>
            </div>

            <p className="mt-5 font-serif text-[15px] sm:text-[17px] leading-relaxed text-[#555]">
              {imfOrganisation.description}
            </p>

            <div className="mt-6 pt-5 border-t border-[#d4b56a]/30 flex flex-wrap items-center justify-between gap-4">
              <span className="font-serif text-xs sm:text-sm text-[#6b6448]">
                Official Website: <strong className="text-[#333]">www.montessori-india.org</strong>
              </span>
              <a
                href={imfOrganisation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#b3943c] px-5 py-2 font-display text-sm font-bold text-[#f6edd8] shadow-xs transition-transform hover:scale-[1.02] hover:bg-[#9a7b2e] active:scale-98"
              >
                Visit Website ↗
              </a>
            </div>
          </div>
        </section>

        {/* DIRECTORY SECTION */}
        <section aria-label="Montessori Training Centres in India">
          <div className="border-b border-[#d4b56a]/40 pb-3">
            <h2 className="font-body text-[#636B2F] text-[24px] sm:text-[30px] font-bold leading-tight">
              Montessori Training Centres and Organisations listed by the Indian Montessori
              Foundation
            </h2>
            <p className="mt-2 font-serif text-[15px] sm:text-[17px] leading-relaxed text-[#666]">
              A directory of Montessori teacher training institutions across India for educators,
              parents, and researchers seeking credentialed Montessori programmes.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {trainingCentres.map((centre) => (
              <article
                key={centre.name}
                className="flex flex-col justify-between rounded-2xl bg-[#faf6ec] p-5 sm:p-6 border border-[#e8dcc2] shadow-xs transition-transform duration-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-16 w-36 sm:w-40 shrink-0 items-center justify-center rounded-xl bg-white p-2.5 border border-[#e8dcc2] shadow-xs">
                      <img
                        src={centre.logo}
                        alt={`${centre.name} logo`}
                        width={160}
                        height={64}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="rounded-full bg-[#ede3c7] px-3 py-0.5 font-serif text-xs font-semibold text-[#636B2F] shrink-0">
                      {centre.location}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-[19px] sm:text-[21px] font-bold text-[#2a2a2a] leading-snug">
                    {centre.name}
                  </h3>

                  <p className="mt-3 font-serif text-[14px] sm:text-[15px] leading-relaxed text-[#555]">
                    {centre.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#e8dcc2]/70 space-y-3">
                  {centre.url && (
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-[#6b6448] truncate max-w-[180px] sm:max-w-[220px]">
                        {centre.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                      <a
                        href={centre.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[38px] items-center justify-center rounded-xl bg-[#636B2F] px-4 py-1.5 font-display text-xs sm:text-sm font-bold text-white transition-colors hover:bg-[#525926] active:scale-98 shrink-0"
                      >
                        Visit Website ↗
                      </a>
                    </div>
                  )}

                  {centre.email && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-[#6b6448] truncate max-w-[180px] sm:max-w-[220px]">
                          {centre.email}
                        </span>
                        <a
                          href={`mailto:${centre.email}`}
                          className="inline-flex min-h-[38px] items-center justify-center rounded-xl bg-[#636B2F] px-4 py-1.5 font-display text-xs sm:text-sm font-bold text-white transition-colors hover:bg-[#525926] active:scale-98 shrink-0"
                        >
                          Email Institute ✉
                        </a>
                      </div>

                      {centre.additionalReference && (
                        <p className="font-serif text-xs text-[#6b6448]">
                          Additional reference:{" "}
                          <a
                            href={centre.additionalReference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#b3943c] underline hover:text-[#9a7b2e]"
                          >
                            {centre.additionalReference.label} ({centre.additionalReference.url}) ↗
                          </a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
