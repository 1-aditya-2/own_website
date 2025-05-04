import React from 'react';
import Link from 'next/link';
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
        A web developer with a passion for creative solutions.  Interested in learning new tech stacks and programming languages.
        </SectionText>
        <Link href="https://drive.google.com/file/d/1j3LlL1-JmdrdgyUITynUeBvjjS9I-ZRu/view?usp=drive_link"><Button onClick={props.handleClick}>Resume</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
