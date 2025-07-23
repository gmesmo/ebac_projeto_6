import styled from 'styled-components'
import { cores } from '../../styles'

export type StoreCardProps = {
  dish?: boolean
}

export const CardContainer = styled.div<StoreCardProps>`
  width: ${({ dish }) => (dish ? '320px' : '472px')};
  ${({ dish }) => dish && 'height: 338px;'};
  ${({ dish }) => dish && 'padding: 8px;'}

  background-color: ${({ dish }) => (dish ? cores.laranja : cores.branco)};
  color: ${({ dish }) => (dish ? cores.offWhite : cores.laranja)};

  border-radius: 8px;
`

export const CardHeader = styled.div<StoreCardProps>`
  position: relative;
  height: ${({ dish }) => (dish ? '168px' : '214px')};
  ${({ dish }) => dish && 'margin-bottom: 8px;'}

  img {
    width: 100%;
    ${({ dish }) => dish && 'height: 168px;'}

    ${({ dish }) => dish && 'border-radius: 8px;'}
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 216px;
`

export const CardDestaque = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
`

export const CardBody = styled.div<StoreCardProps>`
  ${({ dish }) => !dish && 'padding: 8px;'}
  ${({ dish }) => !dish && `border: 1px solid ${cores.laranja};`}
`

export const CardTitle = styled.div<StoreCardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({ dish }) => (dish ? '8px' : '16px')};

  h3 {
    font-size: ${({ dish }) => (dish ? '16px' : '18px')};
    font-weight: ${({ dish }) => (dish ? '900' : '700')};
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Description = styled.div<StoreCardProps>`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: ${({ dish }) => (dish ? '8px' : '16px')};
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`

export const DetailsCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: 1024px;
  height: 344px;
  padding: 32px;

  background-color: ${cores.laranja};
  color: ${cores.branco};

  display: flex;

  .close {
    position: absolute;
    top: 8px;
    right: -16px;
    cursor: pointer;

    width: 16px;
    height: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    margin-right: 24px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;

    margin: 16px 0;
  }
`
