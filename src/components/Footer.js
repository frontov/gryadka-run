import styled from 'styled-components';
import { theme } from '../theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.dark};
  color: ${theme.colors.light};
  padding: 2rem;
  margin-top: 4rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${theme.colors.light};
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <SocialLinks>
                <SocialLink href="https://www.instagram.com/gryadka_run">Instagram</SocialLink>
                <SocialLink href="https://t.me/gryadka_run">Telegram</SocialLink>
                <SocialLink href="https://www.strava.com/clubs/1094598">Strava</SocialLink>
            </SocialLinks>
            <p>©2022-2025 gryadka.run 🍅 All rights vegetabled</p>
        </FooterContainer>
    );
}