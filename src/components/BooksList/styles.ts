import styled from 'styled-components'

export const BooksList = styled.ul`
  list-style: none;

  margin-bottom: ${props => props.theme.spacing.medium};
  width: 100%;


  @media (min-width: 768px) {
    display: grid;
    grid-gap: ${props => props.theme.spacing.medium};
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.medium};
  }
`
