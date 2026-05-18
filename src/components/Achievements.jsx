import { Link } from 'react-router-dom'
import { useState } from 'react'
import achievementsData from '../data/achievementsData.js'

function Achievements({ sectionRef, limit, showAllLink = false, standalone = false }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const visibleAchievements = limit ? achievementsData.slice(0, limit) : achievementsData
  const sectionStyle = standalone
    ? {
        scrollMarginTop: 'var(--nav-height)',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
      }
    : { scrollMarginTop: 'var(--nav-height)' }

  return (
    <section
      id="achievements"
      ref={sectionRef}
      style={sectionStyle}
      className="bg-white pb-16 pt-8 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brl-500">
            Achievements
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Celebrating the milestones of BRL High School.
          </h2>
          <p className="text-base text-slate-600">
            Highlights of academic, sports, and co-curricular excellence by our students.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleAchievements.map((achievement) => (
            <article
              key={achievement.slug}
              className="group overflow-hidden rounded-3xl border border-brl-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="h-48 w-full cursor-pointer object-cover transition hover:opacity-90"
                onClick={() => setSelectedImage({ image: achievement.image, title: achievement.title })}
                loading="lazy"
              />
              <div className="p-6" id={achievement.slug} style={{ scrollMarginTop: 'var(--nav-height)' }}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-brl-600">
                  {achievement.date}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {achievement.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-8 flex justify-center">
            <Link
              to="/achievements"
              className="text-sm font-medium text-brl-700 underline underline-offset-4 transition hover:text-brl-800"
            >
              View all achievements
            </Link>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[101] flex items-center justify-center bg-slate-950/95 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-2xl font-semibold text-white shadow-lg transition hover:bg-slate-900"
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Achievements
