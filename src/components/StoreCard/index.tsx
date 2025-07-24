import { useDispatch, useSelector } from 'react-redux'

import {
  CardContainer,
  CardTitle,
  CardImage,
  Description,
  CardHeader,
  CardBody,
  CardDestaque
} from './styles'

import Button, { CartButton } from '../Button'

import estrela from '../../assets/images/estrela.png'
import { DishType, LojasType } from 'services/api'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import ProductDetails from 'modals/ProductDetails'
import { openDetails, closeDetails } from 'store/reducers/cart'
import { RootReducer } from 'store'

export type Props = {
  size?: 'normal' | 'big'
}

export const formatarDescricao = (descricao: string) => {
  return descricao.slice(0, 160) + '...'
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const StoreCard = ({ restaurante }: { restaurante: LojasType }) => {
  const { titulo, capa, destacado, tipo, descricao, avaliacao } = restaurante

  return (
    <CardContainer>
      <CardHeader>
        <CardImage src={capa} alt={titulo} />
        <CardDestaque>
          {destacado && <Button>Destaque da semana</Button>}
          <Button>{tipo}</Button>
        </CardDestaque>
      </CardHeader>

      <CardBody>
        <CardTitle>
          <h3>{titulo}</h3>

          <span>
            {avaliacao}
            <img src={estrela} alt={`${avaliacao} estrelas`} />
          </span>
        </CardTitle>
        <Description>{formatarDescricao(descricao)}</Description>
        <Button to={`/Store/${restaurante.id}`} size='big'>
          Saiba Mais
        </Button>
      </CardBody>
    </CardContainer>
  )
}

export const DishesCard = ({ dish }: { dish: DishType }) => {
  const dispatch = useDispatch()
  const { foto, nome, descricao } = dish

  const { detailsOpen } = useSelector((state: RootReducer) => state.cart)
  const [showProductDetails, setShowProductDetails] = useState(false)

  const handleShowProductDetails = (value: boolean) => {
    if (value) {
      setShowProductDetails(true)
      dispatch(openDetails())
    } else {
      setShowProductDetails(false)
    }
  }

  useEffect(() => {
    if (!detailsOpen) {
      setShowProductDetails(false)
    }
  }, [detailsOpen])

  return (
    <CardContainer dish={true}>
      <CardHeader dish={true}>
        <CardImage src={foto} alt={nome} />
      </CardHeader>
      <CardBody dish={true}>
        <CardTitle dish={true}>
          <h3>{nome}</h3>
        </CardTitle>

        <Description dish={true}>{formatarDescricao(descricao)}</Description>

        <CartButton onClick={() => handleShowProductDetails(true)}>
          Mais detalhes
        </CartButton>
      </CardBody>
      {showProductDetails &&
        detailsOpen &&
        createPortal(
          <ProductDetails dish={dish} onClose={handleShowProductDetails} />,
          document.body
        )}
    </CardContainer>
  )
}

export default StoreCard
