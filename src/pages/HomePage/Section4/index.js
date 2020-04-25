import React from 'react';

import { Wrapper, Title, Row, Col, Card, CardTitle, CardText, Price, Description } from './styles';

const Section4 = () => (
  <Wrapper>
    <Title>Affordable Prices, Incredible Value</Title>
    <Row>
      <Col>
        <Card>
          <CardTitle>PRO</CardTitle>
          <CardText>
            <Price>$22 <span>/month</span></Price>
            <Description>One Website Per Brand / Artist</Description>
            <Description>Real-Time Automated Content</Description>
            <Description>Web Dashboard + Analytics</Description>
            <Description>Customer Support (9am-5pm)</Description>
          </CardText>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardTitle>VIP</CardTitle>
          <CardText>
            <Price>$222 <span>/month</span></Price>
            <Description><b>Everything in Pro Plus +</b></Description>
            <Description>Website Customizations</Description>
            <Description>Custom Landing & Splash Pages</Description>
            <Description>Priority Customer Support (24/7)</Description>
          </CardText>
        </Card>
      </Col>
    </Row>
  </Wrapper>
);

export default Section4;
