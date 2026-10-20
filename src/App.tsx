import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { CatalogPage } from '@/pages/CatalogPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const RecipePage = lazy(() =>
  import('@/pages/RecipePage').then((module) => ({ default: module.RecipePage })),
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path="receitas/:id" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
