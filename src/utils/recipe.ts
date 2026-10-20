import type { Recipe } from '@/types/recipe'

export function getTotalTime(recipe: Recipe): number {
  return recipe.prepTimeMinutes + recipe.cookTimeMinutes
}
