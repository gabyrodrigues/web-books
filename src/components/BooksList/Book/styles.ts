import styled from 'styled-components'

export const Book = styled.li`
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  cursor: pointer;

  align-items: center;
  display: flex;
  padding: 20px ${props => props.theme.spacing.medium};

  &:hover {
    filter: brightness(0.97);
  }

  > span {
    border-radius: 2px;
    box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`

export const BookInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-left: 20px;
`

export const BlockTitle = styled.div`
  h6 {
    font-size: ${props => props.theme.fonts.medium};
    font-weight: 500;
    line-height: 1;
    margin-bottom: 4px;
  }

  p {
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fonts.small};
  }
`

export const BlockInfo = styled.div`
  p {
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fonts.small};
  }
`
