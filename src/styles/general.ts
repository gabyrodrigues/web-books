import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.main`
  height: 100%;
  margin: 0 auto;
  max-width: 1365px;
  width: 100%;

  display: flex;
  position: relative;
`

export const FlexWrapper = styled.div`
  align-items: center;
  display: flex;
`

export const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 40px;
  width: 100%;

  display: flex;
  position: relative;

  @media (min-width: 768px) {
    max-width: 1136px;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`

export const Container = styled.div`
  background-color: ${props => props.theme.colors.light};
  background-image: url(/background-home.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  align-items: center;
  display: flex;

  @media (max-width: 767px) {
    background-repeat: repeat-y;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  width: 100%;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  background: transparent;
  border-radius: 50%;
  border-bottom: 2px solid ${props => props.theme.colors.gray};
  border-left: 4px solid ${props => props.theme.colors.text};
  border-right: 2px solid ${props => props.theme.colors.gray};
  border-top: 2px solid ${props => props.theme.colors.gray};
  flex-shrink: 0;
  height: 36px;
  width: 36px;
`
