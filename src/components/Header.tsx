import { Link, NavLink } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition ${
    isActive ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-stone-200'
  }`

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          Receit<span className="text-orange-600">ário</span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            <BookOpen size={15} /> Catálogo
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
