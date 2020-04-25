import styled from 'styled-components';
import backgroundImg from '@/assets/images/background.png';
import backgroundMobileImg from '@/assets/images/background-mobile.png';

export const Container = styled.div`
  width: 100%;
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImg});
  background-size: cover;
  z-index: -1;

  @media screen and (max-width: 768px) {
    background: url(${backgroundMobileImg});
    background-size: cover;
  }
`;
