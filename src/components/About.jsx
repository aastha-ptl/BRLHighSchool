const highlights = [
    {
        title: 'Mission',
        text: 'To provide quality secondary and higher secondary education through experienced teachers, modern learning facilities, and value-based teaching that prepares students for higher education, professional success, and responsible citizenship.',
    },
    {
        title: 'Vision',
        text: 'To be a leading government educational institution that nurtures disciplined, confident, and capable learners, enabling them to succeed in diverse fields in India and abroad while remaining grounded in values and social responsibility.',
    },
    {
        title: 'Core Values',
        text: 'Integrity in learning, respect for individuals, discipline in action, inclusivity in education, and continuous growth through knowledge, culture, sports, and service.',
    },
]


function About({ sectionRef }) {
    return (
        <section
            id="about"
            ref={sectionRef}
            style={{ scrollMarginTop: 'var(--nav-height)' }}
            className="bg-[#f1f5f9] py-12 sm:py-20 lg:py-28"
        >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 lg:px-8">

                {/* ===== Header ===== */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brl-700 sm:text-xs">
                        About Our School
                    </p>

                    <h2 className="brl-heading-balance mt-3 text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl lg:text-4xl">
                        A legacy of quality education since 1906
                    </h2>

                    <p className="brl-copy mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        A government institution rooted in discipline, academic excellence,
                        and lifelong values.
                    </p>
                </div>

                {/* ===== Main Content ===== */}
                <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-12">

                    {/* Left Text */}
                    <div className="brl-justify space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base lg:col-span-7">
                        <p className="brl-copy">
                            Established in 1906, BRL Secondary & Higher Secondary School is one
                            of the region’s oldest government educational institutions,
                            committed to strong academics, disciplined learning, and holistic
                            development.
                        </p>

                        <p className="brl-copy">
                            The campus is surrounded by greenery and a natural pond, providing
                            a calm environment that supports focused learning. Teaching is
                            delivered by experienced faculty using smart classrooms,
                            laboratories, and modern educational tools.
                        </p>

                        <p className="brl-copy">
                            The school actively promotes sports, cultural activities, national
                            festivals, and annual events. Each year, more than 250 students
                            successfully pass out, with alumni excelling in higher education,
                            professional careers, public service, and opportunities abroad.
                        </p>

                        <p className="brl-copy">
                            Established when no formal schools existed in nearby villages, the
                            institution played a vital role in rural education and today offers
                            facilities and academic standards comparable to well-established
                            urban institutions.
                        </p>
                    </div>

                    {/* Mission / Vision / Values */}
                    <div className="space-y-4 lg:col-span-5 lg:space-y-5">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl border-l-4 border-brl-700 bg-white px-4 py-4 text-left shadow-sm sm:px-5"
                            >
                                <h3 className="brl-heading-balance text-xs font-semibold uppercase tracking-wide text-slate-900 sm:text-sm">
                                    {item.title}
                                </h3>
                                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-slate-600">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ===== Divider ===== */}
                <div className="my-10 h-px w-full bg-slate-200 sm:my-14 lg:my-16" />

                {/* ===== Departments ===== */}
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brl-700 sm:text-xs">
                        Academic Structure
                    </p>

                    <h3 className="brl-heading-balance mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                        Secondary and Higher Secondary Education
                    </h3>

                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:gap-6">

                        {/* Secondary */}
                        {/* Secondary */}
                                                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:shadow-md">
                            {/* Header band */}
                            <div className="bg-brl-50 px-5 py-3">
                                <p className="text-sm font-semibold text-brl-800">
                                    Secondary Section
                                </p>
                            </div>

                            {/* Content */}
                            <div className="px-5 py-4">
                                <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-slate-600">
                                    Focused on strong academic foundations, discipline, and board
                                    examination readiness through experienced teachers, smart
                                    classrooms, regular assessments, and career guidance after
                                    Class 10.
                                </p>
                            </div>
                        </div>

                        {/* Higher Secondary */}
                                                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:shadow-md">
                            {/* Header band */}
                            <div className="bg-brl-50 px-5 py-3">
                                <p className="text-sm font-semibold text-brl-800">
                                    Higher Secondary Section
                                </p>
                            </div>

                            {/* Content */}
                            <div className="px-5 py-4">
                                <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-slate-600">
                                    Structured streams designed for higher education and professional
                                    pathways.
                                </p>

                                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                                    <li><strong>Science (1982):</strong> Physics, Chemistry, Biology with laboratory learning.</li>
                                    <li><strong>Commerce (1978):</strong> Accountancy, Economics, Business Studies.</li>
                                    <li><strong>Arts (1978):</strong> Humanities and social sciences.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
