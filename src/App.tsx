import { GlobalStyle } from './styles'

import Hero from './components/Hero'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  const logo = require('./assets/images/logo.png')

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero logo={logo} />
      <AppRoutes />

      <Footer logo={logo} />
    </BrowserRouter>
  )
}

export default App
