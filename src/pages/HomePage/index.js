import React from 'react';

import { Container, Background } from './styles';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from './Footer';

const HomePage = () => (
  <Container>
    <Background />
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
  </Container>
);

export default HomePage;
