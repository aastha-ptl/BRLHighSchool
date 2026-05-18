import { useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import Achievements from './components/Achievements.jsx'
import EventDetails from './components/EventDetails.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function AppLayout({ children, onNavigate }) {
  return (
    <div className="overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar onNavigate={onNavigate} />
      {children}
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

function HomePage({ onNavigate, onAdmissionClick }) {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const eventsRef = useRef(null)
  const achievementsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <Home
        sectionRef={homeRef}
        onCtaClick={() => onNavigate('events')}
        onMilestoneClick={() => onNavigate('achievements')}
        onAdmissionClick={onAdmissionClick}
      />
      <About sectionRef={aboutRef} />
      <Events sectionRef={eventsRef} limit={3} showAllLink />
      <Achievements sectionRef={achievementsRef} limit={3} showAllLink />
      <Contact sectionRef={contactRef} />
    </>
  )
}

function EventsPage() {
  return <Events standalone />
}

function AchievementsPage() {
  return <Achievements standalone />
}

function AppRoutes() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showAdmissionModal, setShowAdmissionModal] = useState(false)
  const hasHandledInitialHashRef = useRef(false)

  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) return undefined

    const updateNavHeight = () => {
      document.documentElement.style.setProperty(
        '--nav-height',
        `${header.offsetHeight}px`
      )
    }

    updateNavHeight()
    const observer = new ResizeObserver(updateNavHeight)
    observer.observe(header)
    window.addEventListener('resize', updateNavHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateNavHeight)
    }
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      hasHandledInitialHashRef.current = true
      return
    }

    if (location.hash) {
      if (!hasHandledInitialHashRef.current) {
        hasHandledInitialHashRef.current = true
        window.history.replaceState(null, '', '/')
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }

      const targetId = location.hash.replace('#', '')
      const target = document.getElementById(targetId)
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
      }
      return
    }

    hasHandledInitialHashRef.current = true
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname])

  const handleOpenAdmissionModal = () => {
    setShowAdmissionModal(true)
  }

  const handleCloseAdmissionModal = () => {
    setShowAdmissionModal(false)
  }

  const handleNavigate = (id) => {
    if (location.pathname !== '/') {
      if (id === 'events') {
        navigate('/events')
        return
      }

      if (id === 'achievements') {
        navigate('/achievements')
        return
      }

      navigate(`/#${id}`)
      return
    }

    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {showAdmissionModal && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/75 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-6">
          <div className="relative w-full max-w-[92vw] overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff] shadow-[0_24px_60px_rgba(15,23,42,0.32)] sm:max-w-2xl md:max-w-3xl lg:max-w-[760px]">
            <button
              type="button"
              onClick={handleCloseAdmissionModal}
              aria-label="Close modal"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-xl font-semibold text-white shadow-lg transition hover:bg-slate-900 sm:right-4 sm:top-4"
            >
              ×
            </button>
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between bg-brl-900 p-5 text-white sm:p-6 lg:p-7">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brl-100 sm:text-xs">
                    Admissions Open 2026-27
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                    Admission Process
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-brl-100/90">
                    Keep these documents ready before visiting the school for admission.
                    We have listed the required items below for a smooth process.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">Helpful note</p>
                  <p className="mt-1 text-sm leading-6 text-brl-100/90">
                    Please bring original documents along with photocopies wherever needed.
                  </p>
                </div>
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6 lg:p-7">
                <div className="inline-flex rounded-full bg-brl-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brl-600 sm:text-xs">
                  Required Documents for Admission
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    'Mark Sheet - from the previous class',
                    'Leaving Certificate (LC)',
                    "Aadhar Card Xerox - photocopy of the student's Aadhar card",
                    'Income Certificate Xerox - photocopy of the family income certificate',
                    "Bank Passbook Xerox - photocopy of the first page of the student's or parent's bank passbook",
                    'Passport Size Photograph - recent color photo',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-brl-200 hover:shadow-md"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brl-700 text-xs font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-slate-700 sm:text-[15px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <AppLayout onNavigate={handleNavigate}>
              <HomePage
                onNavigate={handleNavigate}
                onAdmissionClick={handleOpenAdmissionModal}
              />
            </AppLayout>
          }
        />
        <Route
          path="/events"
          element={
            <AppLayout onNavigate={handleNavigate}>
              <EventsPage />
            </AppLayout>
          }
        />
        <Route
          path="/achievements"
          element={
            <AppLayout onNavigate={handleNavigate}>
              <AchievementsPage />
            </AppLayout>
          }
        />
        <Route
          path="/events/:slug"
          element={
            <AppLayout onNavigate={handleNavigate}>
              <EventDetails />
            </AppLayout>
          }
        />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
