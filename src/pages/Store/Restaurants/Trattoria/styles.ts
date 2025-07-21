import styled from 'styled-components'
import { Container, cores } from 'styles'

type Props = {
  image: string
}

export const Banner = styled.div<Props>`
  position: relative;
  width: 100%;

  overflow: hidden;
  color: ${cores.branco};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;

    filter: brightness(50%);
  }

  ${Container} {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 280px;

    margin-top: 25px;
    margin-bottom: 32px;
  }
`

export const Cuisine = styled.p`
  font-size: 32px;
  font-weight: 100;
`

export const Name = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
