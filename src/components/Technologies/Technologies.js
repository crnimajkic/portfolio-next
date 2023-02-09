import React from 'react';
import Image from "next/image"
import Uxui from '../../../public/images/web-development.png'
import { DiReact, DiNodejsSmall } from 'react-icons/di';
import {FaPaintBrush} from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider divider />
    <SectionTitle >Technologies</SectionTitle>
    <SectionText>

    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experienced <br/>
            in React.js
          </ListParagraph>

        </ListContainer>
      </ListItem>

      <ListItem>
        <img src='/images/wd.png' width={40} height={40} />
        <ListContainer>
          <ListTitle>
            UX/UX
          </ListTitle>
          <ListParagraph>
            Experienced <br/>
            designing in Figma
          </ListParagraph>

        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="4rem"/>
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experienced <br/>
            in Node.js and Databases
          </ListParagraph>

        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
