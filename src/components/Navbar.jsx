import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname.startsWith('/events')) {
        setActiveId('events')
      } else if (location.pathname.startsWith('/achievements')) {
        setActiveId('achievements')
      } else {
        setActiveId('home')
      }
      return undefined
    }

    // Scroll spy to highlight the active section in the navbar
    const handleScroll = () => {
      const header = document.querySelector('header')
      const offset = (header?.offsetHeight ?? 0) + 12
      let current = 'home'

      navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section && window.scrollY + offset >= section.offsetTop) {
          current = item.id
        }
      })

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleNavClick = (id) => {
    setIsOpen(false)
    // Wait for the mobile menu to collapse so the scroll offset is correct.
    const delay = window.innerWidth < 768 ? 320 : 0
    setTimeout(() => {
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

      onNavigate?.(id)
    }, delay)
  }

  const isHome = activeId === 'home'
  const headerClasses = isHome
    ? 'fixed top-0 z-50 w-full border-b border-brl-800 bg-brl-900/95 text-white'
    : 'fixed top-0 z-50 w-full border-b border-white/30 bg-white/70 text-slate-900 backdrop-blur'

  return (
    <header className={headerClasses}>
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="min-w-0 text-left"
        >
          <div className={`text-base font-semibold leading-tight sm:text-xl ${isHome ? 'text-white' : 'text-brl-800'}`}>
            BRL High School
          </div>
          <div
            className={`max-w-[14rem] text-[10px] uppercase tracking-[0.16em] sm:max-w-none sm:text-xs sm:tracking-[0.2em] ${
              isHome ? 'text-brl-100' : 'text-brl-500'
            }`}
          >
            Managed by Nar Kedvani Mandal
          </div>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition ${
                activeId === item.id
                  ? isHome
                    ? 'text-white'
                    : 'text-brl-700'
                  : isHome
                    ? 'text-brl-100 hover:text-white'
                    : 'text-slate-600 hover:text-brl-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border p-2 shadow-sm transition md:hidden ${
            isHome
              ? 'border-brl-700 bg-brl-800/60 text-white hover:border-brl-500'
              : 'border-brl-100 bg-white/80 text-brl-700 hover:border-brl-200'
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`md:hidden ${
          isOpen ? 'max-h-64 border-t border-brl-100' : 'max-h-0'
        } overflow-hidden ${
          isHome ? 'bg-brl-900/95' : 'bg-white/90 backdrop-blur'
        } transition-all duration-300`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`rounded-xl px-2 py-1 text-left text-sm font-medium transition ${
                activeId === item.id
                  ? isHome
                    ? 'text-white'
                    : 'text-brl-700'
                  : isHome
                    ? 'text-brl-100 hover:text-white'
                    : 'text-slate-600 hover:text-brl-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
