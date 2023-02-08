import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 200, text: 'Codewars Kata Solved', },
  { number: 5, text: 'Projects Volontired To', },
  { number: 15, text: 'Github Repositories and Lectures', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle >Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((item,index)=>(
      <Box key={index}>
        <BoxNum>{item.number}+</BoxNum>
        <BoxText>{item.text}</BoxText>
      </Box>
    ))}
  </Boxes>

</Section>
);

export default Acomplishments;
