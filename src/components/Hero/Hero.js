import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center >
        Hello,<br />
         and welcome to -MY World-
      </SectionTitle>
      <SectionText>
        "I will help you elevate Your Online Presence!<br />
        Dedicated to creating websites that not only look great but also deliver results. From concept to launch, I'll work with you every step of the way to ensure a seamless and successful online experience."

      </SectionText>
      <Button onClick = { ()=> window.location = "#About"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;