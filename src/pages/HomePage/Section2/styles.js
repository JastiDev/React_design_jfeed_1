import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 150px;

  @media screen and (max-width: 768px) {
    padding: 120px 16px 120px;
  }
`;

export const Heading = styled.div`
  margin-bottom: 50px;
  font-size: 35px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 26px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px -32px;
  max-width: 1200px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 25px -16px;

    &.reverse {
      flex-direction: column-reverse;
    }
  }
`;

export const Col = styled.div`
  position: relative;
  flex: 1;
  padding: 0 32px;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

const FeatureImg = styled.img`
  position: absolute;
  width: 115%;

  @media screen and (max-width: 768px) {
    position: relative;
    left: -12%;
    margin-bottom: 20px;
    width: 125%;
  }
`;

export const FeatureImg1 = styled(FeatureImg)`
  position: absolute;
  left: -80px;
  width: 115%;
`;

export const FeatureImg2 = styled(FeatureImg)`
  position: absolute;
  left: -40px;
  width: 115%;
`;

export const FeatureImg3 = styled(FeatureImg)`
  position: absolute;
  left: -80px;
  width: 115%;
`;

export const AvatarImg = styled.img`
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Title = styled.div`
  margin-bottom: 12px;
  font-size: 25px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.div`
  margin-bottom: 12px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 25px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Link = styled.a`
  margin-top: 40px;
  padding: 16px 32px;
  border-radius: 32px;
  background-color: #33AB3A;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;
