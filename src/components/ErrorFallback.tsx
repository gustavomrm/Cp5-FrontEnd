import { getErrorMessage, type FallbackProps } from 'react-error-boundary'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
      <p className="font-medium text-red-800">Algo quebrou nesta parte da página.</p>

      {import.meta.env.DEV && (
        <pre className="mt-2 whitespace-pre-wrap font-mono text-xs text-red-700">
          {getErrorMessage(error)}
        </pre>
      )}

      <button
        type="button"
        onClick={resetErrorBoundary}
        className="mt-3 rounded-full bg-red-600 px-4 py-1.5 text-sm text-white hover:bg-red-700"
      >
        Tentar novamente
      </button>
    </div>
  )
}
