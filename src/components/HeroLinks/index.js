import React from 'react';

import Button from '../Button';
import SocialWrapper from './SocialWrapper';
import SocialMedia from '../SocialMedia';

function HeroLinks(props) {
  return (
    <div>
      <Button href="">View Resume</Button>
      <SocialWrapper>
        <SocialMedia/>
      </SocialWrapper>
    </div>
  );
}

export default HeroLinks;
