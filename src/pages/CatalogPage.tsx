import { useCallback, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { useRecipes } from '@/hooks/useRecipes'
import { RecipeList } from '@/components/RecipeList'
import { RecipeGridSkeleton } from '@/components/RecipeCardSkeleton'

export function CatalogPage() {
  const { recipes, loading, error } = useRecipes()
  const [query, setQuery] = useState('')
  const [cuisine, setCuisine] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  const cuisines = useMemo(
    () => ['all', ...new Set(recipes.map((recipe) => recipe.cuisine))],
    [recipes],
  )

  const filtered = useMemo(
    () =>
      recipes.filter(
        (recipe) =>
          (cuisine === 'all' || recipe.cuisine === cuisine) &&
          recipe.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [recipes, cuisine, query],
  )

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }, [])

  return (
    <section>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">Receitas</h1>
          <p className="text-sm text-neutral-500">{favorites.length} favoritas</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search size={15} className="absolute left-2.5 top-2.5 text-neutral-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar receita..."
              aria-label="Buscar receita"
              className="field pl-8"
            />
          </div>

          <select
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
            aria-label="Filtrar por culinária"
            className="field"
          >
            {cuisines.map((item) => (
              <option key={item} value={item}>
                {item === 'all' ? 'Todas as culinárias' : item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? (
        <p className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800">
          {error}
        </p>
      ) : loading ? (
        <RecipeGridSkeleton />
      ) : (
        <RecipeList recipes={filtered} favorites={favorites} onToggleFavorite={toggleFavorite} />
      )}
    </section>
  )
}
