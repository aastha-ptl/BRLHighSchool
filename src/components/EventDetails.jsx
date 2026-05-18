import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import eventsData from '../data/eventsData.js'
import OptimizedImage from './OptimizedImage'

function EventDetails() {
  const { slug } = useParams()
  const event = eventsData.find((item) => item.slug === slug)
  const gallery = useMemo(() => {
    if (!event) return []
    const images = [event.coverImage, ...(event.images || [])]
    return images.filter(Boolean).slice(0, 4)
  }, [event])
  const [activeIndex, setActiveIndex] = useState(0)

  if (!event) {
    return (
      <section className="bg-white pb-16 pt-28">
        <div className="mx-auto w-full max-w-4xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brl-600">
            Event Not Found
          </p>
          <h1 className="brl-heading-balance mt-4 text-3xl font-semibold text-slate-900">
            This event does not exist.
          </h1>
          <Link
            to="/events"
            className="mt-6 inline-flex rounded-full bg-brl-700 px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Events
          </Link>
        </div>
      </section>
    )
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  return (
    <section className="bg-white pb-12 pt-24 sm:pb-16 sm:pt-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brl-600 sm:text-xs sm:tracking-[0.3em]">
              Event Details
            </p>
            <h1 className="brl-heading-balance mt-2 text-2xl font-semibold text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
              {event.title}
            </h1>
            <p className="mt-2 text-sm text-brl-600">{event.date}</p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center justify-center rounded-full border border-brl-200 px-4 py-2 text-sm font-semibold text-brl-700 transition hover:bg-brl-50 sm:self-start"
          >
            Back to Events
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <div>
            {/* Compact carousel so images are easy to browse without taking too much space. */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
              <div
                className="flex touch-pan-y transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {gallery.map((src, imageIndex) => (
                  <OptimizedImage
                    key={src}
                    src={src}
                    alt={event.title}
                    width={1200}
                    height={800}
                    priority={imageIndex === 0}
                    loading={imageIndex === 0 ? 'eager' : 'lazy'}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="aspect-[4/3] w-full flex-shrink-0 object-cover sm:aspect-[16/10] lg:aspect-[4/3]"
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brl-700 transition hover:border-brl-200 hover:bg-brl-50"
                disabled={gallery.length <= 1}
              >
                Prev
              </button>
              <div className="flex items-center gap-2">
                {gallery.map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeIndex === index ? 'bg-brl-700' : 'bg-brl-200'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brl-700 transition hover:border-brl-200 hover:bg-brl-50"
                disabled={gallery.length <= 1}
              >
                Next
              </button>
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {gallery.map((src, index) => (
                <button
                  key={`thumb-${src}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 overflow-hidden rounded-2xl border ${
                    activeIndex === index
                      ? 'border-brl-400'
                      : 'border-slate-200'
                  }`}
                >
                  <OptimizedImage
                    src={src}
                    alt={`${event.title} thumbnail ${index + 1}`}
                    width={280}
                    height={180}
                    sizes="112px"
                    className="h-20 w-28 object-cover sm:h-24 sm:w-32"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="brl-justify rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
            <p className="brl-copy text-sm leading-relaxed text-slate-700 sm:text-base">
              {event.fullDescription}
            </p>
            {event.upcoming ? (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brl-600/10 px-3 py-1 text-xs font-semibold text-brl-700">
                Upcoming event
              </div>
            ) : (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                Completed event
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
