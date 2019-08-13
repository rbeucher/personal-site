import React from 'react';

import Wrapper from './Wrapper';
import Container from './Container';
import Column from './Column';
import H1 from './H1';
import P from './P';
import HeroLinks from '../HeroLinks';
import Img from './Img';
import Me from './super-cool-dude.png';
import ParticlesBG from '../ParticlesBG';

function Hero(props) {
  return (
    <Wrapper>
      <ParticlesBG />
      <Container>
        <Column>
          <H1>Romain Beucher, PhD</H1>
          <P>
          Computational Geodynamicist, Thermochronologist
          </P>
          <HeroLinks/>
        </Column>
        <Column>
          <Img src={Me} alt="Picture of Romain Beucher"/>
        </Column>
      </Container>
    </Wrapper>
  );
}

export default Hero;
