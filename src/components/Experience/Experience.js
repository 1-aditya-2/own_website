import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { TimelineContainer, TimelineItem, TimelineDot, TimelineContent, TimelineCompany, TimelineRole, TimelineDescription, TimelineTech } from './ExperienceStyles';
import { experiences } from '../../constants/constants';

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <TimelineContainer>
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineDot />
          <TimelineContent>
            <TimelineCompany>{exp.company}</TimelineCompany>
            <TimelineRole>{exp.role}</TimelineRole>
            <TimelineDescription>
  {exp.description.map((desc, i) => (
    <p key={i}>{desc}</p>
  ))}
</TimelineDescription>

            <TimelineTech>
              {exp.techStack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </TimelineTech>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  </Section>
);

export default Experience;
