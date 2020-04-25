import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 400px;

  @media screen and (max-width: 768px) {
    padding: 0 0 120px;
  }
`;

export const Title = styled.div`
  margin-bottom: 120px;
  font-size: 35px;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -80px;
  max-width: 1400px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 -32px;
  }
`;

export const Col = styled.div`
  flex: 1;
  padding: 0 80px;

  @media screen and (max-width: 768px) {
    padding: 0 32px;
  }
`;

export const Card = styled.div`
  border-radius: 22px;
  border: 2px solid #979797;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const CardTitle = styled.div`
  padding: 35px;
  border-bottom: 2px solid #979797;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`;

export const CardText = styled.div`
  padding: 30px 80px 80px;

  @media screen and (max-width: 768px) {
    padding: 16px 32px 32px;
  }
`;

export const Price = styled.div`
  text-align: center;
  font-size: 65px;
  font-weight: 700;
  line-height: 89px;
  color: #33AB3A;

  & > span {
    font-size: 25px;
    line-height: 34px;
    color: #33AB3A;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Description = styled.div`
  font-size: 25px;
  line-height: 60px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
