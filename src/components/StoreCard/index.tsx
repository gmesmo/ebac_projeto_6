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
import Restaurant, { DishesType } from 'models/Restaurant'

import estrela from '../../assets/images/estrela.png'

export type Props = {
  size?: 'normal' | 'big'
}

const StoreCard = ({ restaurante }: { restaurante: Restaurant }) => {
  const { name, image, destaque, cuisine, description, rating } = restaurante

  return (
    <CardContainer>
      <CardHeader>
        <CardImage src={image} alt={name} />
        <CardDestaque>
          {destaque && <Button>Destaque da semana</Button>}
          <Button>{cuisine}</Button>
        </CardDestaque>
      </CardHeader>

      <CardBody>
        <CardTitle>
          <h3>{name}</h3>

          <span>
            {rating}
            <img src={estrela} alt={`${rating} estrelas`} />
          </span>
        </CardTitle>
        <Description>
          {description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </Description>
        <Button to={`${restaurante.link}?id=${restaurante.id}`} size='big'>
          Saiba Mais
        </Button>
      </CardBody>
    </CardContainer>
  )
}

export const DishesCard = ({ dish }: { dish: DishesType }) => {
  const { name, description, image } = dish

  return (
    <CardContainer dish>
      <CardHeader dish>
        <CardImage src={image} alt={name} />
      </CardHeader>
      <CardBody dish>
        <CardTitle dish>
          <h3>{name}</h3>
        </CardTitle>

        <Description dish>{description}</Description>

        <CartButton>Adicionar ao carrinho</CartButton>
      </CardBody>
    </CardContainer>
  )
}

export default StoreCard
