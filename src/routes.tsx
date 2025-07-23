import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Store from './pages/Store'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Store/:id' element={<Store />} />
  </Routes>
)

export default AppRoutes
