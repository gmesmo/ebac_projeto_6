import { useDispatch, useSelector } from 'react-redux'

import { Overlay as StyledOverlay } from './styles'
import { RootReducer } from 'store'
import { closeCart, closeDetails } from 'store/reducers/cart'

const Overlay = () => {
  const dispatch = useDispatch()
  const { detailsOpen, cartOpen } = useSelector(
    (state: RootReducer) => state.cart
  )

  const handleClick = () => {
    dispatch(closeDetails())
    dispatch(closeCart())
  }

  if (!detailsOpen && !cartOpen) return null
  return <StyledOverlay onClick={handleClick} />
}

export default Overlay
