import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Issue } from './pages/issue'
import { DefaultLayout } from './layouts/default-layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:id" element={<Issue />} />
      </Route>
    </Routes>
  )
}
