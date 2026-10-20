import { RecipeCard } from './RecipeCard'
import type { Recipe } from '@/types/recipe'

interface RecipeListProps {
  recipes: Recipe[]
  favorites: number[]
  onToggleFavorite: (id: number) => void
}

export function RecipeList({ recipes, favorites, onToggleFavorite }: RecipeListProps) {
  if (recipes.length === 0) {
    return <p className="py-16 text-center text-sm text-neutral-500">Nenhuma receita encontrada.</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}
