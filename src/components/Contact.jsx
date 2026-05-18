function Contact({ sectionRef }) {
  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ scrollMarginTop: 'var(--nav-height)' }}
      className="bg-white pb-12 pt-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 lg:px-8">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brl-500 sm:text-sm sm:tracking-[0.4em]">
            Contact Us
          </p>
          <h2 className="brl-heading-balance mt-3 text-2xl font-semibold text-slate-900 sm:mt-4 sm:text-3xl lg:text-4xl">
            School Contact Details
          </h2>
          <p className="brl-copy mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Feel free to contact us during school working hours for any
            academic or administrative inquiries.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-2 lg:gap-8">
          <div className="brl-justify rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="space-y-5 sm:space-y-6">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brl-600">
                  Email
                </p>
                  <a
                  href="mailto:brlhighschoolnar@gmail.com"
                  className="brl-copy mt-2 block text-base font-medium text-slate-700 transition hover:text-brl-700"
                >
                  brlhighschoolnar@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brl-600">
                  Address
                </p>
                <p className="brl-copy mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  BRL High School Campus
                  <br />
                  Opposite Bank of Baroda, Nar
                  <br />
                  Taluka: Petlad | District: Anand | Gujarat - 388150
                </p>
                {/* Added office hours to reinforce availability and trust. */}
                <div className="brl-justify mt-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-700">
                    Office Hours:
                  </p>
                  <p>Monday to Friday - 10:00 AM to 4:00 PM</p>
                  <p>Saturday - 08:00 AM to 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <iframe
              title="BRL High School location map"
              src="https://www.google.com/maps?q=BRL%20High%20School&output=embed"
              className="h-[240px] w-full rounded-2xl border-0 sm:h-[320px] lg:h-[360px]"
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
