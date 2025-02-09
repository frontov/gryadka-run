import styled from 'styled-components';
import { theme } from '../theme';
import vovaPhoto from '../images/vova.png';
import mishaPhoto from '../images/misha.png';
import romaPhoto from '../images/roma.png';

const TeamContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MemberCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.radii.md};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export default function Team() {
    const members = [
        { name: 'Михаил Игушкин', role: 'Старший тренер (Санкт-Петербург)', bio: 'На опыте и без депресии', image:mishaPhoto },
        { name: 'Роман Фронтов', role: '', bio: 'Старый, но не бесполезный', image:romaPhoto },
        { name: 'Владимир Шаприцкий', role: 'Тренер (Москва)', bio: 'Молодой, горячий', image:vovaPhoto },
    ];

    return (
        <TeamContainer>
            <h2>Наша Команда</h2>
            <MemberGrid>
                {members.map((member, index) => (
                    <MemberCard key={index}>
                        <MemberImage
                            src={member.image}
                            alt={member.name}
                        />
                        <h3>{member.name}</h3>
                        <p><strong>{member.role}</strong></p>
                        <p>{member.bio}</p>
                    </MemberCard>
                ))}
            </MemberGrid>
        </TeamContainer>
    );
}