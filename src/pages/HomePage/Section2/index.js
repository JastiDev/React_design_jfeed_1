import React from 'react';

import { Wrapper, Heading, Row, Col, AvatarImg, FeatureImg1, FeatureImg2, FeatureImg3, Title, Subtitle, Description, Link } from './styles';
import featureImg1 from '@/assets/images/feature1.png';
import featureImg2 from '@/assets/images/feature2.png';
import featureImg3 from '@/assets/images/feature3.png';
import avatarImg1 from '@/assets/images/avatar1.png';
import avatarImg2 from '@/assets/images/avatar2.png';
import avatarImg3 from '@/assets/images/avatar3.png';

const Section2 = () => (
  <Wrapper>
    <Heading>Trusted by Artists, Bands, and Managers Across the Music Industry</Heading>
    <Row>
      <Col>
        <FeatureImg1 src={featureImg1} alt="Feature"/>
      </Col>
      <Col>
        <AvatarImg src={avatarImg1} alt="Avatar" />
        <Title>Jesse Atwell</Title>
        <Subtitle>Jesse Atwell</Subtitle>
        <Description>
          Within a few minutes, we had our entire roster of 30+ artists switched over to JamFeed’s automated website builder.
          This platform has saved our team an incredible amount of time and money since we moved all of our websties over.
        </Description>
      </Col>
    </Row>
    <Row className="reverse">
      <Col>
        <AvatarImg src={avatarImg2} alt="Avatar" />
        <Title>Wane Chism</Title>
        <Subtitle>Founder / Artist Manager at Hakone Agency</Subtitle>
        <Description>
          The automated websites that JamFeed has built are a game changer for any artist or manager.
          Our artists websites are always up to date with news, music, videos, tours, etc.
          Now we have time for focus on more important things in our music business.
        </Description>
      </Col>
      <Col>
        <FeatureImg2 src={featureImg2} alt="Feature"/>
      </Col>
    </Row>
    <Row>
      <Col>
        <FeatureImg3 src={featureImg3} alt="Feature"/>
      </Col>
      <Col>
        <AvatarImg src={avatarImg3} alt="Avatar" />
        <Title>Troy Bishop</Title>
        <Subtitle>Artist - MC & Producer - The Bishops</Subtitle>
        <Description>
          I love JamFeed’s new automated websites.
          They allow me to not worry about needing to upadate it each week with new content.
          Worth every dollary and saves me so much time and stress each month.
        </Description>
      </Col>
    </Row>
    <Link href="/">View More Customers</Link>
  </Wrapper>
);

export default Section2;
