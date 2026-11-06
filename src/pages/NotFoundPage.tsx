import { Link } from 'react-router-dom'

// 404 Not Found Page (PRD Requirement P0.1)
// Exact required texts from PRD:
// - Heading: "Page not found"
// - Message: "The page you are looking for does not exist."
// - Link: "Go to catalog" -> "/"
export function NotFoundPage() {
  return (
    <section className="bg-white border border-stone-200 rounded-xl p-8 text-center max-w-lg mx-auto my-8 shadow-xs">
      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-2">
        404 Error
      </p>
      <h1 className="text-2xl font-bold text-stone-900 mb-2">Page not found</h1>
      <p className="text-stone-600 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-emerald-600"
      >
        Go to catalog
      </Link>
    </section>
  )
}
