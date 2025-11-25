import React, { useState } from "react";

export default function Contact({
  bgImage = "/src/assets/heroimage.jpg",
  phone = "+91-XXXXXXXXXX",
  whatsapp = "+91-XXXXXXXXXX",
  email = "info@dravyamfarms.example",
}) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: No backend here — just simulate success
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <section className="relative w-full py-12 md:py-16">
      {/* background */}
      <div
        className="absolute inset-0 bg-center bg-cover -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(6,10,6,0.7), rgba(6,10,6,0.7)), url('${bgImage}')`,
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-6 md:mb-8">
          Book your Organic Farm — Contact & Price Plan
        </h2>

        <div className="max-w-6xl mx-auto bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* LEFT: Price / Payment Plan */}
            <div>
              <div className="text-white mb-4">
                <p className="font-semibold text-lg md:text-xl">Payment Schedule</p>
                <p className="text-sm md:text-base text-white/70 mt-1">Secure your unit with simple instalments</p>
              </div>

              <div className="mt-4">
                {/* responsive table: allow horizontal scroll on small screens and stack visually on extra small */}
                <div className="overflow-x-auto rounded-md">
                  <table className="w-full table-auto border-collapse text-white min-w-[480px] md:min-w-0">
                    <thead>
                      <tr>
                        <th className="border border-white/60 px-4 py-3 text-left bg-white/6">Particular</th>
                        <th className="border border-white/60 px-4 py-3 text-left bg-white/6">Amount</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="border border-white/30 px-4 py-4">On booking</td>
                        <td className="border border-white/30 px-4 py-4">25%</td>
                      </tr>

                      <tr>
                        <td className="border border-white/30 px-4 py-4">Within 90 days</td>
                        <td className="border border-white/30 px-4 py-4">25%</td>
                      </tr>

                      <tr>
                        <td className="border border-white/30 px-4 py-4">Rest on Possession / Registry</td>
                        <td className="border border-white/30 px-4 py-4">50%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 text-sm md:text-base text-white/70">
                <p>Limited units available. Reserve now to lock current prices.</p>
              </div>
            </div>

            {/* RIGHT: Contact Options + Form */}
            <div>
              <div className="bg-white/5 border border-white/8 rounded-xl p-4 md:p-6">
                <p className="text-white font-semibold mb-3 text-lg">Contact Options</p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg ring-1 ring-white/10 bg-white/6 text-white font-medium text-sm md:text-base"
                    aria-label="Call"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 7a2 2 0 012-2h3.6a1 1 0 01.9.55l1.2 2.4a1 1 0 01-.2 1.1L7.5 11a11 11 0 005.5 5.5l1.95-1.95a1 1 0 011.1-.2l2.4 1.2a1 1 0 01.55.9V20a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                    </svg>
                    <span className="truncate">{phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg ring-1 ring-white/10 bg-emerald-600/90 text-white font-medium text-sm md:text-base"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.5a8.5 8.5 0 10-3.7 6.8L21 21l-2.2-5.7A8.5 8.5 0 0021 12.5z" />
                    </svg>
                    <span className="truncate">Message on WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg ring-1 ring-white/10 bg-white/6 text-white font-medium text-sm md:text-base"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.4v7.2A2.4 2.4 0 005.4 18h13.2A2.4 2.4 0 0021 15.6V8.4M3 8.4L12 13l9-4.6" />
                    </svg>
                    <span className="truncate">{email}</span>
                  </a>
                </div>

                <div className="mt-4 border-t border-white/6 pt-4">
                  <p className="text-white font-semibold mb-3 text-lg">Send a quick message</p>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      aria-label="Your name"
                      className="px-3 py-2 rounded-md bg-white/6 border border-white/8 text-white placeholder-white/60 w-full"
                    />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone / WhatsApp"
                      required
                      aria-label="Phone or WhatsApp"
                      className="px-3 py-2 rounded-md bg-white/6 border border-white/8 text-white placeholder-white/60 w-full"
                    />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message (e.g., I want to book / more details)"
                      rows="4"
                      aria-label="Message"
                      className="px-3 py-2 rounded-md bg-white/6 border border-white/8 text-white placeholder-white/60 w-full resize-none"
                    />

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-4 py-3 rounded-md bg-amber-500 text-white font-semibold hover:opacity-95"
                      >
                        Send Message
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          // quick call-to-action: prefill WhatsApp with booking text
                          const txt = encodeURIComponent(
                            "Hello, I want details & booking for Dravyam Farms."
                          );
                          window.open(`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${txt}`, "_blank");
                        }}
                        className="w-full sm:w-auto px-4 py-3 rounded-md bg-emerald-600 text-white font-medium"
                      >
                        Quick WhatsApp
                      </button>
                    </div>

                    {sent && (
                      <div className="text-sm text-emerald-300">Message sent (simulated). We'll contact you soon.</div>
                    )}
                  </form>
                </div>
              </div>

              {/* small note */}
              <div className="mt-4 text-white/70 text-sm md:text-base">
                <p>
                  <strong>Office Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM
                </p>
                <p className="mt-2">Or call/WhatsApp anytime for urgent queries — we respond quick.</p>
              </div>
            </div>
          </div>

          {/* footer small */}
          <div className="mt-6 text-center text-sm text-white/60">© Dravyam Farms — All rights reserved.</div>
        </div>
      </div>
    </section>
  );
}
