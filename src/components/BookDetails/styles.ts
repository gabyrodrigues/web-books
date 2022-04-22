import styled from 'styled-components'

export const DetailsWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  max-width: 769px;
  width: 100%;

  align-items: center;
  display: flex;
  padding: ${props => props.theme.spacing.huge};

  > span {
    box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.3);

    @media (max-width: 767px) {
      flex-shrink: 0;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    height: 90%;
    margin-top: ${props => props.theme.spacing.huge};
    overflow-y: auto;
    padding: ${props => props.theme.spacing.medium};
  }
`
export const Overlay = styled.div`
  background-color: rgba(242, 243, 245, 0.8);
  overflow-y: auto;
  z-index: 10;

  align-items: center;
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  @media (max-width: 767px) {
    padding: 0 ${props => props.theme.spacing.medium};
  }
`
export const BookInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-left: ${props => props.theme.spacing.huge};

  @media (max-width: 767px) {
    padding-left: 0;
    padding-top: ${props => props.theme.spacing.big};
  }
`

export const BlockTitle = styled.div`
  h6 {
    font-size: ${props => props.theme.fonts.huge};
    font-weight: 500;
    line-height: 1;
    margin-bottom: ${props => props.theme.spacing.small};

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fonts.small};
  }
`

export const HeadingTitle = styled.strong`
  flex: 1 1 100%;
  font-size: ${props => props.theme.fonts.small};
  font-weight: 500;
  margin-bottom: 12px;
  text-transform: uppercase;
`

export const BlockInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 32px;

  > strong {
    flex: 1 1 100%;
  }
`

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: ${props => props.theme.fonts.small};
    font-weight: 500;

    & + strong {
      margin-top: 2px;
    }
  }
`

export const InfoValue = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fonts.small};

    & + p {
      margin-top: 2px;
    }
  }
`

export const CloseButton = styled.button`
  background: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  margin-left: ${props => props.theme.spacing.medium};
  width: 32px;

  align-items: center;
  display: flex;
  justify-content: center;

  position: absolute;
  right: ${props => props.theme.spacing.medium};
  top: ${props => props.theme.spacing.medium};

  &:hover {
    filter: brightness(0.9);
  }
`

export const BookDescription = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fonts.small};
  line-height: 1.6;

  & > svg {
    margin-right: 4px;
  }
`
