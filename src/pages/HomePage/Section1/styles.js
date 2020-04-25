import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 120px 0 500px;

  @media screen and (max-width: 768px) {
    padding: 120px 32px 120px;
    text-align: center;
  }
`;

export const Img = styled.img`
  margin-bottom: 40px;
  max-width: 216px;
  width: 100%;
`;

export const Title = styled.div`
  margin-bottom: 15px;
  font-size: 35px;
`;

export const Subtitle = styled.div`
  margin-bottom: 60px;
  font-size: 20px;
`;

export const Link = styled.a`
  padding: 16px 32px;
  border-radius: 32px;
  background-color: #33AB3A;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

export const Arrow = styled.div`
  position: absolute;
  text-align: center;
  font-size: 20px;
  bottom: 80px;
  animation: flashing 2s infinite;

  @media screen and (max-width: 768px) {
    bottom: 0;
  }
`;
