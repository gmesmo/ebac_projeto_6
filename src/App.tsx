import { GlobalStyle } from './styles'

import Hero from './components/Hero'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { store } from './store'
import { Provider } from 'react-redux'
import Cart from 'components/Cart'
import Overlay from 'modals/Overlay'

function App() {
  const logo = require('./assets/images/logo.png')

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Hero logo={logo} />
        <AppRoutes />

        <Footer logo={logo} />
        <Cart />
        <Overlay />
      </BrowserRouter>
    </Provider>
  )
}

export default App
