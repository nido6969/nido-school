import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — NIDO Montessori Preschool, Bowrampet Hyderabad" },
      {
        name: "description",
        content:
          "Call 8712034644 or 9618853888, email info@nidomontessori.in, or visit NIDO Montessori Preschool in Bowrampet, Telangana.",
      },
      { property: "og:title", content: "Contact Us — NIDO Montessori Preschool" },
      { property: "og:description", content: "Schedule a visit to our Bowrampet campus." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    childAge: "",
    inquiryType: "General Question",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hello NIDO Montessori!%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Child Age:* ${encodeURIComponent(formData.childAge)}%0A*Inquiry:* ${encodeURIComponent(formData.inquiryType)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/919618853888?text=${whatsappMsg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[48px]">Contact Us</h1>

      <p className="mt-6 max-w-[1000px] font-body text-[19px] leading-[1.9] text-foreground/90">
        We would love to hear from you! Whether you have questions about our programs, the
        Montessori Method, or wish to schedule a visit, our team at NIDO is here to assist you.
      </p>

      <div className="mt-10 grid gap-10 xl:grid-cols-2">
        {/* Contact Form */}
        <div className="nido-card rounded-3xl border-2 border-dashed border-[#e6d8c3] bg-[#f8f3e9]/95 p-8 shadow-sm">
          <h2 className="font-body text-[24px] font-bold text-olive">Send Us a Message</h2>
          <p className="mt-2 font-body text-[16px] text-foreground/80">
            Please fill out the form below, and we will get back to you ASAP (Ideally within a day)
          </p>

          {submitted ? (
            <div className="mt-6 rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="font-body text-[20px] font-bold text-olive">Thank you for reaching out!</p>
              <p className="mt-2 text-[17px] text-foreground/80">
                Your message has been initiated. We will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="fullName" className="block font-body text-[16px] font-bold text-foreground">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-[#d6c7b2] bg-white px-4 py-3 font-body text-[17px] focus:outline-none focus:ring-2 focus:ring-olive"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-body text-[16px] font-bold text-foreground">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-[#d6c7b2] bg-white px-4 py-3 font-body text-[17px] focus:outline-none focus:ring-2 focus:ring-olive"
                  placeholder="name@example.com"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block font-body text-[16px] font-bold text-foreground">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-[#d6c7b2] bg-white px-4 py-3 font-body text-[17px] focus:outline-none focus:ring-2 focus:ring-olive"
                    placeholder="Mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="childAge" className="block font-body text-[16px] font-bold text-foreground">
                    Child's Age (Optional)
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-[#d6c7b2] bg-white px-4 py-3 font-body text-[17px] focus:outline-none focus:ring-2 focus:ring-olive"
                    placeholder="e.g. 2 years"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block font-body text-[16px] font-bold text-foreground">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-[#d6c7b2] bg-white px-4 py-3 font-body text-[17px] focus:outline-none focus:ring-2 focus:ring-olive"
                >
                  <option value="General Question">General Question</option>
                  <option value="Tour Request">Tour Request</option>
                  <option value="Admissions Info">Admissions Info</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-[16px] font-bold text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-[#d6c7b2] bg-white px-4 py-3 font-body text-[17px] focus:outline-none focus:ring-2 focus:ring-olive"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-full bg-olive px-8 py-3.5 font-body text-[19px] font-bold text-white shadow-md transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Address & Map */}
        <div className="flex flex-col gap-6">
          <div className="nido-card rounded-3xl border-2 border-dashed border-[#e6d8c3] bg-[#f8f3e9]/95 p-8 shadow-sm">
            <h2 className="font-display text-[26px] font-bold text-olive">NIDO – A Montessori Preschool</h2>
            <address className="mt-4 not-italic font-body text-[19px] leading-[1.8] text-foreground/90">
              Plot No. 405, Block no. 19,<br />
              Lahari Green Park Road,<br />
              Bowrampet, Telangana - 500043
            </address>

            <div className="mt-6 space-y-2 font-body text-[19px] text-foreground/90">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+918712034644" className="hover:text-olive">
                  8712034644
                </a>
                ,{" "}
                <a href="tel:+919618853888" className="hover:text-olive">
                  9618853888
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@nidomontessori.in" className="hover:text-olive">
                  info@nidomontessori.in
                </a>
              </p>
              <p>
                <strong>Office Hours:</strong> Monday – Saturday: (8:30 AM – 3:00 PM)
              </p>
            </div>
          </div>

          <iframe
            title="NIDO Montessori Preschool Location Map"
            src="https://www.google.com/maps?q=Bowrampet,Hyderabad&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="nido-card h-[320px] w-full rounded-3xl border-0 shadow-md"
          />
        </div>
      </div>
    </PageShell>
  );
}
