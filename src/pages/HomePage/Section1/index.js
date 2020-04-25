import React from 'react';

import { Wrapper, Img, Arrow, Title, Subtitle, Link } from './styles';
import logoImg from '@/assets/images/logo.png';

const Section1 = () => (
  <Wrapper>
    <Img src={logoImg} alt="Logo"/>
    <Title>Create a great music website that works for you.</Title>
    <Subtitle>Build your own automated website for free in less than 1 minute.</Subtitle>
    <Link href="/">GET STARTED</Link>
    <Arrow>
      <div>Learn More</div>
      <div>V</div>
    </Arrow>
  </Wrapper>
);

export default Section1;
