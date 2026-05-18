import { FaBookOpen, FaBullseye, FaEye, FaFlask, FaGem, FaGraduationCap } from 'react-icons/fa6'

const highlights = [
    {
        title: 'Mission',
        icon: FaBullseye,
        text: 'To provide quality secondary and higher secondary education through disciplined learning, experienced faculty, modern teaching methods, and value-based academic development.',
    },
    {
        title: 'Vision',
        icon: FaEye,
        text: 'To nurture confident, disciplined, and responsible learners prepared for higher education, professional success, and meaningful contributions to society.',
    },
    {
        title: 'Core Values',
        icon: FaGem,
        text: 'Integrity, discipline, respect, excellence, and continuous growth across academics, culture, sports, and community.',
    },
]

const academicStructure = [
    {
        title: 'Secondary Section',
        icon: FaBookOpen,
        text: 'Focused on strong academic foundations, discipline, and board examination readiness through experienced teachers, smart classrooms, regular assessments, and career guidance after Class 10.',
    },
    {
        title: 'Higher Secondary Section',
        icon: FaFlask,
        text: 'Structured streams designed for higher education and professional pathways, including Science, Commerce, and Arts with subject-focused learning and student support.',
    },
]

function About({ sectionRef }) {
    return (
        <section
            id="about"
            ref={sectionRef}
            style={{ scrollMarginTop: 'var(--nav-height)' }}
            className="bg-[#f1f5f9] py-12 sm:py-16 lg:py-20"
        >
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

                {/* Section title */}
                <div className="flex flex-col gap-4 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brl-500 sm:text-sm sm:tracking-[0.4em]">
                        About Us
                    </p>
                      <h2 className="brl-heading-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                        A legacy of quality education since 1906
                    </h2>
                    <p className="brl-copy text-sm leading-relaxed text-slate-600 sm:text-base">
                        A government institution rooted in discipline, academic excellence, and lifelong values.
                    </p>
                </div>

                {/* Top — Large About Card (same design as bottom cards) */}
                <div className="mt-6 w-full">
                        <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 pt-7 sm:p-8 sm:pt-9 shadow-[0_12px_35px_rgba(2,6,23,0.06)] transition-transform duration-300">
                            <div className="absolute left-0 top-0 h-[5px] w-full rounded-t-[2rem] bg-gradient-to-r from-brl-500 via-blue-500 to-indigo-500" />

                        {/* Card header: icon + label + main title */}
                        <div className="flex items-center gap-4">
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brl-50 text-brl-700 ring-1 ring-brl-100">
                                <FaGraduationCap className="h-6 w-6" />
                            </div>

                            <div>
                                <h3 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">Legacy & Learning</h3>
                            </div>
                        </div>

                        <div className="mt-5 text-left space-y-4 text-slate-600">
                            <p className="brl-copy text-[15px] leading-7 sm:text-base">
                                Established in 1906, BRL Secondary & Higher Secondary School has been committed to academic excellence and disciplined learning, creating generations of accomplished students.
                            </p>

                            <p className="brl-copy text-[15px] leading-7 sm:text-base">
                                Our experienced faculty and modern facilities support a rigorous yet caring environment that encourages intellectual growth and character development.
                            </p>

                            <p className="brl-copy text-[15px] leading-7 sm:text-base">
                                We emphasize holistic development through academics, sports, and cultural activities to prepare students for success and responsible citizenship.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom — Three Equal Cards */}
                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="-mx-5 -mt-5 mb-4 h-1 rounded-t-3xl bg-gradient-to-r from-brl-500 via-blue-500 to-indigo-500 sm:-mx-6 sm:-mt-6 sm:mb-5" />

                            <div className="flex items-start gap-4">
                                <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brl-50 text-brl-700 ring-1 ring-brl-100">
                                    <item.icon className="h-5 w-5" />
                                </div>

                                <h3 className="mt-1 text-left text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="brl-copy mt-3 flex-1 text-left text-[15px] leading-7 text-slate-600">
                                {item.text}
                            </p>

                            
                        </div>
                    ))}
                </div>

                {/* Academic Structure Section */}
                <div className="mt-14 sm:mt-16">
                    <div className="flex flex-col gap-4 text-center">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brl-500 sm:text-sm sm:tracking-[0.4em]">
                            Academic Structure
                        </p>
                         <h2 className="brl-heading-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                            Secondary and Higher Secondary Education
                        </h2>
                        <p className="brl-copy text-sm leading-relaxed text-slate-600 sm:text-base">
                            A balanced academic path designed to build strong foundations, subject expertise, and future readiness.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                        {academicStructure.map((item) => (
                            <div
                                key={item.title}
                                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="-mx-5 -mt-5 mb-4 h-1 rounded-t-3xl bg-gradient-to-r from-brl-500 via-blue-500 to-indigo-500 sm:-mx-6 sm:-mt-6 sm:mb-5" />

                                <div className="flex items-start gap-4">
                                    <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brl-50 text-brl-700 ring-1 ring-brl-100">
                                        <item.icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="mt-1 text-left text-lg font-semibold text-slate-900">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="brl-copy mt-3 flex-1 text-left text-[15px] leading-7 text-slate-600">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About