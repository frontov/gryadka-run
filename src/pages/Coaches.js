import styled from 'styled-components';
import { theme } from '../theme';

const CoachesContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CoachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CoachCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.radii.md};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
`;

const CoachImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export default function Coaches() {
    const coaches = [
        { name: 'Anna Petrova', bio: 'Marathon specialist', exp: '10 years' },
        { name: 'Ivan Sidorov', bio: 'Sprinting coach', exp: '8 years' },
        // Add more coaches
    ];

    return (
        <CoachesContainer>
            <h2>Our Coaches</h2>
            <CoachGrid>
                {coaches.map((coach, index) => (
                    <CoachCard key={index}>
                        <CoachImage
                            src={`https://source.unsplash.com/random/200x200/?portrait,${index}`}
                            alt={coach.name}
                        />
                        <h3>{coach.name}</h3>
                        <p>{coach.bio}</p>
                        <p>Experience: {coach.exp}</p>
                    </CoachCard>
                ))}
            </CoachGrid>
        </CoachesContainer>
    );
}