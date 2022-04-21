import styled from 'styled-components'

export const DetailsWraper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  max-width: 769px;
  width: 100%;

  align-items: center;
  display: flex;
  padding: 48px;

  > span {
    box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.3);
  }
`
export const Overlay = styled.div`
  background-color: rgba(242, 243, 245, 0.8);
  z-index: 10;

  align-items: center;
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
export const BookInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-left: 48px;
`

export const BlockTitle = styled.div`
  h6 {
    font-size: 28px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 8px;
  }

  p {
    color: ${props => props.theme.colors.secondary};
    font-size: 12px;
  }
`

export const HeadingTitle = styled.strong`
  flex: 1 1 100%;
  font-size: 12px;
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
    font-size: 12px;
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
    font-size: 12px;

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
margin-left: 16px;
width: 32px;

align-items: center;
display: flex;
justify-content: center;

position: absolute;
right: 16px;
top: 16px;

&:hover {
  filter: brightness(0.9);
}
`

export const BookDescription = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 12px;
  line-height: 1.6;

  & > svg {
    margin-right: 4px;
  }
`
