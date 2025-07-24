import { useDispatch } from 'react-redux'

import { DishType } from 'services/api'
import { formataPreco } from 'components/StoreCard'
import { DetailsCard } from './styles'
import { CartButton } from 'components/Button'
import close from 'assets/images/close.png'
import { add, closeDetails, openCart } from 'store/reducers/cart'

const ProductDetails = ({
  dish,
  onClose
}: {
  dish: DishType
  onClose: (value: boolean) => void
}) => {
  const dispatch = useDispatch()
  const { foto, nome, descricao, porcao, preco } = dish

  const handleAddDish = () => {
    dispatch(add(dish))
    dispatch(closeDetails())
    dispatch(openCart())
  }

  console.log(dish)

  return (
    <>
      <DetailsCard>
        <img src={foto} alt={nome} />

        <div>
          <h3>{nome}</h3>
          <p>
            {descricao}
            <br />
            <br />
            Serve: de {porcao}
          </p>
          <CartButton variant='secondary' onClick={handleAddDish}>
            Adicionar ao carrinho - {formataPreco(preco)}
          </CartButton>
        </div>
        <img
          onClick={() => onClose(false)}
          src={close}
          alt='Fechar'
          className='close'
        />
      </DetailsCard>
    </>
  )
}

export default ProductDetails
