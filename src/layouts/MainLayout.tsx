import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ErrorFallback } from '@/components/ErrorFallback'

export function MainLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={(error, info) => console.error('ErrorBoundary capturou:', error, info)}
          resetKeys={[location.pathname]}
        >
          <Suspense
            fallback={<p className="py-20 text-center text-sm text-neutral-500">Carregando página...</p>}
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  )
}
