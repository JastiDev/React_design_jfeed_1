import React from 'react';

import { Wrapper, Subtitle, Link, LinkWrapper, Img, ExternalLink } from './styles';
import logoImg from '@/assets/images/logo.png';

const Footer = () => (
  <Wrapper>
    <Img src={logoImg} alt="Logo" />
    <Subtitle>Build your own automated website for free in less than 1 minute.</Subtitle>
    <Link href="/">GET STARTED</Link>
    <LinkWrapper>
      <ExternalLink href="/">Terms of Service</ExternalLink>
      <ExternalLink href="/">Privacy Policy</ExternalLink>
      <ExternalLink href="/">Contact Us</ExternalLink>
    </LinkWrapper>
  </Wrapper>
);

export default Footer;
