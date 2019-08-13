import React from 'react';
import Link from 'gatsby-link';

import Wrapper from './Wrapper';
import NavWrapper from './NavWrapper';
import Nav from '../Nav';

function Header() {
  return (
    <Wrapper id="top">
      <NavWrapper>
        <Nav/>
      </NavWrapper>  
    </Wrapper>
  );
}

export default Header;
