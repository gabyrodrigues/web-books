import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: ${props => props.theme.spacing.medium};

  > p {
    font-size: ${props => props.theme.fonts.small};
    margin-right: ${props => props.theme.spacing.medium};

    > strong {
      font-weight: 500;
    }

    @media (max-width: 767px) {
      & > p {
        margin-right: 0;
      }
    }
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const PaginateButton = styled.button`
  background: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  width: 32px;

  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    &:not(:disabled) {
      filter: brightness(0.9);
    }
  }

  & + & {
    margin-left: ${props => props.theme.spacing.small};
  }

  @media (max-width: 767px) {
    &:first-of-type {
      margin-right: ${props => props.theme.spacing.medium};
      order: -1;
    }
  }
`
