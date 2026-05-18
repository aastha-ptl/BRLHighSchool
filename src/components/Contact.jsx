function Contact({ sectionRef }) {
  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ scrollMarginTop: 'var(--nav-height)' }}
      className="bg-white pb-16 pt-8 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brl-500">
            Contact Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {/* Updated heading for a formal, official tone. */}
            School Contact Details
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {/* Refined subtext to match the official messaging. */}
            Feel free to contact us during school working hours for any
            academic or administrative inquiries.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* Replace the placeholders below with official school contact details. */}
            <div className="space-y-6">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brl-600">
                  Email
                </p>
                <a
                  href="mailto:brlhighschoolnar@gmail.com"
                  className="mt-2 block text-base font-medium text-slate-700 transition hover:text-brl-700"
                >
                  brlhighschoolnar@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brl-600">
                  Address
                </p>
                <p className="mt-2 text-base text-slate-700">
                  BRL High School Campus
                  <br />
                  Opposite Bank of Baroda, Nar
                  <br />
                  Taluka: Petlad | District: Anand | Gujarat - 388150
                </p>
                {/* Added office hours to reinforce availability and trust. */}
                <div className="mt-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-700">
                    Office Hours:
                  </p>
                  <p>Monday to Friday - 10:00 AM to 4:00 PM</p>
                  <p>Saturday - 08:00 AM to 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            {/* Replace the map URL with the official school location. */}
            <iframe
              title="BRL High School location map"
              src="https://www.google.com/maps?q=BRL%20High%20School&output=embed"
              className="h-[320px] w-full rounded-2xl border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
