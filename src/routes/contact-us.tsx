import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us – NIDO Montessori" },
      {
        name: "description",
        content:
          "Call 9618853888, 8712034644, email info@nidomontessori.in, or visit NIDO Montessori Preschool in Bowrampet, Telangana.",
      },
      { property: "og:title", content: "Contact Us – NIDO Montessori" },
      { property: "og:description", content: "Schedule a visit or send us a message." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("Full Name") || "").trim();
    const email = String(formData.get("Email") || "").trim();
    const phone = String(formData.get("Phone Number") || "").trim();
    const age = String(formData.get("Child's Age") || "").trim();
    const inquiry = String(formData.get("Inquiry Type") || "").trim();
    const message = String(formData.get("Your Message") || "").trim();

    const lines = [
      "Hello NIDO Montessori,",
      "",
      "I have submitted an inquiry via your website:",
      `• Name: ${fullName}`,
      `• Email: ${email}`,
      phone ? `• Phone: ${phone}` : null,
      age ? `• Child's Age: ${age}` : null,
      inquiry ? `• Inquiry Type: ${inquiry}` : null,
      "",
      "• Message:",
      message,
    ].filter((item) => item !== null);

    const text = lines.join("\n");
    const targetUrl = `https://wa.me/919618853888?text=${encodeURIComponent(text)}`;

    // Send backup copy to info@nidomontessori.in asynchronously
    fetch("https://formsubmit.co/ajax/info@nidomontessori.in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "Full Name": fullName,
        Email: email,
        "Phone Number": phone || "Not provided",
        "Child's Age": age || "Not provided",
        "Inquiry Type": inquiry,
        "Your Message": message,
        _subject: "New Inquiry from NIDO Montessori Website",
      }),
    }).catch(() => {});

    setWhatsappLink(targetUrl);
    setSubmitted(true);

    const isMobile =
      typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = targetUrl;
    } else {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[32px] sm:text-[42px] lg:text-[50px] font-bold">
        CONTACT US
      </h1>

      <p className="mt-3 sm:mt-4 max-w-[1050px] font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
        We would love to hear from you! Whether you have questions about our programs, the
        Montessori Method, or wish to schedule a visit, our team at NIDO is here to assist you.
      </p>

      <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-2">
        {/* Form Container */}
        <div>
          <h2 className="font-serif text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#2a2a2a]">
            Send Us a Message:
          </h2>
          <p className="mt-1.5 font-serif text-[15px] sm:text-[17px] text-[#444]">
            Please fill out the form below, and we will get back to you ASAP (Ideally within a day)
          </p>

          <div className="mt-5 rounded-2xl bg-[#f7f2e8] p-4 sm:p-6 lg:p-8 border border-[#e8dcc2] shadow-xs">
            {submitted ? (
              <div className="text-center py-4 space-y-4 font-serif">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#636B2F] text-white text-2xl font-bold shadow-xs">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2a2a2a]">
                  Thank You for Your Inquiry!
                </h3>
                <p className="text-base text-[#444] max-w-md mx-auto leading-relaxed">
                  Your message has been prepared for WhatsApp (<strong>+91 9618853888</strong>). If
                  WhatsApp did not open automatically, please click below to send:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 font-display text-base sm:text-lg font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-98 min-h-[48px]"
                  >
                    <span>Open in WhatsApp</span>
                    <span>↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setWhatsappLink("");
                    }}
                    className="flex w-full sm:w-fit items-center justify-center rounded-xl border border-[#ccc] bg-white px-5 py-3 font-serif text-base text-[#333] hover:bg-[#eee] transition-colors min-h-[48px]"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 font-serif text-base text-[#333]"
              >
                <div>
                  <label htmlFor="fullName" className="block font-bold mb-1.5 text-sm sm:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="Full Name"
                    required
                    placeholder="Your full name"
                    className="w-full h-12 rounded-xl border border-[#ccc] bg-white px-3.5 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-bold mb-1.5 text-sm sm:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    placeholder="name@example.com"
                    className="w-full h-12 rounded-xl border border-[#ccc] bg-white px-3.5 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-bold mb-1.5 text-sm sm:text-base">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="Phone Number"
                    placeholder="+91 87120 34644"
                    className="w-full h-12 rounded-xl border border-[#ccc] bg-white px-3.5 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block font-bold mb-1.5 text-sm sm:text-base">
                    Child's Age (Optional)
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="Child's Age"
                    placeholder="e.g. 2 years"
                    className="w-full h-12 rounded-xl border border-[#ccc] bg-white px-3.5 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block font-bold mb-1.5 text-sm sm:text-base">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    name="Inquiry Type"
                    className="w-full h-12 rounded-xl border border-[#ccc] bg-white px-3.5 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                  >
                    <option>General Question</option>
                    <option>Tour Request</option>
                    <option>Admissions Info</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-bold mb-1.5 text-sm sm:text-base">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="Your Message"
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-[#ccc] bg-white p-3.5 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-[#c4935c] px-8 py-3.5 font-serif text-lg font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-98 min-h-[48px]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Details & Map */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-serif text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#2a2a2a]">
              NIDO – A Montessori Preschool
            </h2>
            <div className="mt-4 rounded-2xl bg-[#f7f2e8] p-5 border border-[#e8dcc2] font-serif text-[16px] sm:text-[18px] leading-[1.7] text-[#333] space-y-2">
              <p className="font-bold text-lg text-olive">NIDO – A Montessori Preschool</p>
              <p>Plot No. 405, Block no. 19,</p>
              <p>Lahari Green Park Road,</p>
              <p>Bowrampet, Telangana -500043</p>
              <div className="pt-2 border-t border-[#e2d2b8] space-y-1">
                <p>
                  <strong className="font-bold">Phone:</strong>{" "}
                  <a href="tel:+919618853888" className="underline hover:text-[#c4935c]">
                    9618853888
                  </a>
                  {", "}
                  <a href="tel:+918712034644" className="underline hover:text-[#c4935c]">
                    8712034644
                  </a>
                </p>
                <p>
                  <strong className="font-bold">Email:</strong>{" "}
                  <a
                    href="mailto:info@nidomontessori.in"
                    className="font-bold underline hover:text-[#c4935c]"
                  >
                    info@nidomontessori.in
                  </a>
                </p>
                <p>
                  <strong className="font-bold">Office Hours:</strong> Monday - Saturday: (8:30 AM -
                  3:00 PM)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#2a2a2a]">
              Location Map
            </h2>
            <div className="mt-4 rounded-2xl bg-[#f7f2e8] p-3 text-center shadow-xs border border-[#e8dcc2]">
              <a
                href="https://www.google.com/maps/place/17%C2%B033'11.5%22N+78%C2%B023'01.9%22E/@17.5536953,78.3826678,18z/data=!4m4!3m3!8m2!3d17.5531826!4d78.3838654"
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-xl"
              >
                <iframe
                  title="NIDO Montessori Location"
                  src="https://www.google.com/maps?q=17.5531826,78.3838654&z=16&output=embed"
                  width="100%"
                  height="260"
                  className="border-0 w-full h-[260px] sm:h-[300px] rounded-xl"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
