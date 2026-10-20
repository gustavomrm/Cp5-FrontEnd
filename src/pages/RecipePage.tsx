import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getRecipeById } from '@/services/recipes'
import { getTotalTime } from '@/utils/recipe'
import type { Recipe } from '@/types/recipe'

export function RecipePage() {
  const { id } = useParams<{ id: string }>()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) return
    let active = true
    setLoading(true)
    setNotFound(false)

    getRecipeById(Number(id))
      .then((data) => active && setRecipe(data))
      // id que não existe (ex: 999) cai aqui, a API responde 404
      .catch(() => active && setNotFound(true))
      .finally(() => active && setLoading(false))

    return () => {
      active = false
    }
  }, [id])

  if (loading) {
    return <p className="py-20 text-center text-sm text-neutral-500">Carregando receita...</p>
  }

  if (notFound || !recipe) {
    return (
      <div className="py-20 text-center">
        <p className="mb-3 text-neutral-600">Receita não encontrada.</p>
        <Link to="/" className="btn-primary">
          Voltar ao catálogo
        </Link>
      </div>
    )
  }

  return (
    <article>
      <Link to="/" className="mb-5 inline-flex items-center gap-1 text-sm text-neutral-600 hover:underline">
        <ArrowLeft size={16} /> Voltar
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        <img src={recipe.image} alt={recipe.name} className="w-full rounded-xl object-cover" />

        <div>
          <span className="text-sm text-orange-700">{recipe.cuisine}</span>
          <h1 className="mb-4 font-display text-3xl font-bold">{recipe.name}</h1>

          <div className="mb-6 flex flex-wrap gap-3 text-sm">
            <span className="card px-3 py-2">Preparo: {recipe.prepTimeMinutes} min</span>
            <span className="card px-3 py-2">Cozimento: {recipe.cookTimeMinutes} min</span>
            <span className="card px-3 py-2 font-semibold">Total: {getTotalTime(recipe)} min</span>
          </div>

          <h2 className="mb-2 font-display text-lg font-bold">Ingredientes</h2>
          <ul className="mb-6 list-disc pl-5 text-sm">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="mb-2 mt-6 font-display text-lg font-bold">Modo de preparo</h2>
      <ol className="list-decimal space-y-2 pl-5 text-sm">
        {recipe.instructions.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </article>
  )
}
