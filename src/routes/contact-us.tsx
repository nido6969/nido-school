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
          "Call 9618853888 or 8712034644, email info@nidomontessori.in, or visit NIDO Montessori Preschool in Bowrampet, Telangana.",
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
  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[40px] sm:text-[50px] font-bold">
        CONTACT US
      </h1>

      <p className="mt-4 max-w-[1050px] font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
        We would love to hear from you! Whether you have questions about our programs, the Montessori Method, or wish to schedule a visit, our team at NIDO is here to assist you.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Form Container */}
        <div>
          <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#2a2a2a]">
            Send Us a Message:
          </h2>
          <p className="mt-2 font-serif text-[17px] text-[#444]">
            Please fill out the form below, and we will get back to you ASAP (Ideally within a day)
          </p>

          <div className="mt-6 rounded-[15px] bg-[#f7f2e8] p-6 sm:p-8 shadow-sm">
            <form
              id="contactForm"
              action="https://formsubmit.co/info@nidomontessori.in"
              method="POST"
              className="flex flex-col gap-4 font-serif text-[16px] text-[#333]"
            >
              <input type="hidden" name="_subject" value="New Inquiry from NIDO Montessori Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://nidomontessori.in/whatsapp-redirect.html" />

              <div>
                <label className="block font-bold mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="Full Name"
                  required
                  className="w-full rounded-[10px] border border-[#ccc] bg-white p-3 font-serif text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  className="w-full rounded-[10px] border border-[#ccc] bg-white p-3 font-serif text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Phone Number (Optional)</label>
                <input
                  type="text"
                  id="phone"
                  name="Phone"
                  className="w-full rounded-[10px] border border-[#ccc] bg-white p-3 font-serif text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Child's Age (Optional)</label>
                <input
                  type="text"
                  id="age"
                  name="Child Age"
                  className="w-full rounded-[10px] border border-[#ccc] bg-white p-3 font-serif text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Enquiry Type</label>
                <select
                  id="inquiry"
                  name="Inquiry Type"
                  className="w-full rounded-[10px] border border-[#ccc] bg-white p-3 font-serif text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                >
                  <option>General Question</option>
                  <option>Tour Request</option>
                  <option>Admissions Info</option>
                </select>
              </div>

              <div>
                <label className="block font-bold mb-1">Your Message *</label>
                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  required
                  className="w-full rounded-[10px] border border-[#ccc] bg-white p-3 font-serif text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c4935c]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-fit rounded-[10px] bg-[#c4935c] px-6 py-3 font-serif text-[18px] font-bold text-white shadow transition-transform hover:scale-105 hover:bg-[#b07e47]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details & Map */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#2a2a2a]">
              School Contact Details
            </h2>
            <div className="mt-4 font-serif text-[18px] sm:text-[19px] leading-[1.8] text-[#333]">
              <p>NIDO – A Montessori Preschool</p>
              <p>Plot No. 405, Block no. 19,</p>
              <p>Lahari Green Park Road,</p>
              <p>Bowrampet, Telangana - 500043</p>
              <p className="mt-4">
                <strong className="font-bold">Phone:</strong> 9618853888, 8712034644
              </p>
              <p>
                <a
                  href="mailto:info@nidomontessori.in"
                  className="text-[#333] font-bold underline hover:text-[#c4935c]"
                >
                  Email: info@nidomontessori.in
                </a>
              </p>
              <p>
                <strong className="font-bold">Office Hours:</strong> Monday - Saturday (8:30 AM - 3:00 PM)
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#2a2a2a]">
              Find Us on the Map
            </h2>
            <div className="mt-4 rounded-[15px] bg-[#f7f2e8] p-4 text-center shadow-sm">
              <a
                href="https://www.google.com/maps/place/17%C2%B033'11.5%22N+78%C2%B023'01.9%22E/@17.5536953,78.3826678,18z/data=!4m4!3m3!8m2!3d17.5531826!4d78.3838654"
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-[12px]"
              >
                <iframe
                  title="NIDO Montessori Location"
                  src="https://www.google.com/maps?q=17.5531826,78.3838654&z=16&output=embed"
                  width="100%"
                  height="300"
                  className="border-0 w-full h-[300px] rounded-[12px]"
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

