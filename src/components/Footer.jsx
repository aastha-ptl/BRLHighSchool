function Footer({ onNavigate }) {
  return (
    <footer className="bg-brl-900 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 lg:px-8">

        <div className="grid gap-6 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">

          {/* School Info */}
          <div>
            <p className="text-base font-semibold text-white">
              BRL High School
            </p>
            <p className="mt-0.5 text-sm text-brl-200">
              Secondary & Higher Secondary School
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Committed to quality education, strong values, and holistic
              development in a peaceful learning environment.
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
              Follow Us
            </p>
            <div className="flex justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/search/top?q=b.r.l%20highschool%2Cnar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.2 9.3V7.5c0-.5.4-.9.9-.9h1.6V4h-2.2c-2.1 0-3.4 1.4-3.4 3.4v1.9H8v2.7h2.1V20h3V12h2.2l.4-2.7h-2.6z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-6 border-t border-brl-800 pt-4 text-center text-xs leading-relaxed text-slate-400">
          <p>© 2026 BRL High School. All rights reserved.</p>
          <p className="mt-0.5">
            Designed & Developed by{' '}
            <span className="font-medium text-white">
              Aastha Patel
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
