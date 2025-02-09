import styled from 'styled-components';
import { theme } from '../theme';

const HeroSection = styled.section`
  padding: 4rem 2rem;
  background: ${theme.colors.light};
  text-align: center;
`;

const Title = styled.h1`
  color: ${theme.colors.secondary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${theme.colors.dark};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CTAButton = styled.button`
  background: ${theme.gradients.main};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: ${theme.radii.md};
  margin-top: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Home() {
    return (
        <HeroSection>
            <Title>Похоже вы попали на сайт бегового клуба gryadka! 🏃</Title>
            <Subtitle>
               Мы - грядка ран!
            </Subtitle>
            <CTAButton>Тык</CTAButton>
        </HeroSection>
    );
}