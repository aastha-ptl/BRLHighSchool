import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import eventsData from '../data/eventsData.js'

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
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">
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
    <section className="bg-white pb-16 pt-28">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brl-600">
              Event Details
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {event.title}
            </h1>
            <p className="mt-2 text-sm text-brl-600">{event.date}</p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center rounded-full border border-brl-200 px-4 py-2 text-sm font-semibold text-brl-700 transition hover:bg-brl-50"
          >
            Back to Events
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            {/* Compact carousel so images are easy to browse without taking too much space. */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={event.title}
                    className="h-64 w-full flex-shrink-0 object-cover sm:h-72 lg:h-80"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
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

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
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
                  <img
                    src={src}
                    alt={`${event.title} thumbnail ${index + 1}`}
                    className="h-20 w-28 object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-base leading-relaxed text-slate-700">
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
