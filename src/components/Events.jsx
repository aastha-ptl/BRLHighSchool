import { Link } from 'react-router-dom'
import eventsData from '../data/eventsData.js'

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
      className="bg-blue-50 pb-16 pt-8 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        {/* Static events list driven by eventsData.js */}
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brl-500">
            Events
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Discover what is happening at BRL High School.
          </h2>
          <p className="text-base text-slate-600">
            Join our upcoming events to connect with students, faculty, and the
            broader school community.
          </p>
        </div>

        

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleEvents.map((event) => (
            <div
              key={event.slug}
              className="group relative overflow-hidden rounded-3xl border border-brl-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={event.coverImage}
                alt={event.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6" id={event.slug} style={{ scrollMarginTop: 'var(--nav-height)' }}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-brl-600">
                  {event.date}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {event.shortDescription}
                </p>
                <Link
                  to={`/events/${event.slug}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-brl-100 bg-brl-50 px-4 py-2 text-sm font-semibold text-brl-700 transition group-hover:border-brl-200 group-hover:bg-brl-100"
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
