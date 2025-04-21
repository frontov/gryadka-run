// src/components/MemberProfile.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileSection = styled.div`
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.radii.md};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  border-bottom: 2px solid ${theme.colors.lightGray};
  padding-bottom: 0.5rem;
`;

export default function MemberProfile({ members }) {
    const { id } = useParams();
    const member = members.find(m => m.id === id);

    if (!member) {
        return (
            <ProfileContainer>
                <BackButton to="/team">← Вернуться к команде</BackButton>
                <h2>Участник не найден</h2>
            </ProfileContainer>
        );
    }

    return (
        <ProfileContainer>
            <BackButton to="/team">← Вернуться к команде</BackButton>

            <ProfileHeader>
                <ProfileImage src={member.image} alt={member.name} />
                <ProfileInfo>
                    <h2>{member.name}</h2>
                    <p><strong>{member.role}</strong></p>
                </ProfileInfo>
            </ProfileHeader>

            <ProfileSection>
                <SectionTitle>О тренере</SectionTitle>
                <p>{member.bio}</p>
                {member.fullBio && member.fullBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </ProfileSection>

            {member.experience && (
                <ProfileSection>
                    <SectionTitle>Опыт</SectionTitle>
                    <ul>
                        {member.experience.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </ProfileSection>
            )}

            {member.education && (
                <ProfileSection>
                    <SectionTitle>Образование</SectionTitle>
                    <ul>
                        {member.education.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </ProfileSection>
            )}

            {member.achievements && (
                <ProfileSection>
                    <SectionTitle>Достижения</SectionTitle>
                    <ul>
                        {member.achievements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </ProfileSection>
            )}

            {member.contact && (
                <ProfileSection>
                    <SectionTitle>Контакты</SectionTitle>
                    {member.contact.email && <p><strong>Email:</strong> {member.contact.email}</p>}
                    {member.contact.phone && <p><strong>Телефон:</strong> {member.contact.phone}</p>}
                </ProfileSection>
            )}
        </ProfileContainer>
    );
}
