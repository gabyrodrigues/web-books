import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  > p {
    font-size: 12px;
    margin-right: 16px;

    > strong {
      font-weight: 500;
    }
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
    margin-left: 8px;
  }
`
