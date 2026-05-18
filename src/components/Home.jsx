import { useEffect, useState } from 'react'
import OptimizedImage from './OptimizedImage'
import brlFrontView from '../assets/images/events/carousel/BRLFrontView.webp'
import brlnatural from '../assets/images/events/carousel/BRLNature.webp'
import brlstaff from '../assets/images/events/carousel/staff.webp'

const images = [
    {
        src: brlFrontView,
        alt: 'BRL High School front view',
        width: 1200,
        height: 800,
        priority: true,
    },
    {
        src: brlnatural,
        alt: 'BRL High School campus entrance',
        width: 1200,
        height: 800,
    },
    {
        src: brlstaff,
        alt: 'BRL High School staff',
        width: 1200,
        height: 800,
    },
]

function Home({ sectionRef, onCtaClick, onMilestoneClick, onAdmissionClick }) {
    const [index, setIndex] = useState(0)

    const handleNext = () => setIndex((prev) => (prev + 1) % images.length)
    const handlePrev = () =>
        setIndex((prev) => (prev - 1 + images.length) % images.length)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id="home"
            ref={sectionRef}
            style={{ scrollMarginTop: 'var(--nav-height)' }}
            className="overflow-hidden bg-gradient-to-b from-[#eff6ff] via-[#e0f2fe] to-[#e0e7ff] shadow-[inset_0_1px_0_rgba(15,23,42,0.05)]"
        >
            <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-12 pt-24 sm:px-5 sm:pb-16 sm:pt-28 lg:px-8">
                <div className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-brl-100/60 blur-3xl sm:-left-20 sm:h-72 sm:w-72" />
                <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-brl-200/50 blur-3xl sm:-right-16 sm:h-80 sm:w-80" />

                <div className="relative grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

                    {/* ===== Text Section ===== */}
                    <div className="order-2 pt-1 text-center lg:order-1 lg:pt-6 lg:text-left">
                        <p className="py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-brl-600 sm:text-xs sm:tracking-[0.3em]">
                            Secondary & Higher Secondary School
                        </p>

                        <h1 className="brl-heading-balance mx-auto mt-4 max-w-xl text-2xl font-semibold leading-snug text-slate-900 sm:mt-6 sm:text-3xl md:text-4xl lg:mx-0 lg:text-5xl">
                            Empowering Young Minds Through Education
                        </h1>

                        <p className="brl-copy mx-auto mt-4 max-w-lg text-sm text-slate-600 sm:mt-6 md:text-base lg:mx-0">
                            An inspiring campus where quality teaching, smart learning, and
                            natural surroundings support student growth.
                        </p>

                        <div className="mt-8 space-y-4 sm:mt-10 lg:space-y-5">
                            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:max-w-xl lg:justify-start">
                                <button
                                    type="button"
                                    onClick={onCtaClick}
                                    className="w-full rounded-full bg-brl-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brl-200 transition hover:-translate-y-0.5 hover:bg-brl-800 sm:px-7"
                                >
                                    Explore Events
                                </button>

                                <button
                                    type="button"
                                    onClick={onMilestoneClick}
                                    className="w-full rounded-full border border-brl-200 bg-white px-6 py-3 text-sm font-semibold text-brl-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brl-300 hover:bg-brl-50 sm:px-7"
                                >
                                    See Our Milestone
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4 lg:max-w-xl">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brl-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />
                                    <span className="brl-copy">Admissions open for 2026-27</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={onAdmissionClick}
                                    className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:via-blue-600 hover:to-purple-600 shadow-none sm:w-auto sm:px-6"
                                >
                                    See Admission Process
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ===== Image Carousel ===== */}
                    <div className="order-1 relative mx-auto w-full max-w-full sm:max-w-[520px] lg:order-2 lg:max-w-none lg:pt-10">
                        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:rounded-[1.75rem]">

                            {/* Slides */}
                            <div
                                className="flex touch-pan-y select-none transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${index * 100}%)` }}
                            >
                                {images.map((image) => (
                                    <OptimizedImage
                                        key={image.src}
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        priority={image.priority}
                                        sizes="(min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw"
                                        className="aspect-[4/3] w-full flex-shrink-0 object-cover sm:aspect-[16/10] lg:aspect-[4/3]"
                                    />
                                ))}
                            </div>

                            {/* Left Arrow */}
                            <button
                                type="button"
                                onClick={handlePrev}
                                aria-label="Previous image"
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2.5 text-white transition hover:bg-black/35 sm:left-3 sm:p-3 sm:opacity-0 sm:group-hover:opacity-100 opacity-100"
                            >
                                ‹
                            </button>



                            {/* Right Arrow */}
                            <button
                                type="button"
                                onClick={handleNext}
                                aria-label="Next image"
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2.5 text-white transition hover:bg-black/35 sm:right-3 sm:p-3 sm:opacity-0 sm:group-hover:opacity-100 opacity-100"
                            >
                                ›
                            </button>


                            {/* Dots */}
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-4">
                                {images.map((_, dotIndex) => (
                                    <span
                                        key={`dot-${dotIndex}`}
                                        className={`h-2 w-2 rounded-full transition sm:h-2.5 sm:w-2.5 ${index === dotIndex ? 'bg-brl-700' : 'bg-brl-200'
                                            }`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
