import React from 'react';

import { Wrapper, Row, Col, Title, Subtitle, FeatureImg, Heading } from './styles';
import featureImg from '@/assets/images/feature4.png';

const Section3 = () => (
  <Wrapper>
    <Heading>A Music Website That Works for You</Heading>
    <Row>
      <Col>
        <FeatureImg src={featureImg} alt="Feature" />
      </Col>
      <Col>
        <Title>The Easiest Music Website to Build and Keep Up-to-Date</Title>
        <Subtitle>1. Type in the artist or band name</Subtitle>
        <Subtitle>2. Select one of our beautiful templates</Subtitle>
        <Subtitle>3. Put in your email to receive your website</Subtitle>
      </Col>
    </Row>
  </Wrapper>
);

export default Section3;
