import { Link, useLocation } from 'react-router-dom'
import { HeroContainer, RestaurantInfo, Text } from './styles'
import { Container } from 'styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from 'store'
import { openCart, openDetails } from 'store/reducers/cart'

interface Props {
  logo: string
}

type LocationType = {
  pathname: string
}

export type isHomeType = {
  isHome?: boolean
}

const Hero = ({ logo }: Props) => {
  const dispatch = useDispatch()
  const location: LocationType = useLocation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleOpenCart = () => {
    dispatch(openCart())
  }

  const isHome = location.pathname === '/'

  return (
    <HeroContainer isHome={isHome}>
      <Container>
        {isHome ? (
          <>
            <Link to='/'>
              <img src={logo} alt='Logo EFOOD' />
            </Link>
            <Text>
              Viva experiências gastronômicas
              <br />
              no conforto da sua casa
            </Text>
          </>
        ) : (
          <>
            <RestaurantInfo text='left'>Restaurante</RestaurantInfo>
            <Link to='/'>
              <img src={logo} alt='Logo EFOOD' />
            </Link>
            <RestaurantInfo onClick={handleOpenCart}>
              {items.length} produto(s) no carrinho
            </RestaurantInfo>
          </>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero
