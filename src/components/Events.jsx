import { Link } from 'react-router-dom'
import eventsData from '../data/eventsData.js'
import OptimizedImage from './OptimizedImage'

function Events({ sectionRef, limit, showAllLink = false, standalone = false }) {
  const visibleEvents = limit ? eventsData.slice(0, limit) : eventsData
  const sectionStyle = standalone
    ? {
        scrollMarginTop: 'var(--nav-height)',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
      }
    : { scrollMarginTop: 'var(--nav-height)' }

  return (
    <section
      id="events"
      ref={sectionRef}
      style={sectionStyle}
      className="bg-blue-50 pb-12 pt-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 lg:px-8">
        {/* Static events list driven by eventsData.js */}
        <div className="flex flex-col gap-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brl-500 sm:text-sm sm:tracking-[0.4em]">
            Events
          </p>
          <h2 className="brl-heading-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
            Discover what is happening at BRL High School.
          </h2>
          <p className="brl-copy mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Join our upcoming events to connect with students, faculty, and the
            broader school community.
          </p>
        </div>

        

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-6">
          {visibleEvents.map((event) => (
            <div
              key={event.slug}
              className="group relative overflow-hidden rounded-3xl border border-brl-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <OptimizedImage
                src={event.coverImage}
                alt={event.title}
                width={1200}
                height={800}
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5 sm:p-6" id={event.slug} style={{ scrollMarginTop: 'var(--nav-height)' }}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-brl-600">
                  {event.date}
                </p>
                <p className="brl-copy mt-3 text-sm leading-relaxed text-slate-600">
                  {event.shortDescription}
                </p>
                <Link
                  to={`/events/${event.slug}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-brl-100 bg-brl-50 px-4 py-2.5 text-sm font-semibold text-brl-700 transition group-hover:border-brl-200 group-hover:bg-brl-100"
                >
                  View Event
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-8 flex justify-center">
            <Link
              to="/events"
              className="text-sm font-medium text-brl-700 underline underline-offset-4 transition hover:text-brl-800"
            >
              View all events
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events
