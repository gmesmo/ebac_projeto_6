import styled, { createGlobalStyle } from 'styled-components'

import { StoreCardProps } from 'components/StoreCard/styles'

export const cores = {
  branco: '#fff',
  laranja: '#E66767',

  backgroundClaro: '#FFF8F2',
  offWhite: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.backgroundClaro};
  }

`

export const Container = styled.div<StoreCardProps>`
  display: flex;
  flex-wrap: wrap;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 120px;

  gap: ${({ dish }) => (dish ? '32px' : '80px')};
  row-gap: ${({ dish }) => (dish ? '32px' : '48px')};
`
