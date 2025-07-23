import {
  CardContainer,
  CardTitle,
  CardImage,
  Description,
  CardHeader,
  CardBody,
  CardDestaque,
  Overlay,
  DetailsCard
} from './styles'

import Button, { CartButton } from '../Button'

import estrela from '../../assets/images/estrela.png'
import { CardapioType, LojasType } from 'services/api'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import close from '../../assets/images/close.png'

export type Props = {
  size?: 'normal' | 'big'
}

export const formatarDescricao = (descricao: string) => {
  return descricao.slice(0, 160) + '...'
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

const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const DishesCard = ({ dish }: { dish: CardapioType }) => {
  const { foto, nome, descricao, porcao, preco } = dish

  const [overlayOn, setOverlayOn] = useState(false)

  return (
    <CardContainer dish>
      <CardHeader dish>
        <CardImage src={foto} alt={nome} />
      </CardHeader>
      <CardBody dish>
        <CardTitle dish>
          <h3>{nome}</h3>
        </CardTitle>

        <Description dish>{formatarDescricao(descricao)}</Description>

        <CartButton onClick={() => setOverlayOn(true)}>
          Mais detalhes
        </CartButton>
      </CardBody>
      {overlayOn &&
        createPortal(
          <>
            <Overlay onClick={() => setOverlayOn(false)} />
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
                <CartButton variant='secondary'>
                  Adicionar ao carrinho - {formataPreco(preco)}
                </CartButton>
              </div>
              <img
                onClick={() => setOverlayOn(false)}
                src={close}
                alt='Fechar'
                className='close'
              />
            </DetailsCard>
          </>,

          document.body
        )}
    </CardContainer>
  )
}

export default StoreCard
