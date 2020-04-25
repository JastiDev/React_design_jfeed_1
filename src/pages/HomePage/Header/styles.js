import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 32px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-size: 20px;
  color: #FFF;
  text-decoration: none;
`;
