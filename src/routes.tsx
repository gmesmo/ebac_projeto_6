import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Store from './pages/Store'
import Trattoria from './pages/Store/Restaurants/Trattoria'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Store' element={<Store />}>
      <Route path='Trattoria' element={<Trattoria />} />
    </Route>
  </Routes>
)

export default AppRoutes
