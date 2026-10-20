import type { Recipe, RecipesResponse } from '@/types/recipe'

const BASE_URL = 'https://dummyjson.com/recipes'

export async function getRecipes(): Promise<Recipe[]> {
  // sem o limit=0 a API só manda 30 receitas
  const response = await fetch(`${BASE_URL}?limit=0`)
  if (!response.ok) throw new Error('Erro ao buscar receitas')

  const data: RecipesResponse = await response.json()
  return data.recipes
}

export async function getRecipeById(id: number): Promise<Recipe> {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) throw new Error('Receita não encontrada')

  return response.json()
}
