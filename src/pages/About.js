import styled from 'styled-components';
import { theme } from '../theme';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: ${theme.radii.md};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export default function About() {
    return (
        <AboutContainer>
            <h2>Кто мы?</h2>

            <Section>
                <h3>🏃 Наша История</h3>
                <p>Основанный в 2022 году клуб gryadka.run начинался как небольшая группа друзей, увлеченных бегом.
                    Мы выросли в сообщество из более чем 30 бегунов, которые помогают друг другу достигать личных рекордов,
                    получая при этом удовольствие!</p>
            </Section>

            <Section>
                <h3>🌱 Наша Философия</h3>
                <p>Мы верим, что бег должен быть доступным, приятным и устойчивым.
                    Наш подход помогает развивать бегунов всех уровней через развивающие тренировки и мероприятия сообщества.</p>
            </Section>

            <Section>
                <h3>🏆 Достижения</h3>
                <ul>
                    <li>Не развалились</li>
                    <li>Не спились</li>
                    <li>Нас узнают на улице родители</li>
                </ul>
            </Section>
        </AboutContainer>
    );
}