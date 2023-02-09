// import { SYMBOL_PREVIEW_DATA } from 'next/dist/next-server/server/api-utils';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+381612472305'>+381612472305</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:mlmajkicmlmajkic@gmail.com'>mlmajkicmlmajkic@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{fontSize:"3rem", lineHeight:"3.3rem"}}> -Inovating one project at the time-</Slogan>
        </CompanyContainer>

        <SocialIconsContainer>

        
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

        </SocialIconsContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
