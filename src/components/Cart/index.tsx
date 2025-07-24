import { useDispatch, useSelector } from 'react-redux'

import { Item, SelectedItems, Sidebar } from './styles'
import { CartButton } from 'components/Button'
import { RootReducer } from 'store'
import { formataPreco } from 'components/StoreCard'
import removeIcon from 'assets/images/remove.png'
import { remove } from 'store/reducers/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartOpen, items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalValue = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  return (
    <>
      {cartOpen && (
        <Sidebar>
          <SelectedItems>
            {items.map((item) => (
              <Item key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>Preço: R$ {formataPreco(item.preco)}</p>
                </div>
                <img
                  className='remove'
                  src={removeIcon}
                  alt='Remover item'
                  onClick={() => removeItem(item.id)}
                />
              </Item>
            ))}
          </SelectedItems>
          <div className='total'>
            <p>Total:</p>
            <span>R$ {formataPreco(getTotalValue())}</span>
          </div>
          <CartButton>Continuar com a entrega</CartButton>
        </Sidebar>
      )}
    </>
  )
}

export default Cart
