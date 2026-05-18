import { Link } from 'react-router-dom'
import { useState } from 'react'
import achievementsData from '../data/achievementsData.js'
import OptimizedImage from './OptimizedImage'

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
      className="bg-white pb-12 pt-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brl-500 sm:text-sm sm:tracking-[0.4em]">
            Achievements
          </p>
          <h2 className="brl-heading-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
            Celebrating the milestones of BRL High School.
          </h2>
          <p className="brl-copy mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Highlights of academic, sports, and co-curricular excellence by our students.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-6">
          {visibleAchievements.map((achievement) => (
            <article
              key={achievement.slug}
              className="group brl-justify overflow-hidden rounded-3xl border border-brl-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <OptimizedImage
                src={achievement.image}
                alt={achievement.title}
                width={1200}
                height={800}
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] w-full cursor-pointer object-cover transition hover:opacity-90"
                onClick={() => setSelectedImage({ image: achievement.image, title: achievement.title })}
              />
              <div className="p-5 sm:p-6" id={achievement.slug} style={{ scrollMarginTop: 'var(--nav-height)' }}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-brl-600">
                  {achievement.date}
                </p>
                <p className="brl-copy mt-3 text-sm leading-relaxed text-slate-600">
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
            <OptimizedImage
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1400}
              height={933}
              className="max-h-[90vh] w-full object-contain"
              loading="eager"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Achievements
