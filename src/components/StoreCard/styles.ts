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

  margin-bottom: ${({ dish }) => (dish ? '6px' : '16px')};
`
