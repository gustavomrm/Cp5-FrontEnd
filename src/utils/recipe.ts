import type { Recipe } from '@/types/recipe'

// tempo total = preparo + cozimento
export function getTotalTime(recipe: Recipe): number {
  return recipe.prepTimeMinutes + recipe.cookTimeMinutes
}
