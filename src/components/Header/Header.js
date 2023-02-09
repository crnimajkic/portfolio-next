import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display:"flex", alignItems: "center",justifyContent: "center", color: "white", marginBottom: '20px'}}>
          <DiCssdeck size='3rem'></DiCssdeck>
          <Span> Milos Majkic</Span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{ display:"flex", alignItems: "center", color: "white", marginBottom: '20px',alignContent:"space-between"}}>
      <li >
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#About'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/crnimajkic' target='_blank'>
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>

      <SocialIcons href='https://www.instagram.com/crni_majkic/' target='_blank'>
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/majkicmilos/' target='_blank'>
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      
      <SocialIcons href='https://www.codewars.com/users/crnimajkic' target='_blank'>
        <SiCodewars size="3rem"></SiCodewars>
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
