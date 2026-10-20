import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Heart } from 'lucide-react'
import { getTotalTime } from '@/utils/recipe'
import type { Recipe } from '@/types/recipe'

interface RecipeCardProps {
  recipe: Recipe
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export const RecipeCard = memo(function RecipeCard({
  recipe,
  isFavorite,
  onToggleFavorite,
}: RecipeCardProps) {
  return (
    <article className="card group relative flex flex-col overflow-hidden transition hover:shadow-md">
      <Link to={`/receitas/${recipe.id}`} className="flex flex-1 flex-col">
        <img
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
          className="h-40 w-full object-cover"
        />

        <div className="flex flex-1 flex-col gap-1 p-3">
          <span className="text-xs font-medium text-orange-700">{recipe.cuisine}</span>
          <h3 className="line-clamp-2 text-sm font-semibold">{recipe.name}</h3>
          <span className="mt-auto flex items-center gap-1 pt-2 text-xs text-neutral-500">
            <Clock size={13} /> {getTotalTime(recipe)} min
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => onToggleFavorite(recipe.id)}
        aria-label="Favoritar"
        className={`absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm ${
          isFavorite ? 'text-red-500' : 'text-neutral-400'
        }`}
      >
        <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
    </article>
  )
})
