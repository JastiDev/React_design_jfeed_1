import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 350px;

  @media screen and (max-width: 768px) {
    padding: 0 0 120px;
  }
`;

export const Heading = styled.div`
  margin-bottom: 100px;
  font-size: 35px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 26px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0px -32px;
  max-width: 1200px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Col = styled.div`
  flex: 1;
  position: relative;
  padding: 0 32px;
`;

export const FeatureImg = styled.img`
  position: absolute;
  left: -40px;
  width: 100%;

  @media screen and (max-width: 768px) {
    position: relative;
    left: 0;
    margin-top: 40px;
  }
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 35px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  margin-bottom: 35px;
  font-size: 25px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
