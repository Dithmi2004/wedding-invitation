import { useState } from 'react'
import { CalendarPlus, Menu, X } from 'lucide-react'
import { downloadCalendarInvite } from '../utils/calendar'

const navItems = [
  { href: '#story', label: 'Story' },
  { href: '#details', label: 'Details' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Location' },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-ivory/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8" aria-label="Main navigation">
        <a href="#hero" className="font-serif text-2xl text-olive focus-ring">
          P & P
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <button type="button" className="icon-text-button" onClick={downloadCalendarInvite}>
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Calendar
          </button>
        </div>
        <button
          type="button"
          className="focus-ring grid h-10 w-10 place-items-center text-olive md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-champagne/20 bg-ivory px-5 py-5 shadow-soft md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link py-1" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <button type="button" className="icon-text-button w-fit" onClick={downloadCalendarInvite}>
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Add to Calendar
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
