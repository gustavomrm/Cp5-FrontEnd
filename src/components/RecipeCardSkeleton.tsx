export function RecipeCardSkeleton() {
  return (
    <div className="card animate-pulse overflow-hidden">
      <div className="h-40 bg-stone-200" />
      <div className="p-3">
        <div className="mb-2 h-3 w-1/3 rounded-sm bg-stone-200" />
        <div className="h-3 w-3/4 rounded-sm bg-stone-200" />
      </div>
    </div>
  )
}

export function RecipeGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <RecipeCardSkeleton key={index} />
      ))}
    </div>
  )
}
