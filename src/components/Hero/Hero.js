import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <h6>Hey!, I am </h6>
          Aditya Pratap Singh<br />
        </SectionTitle>
        <SectionText>
        A budding web developer with a passion for creative solutions.  Interested in learning new tech stacks and programming languages.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;