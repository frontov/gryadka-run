// src/components/Team.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import { members } from '../data/members';

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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  }
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProfileLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${theme.radii.sm};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

export default function Team() {
    return (
        <TeamContainer>
            <h2>Наша Команда</h2>
            <MemberGrid>
                {members.map((member) => (
                    <MemberCard key={member.id}>
                        <MemberImage
                            src={member.image}
                            alt={member.name}
                        />
                        <h3>{member.name}</h3>
                        <p><strong>{member.role}</strong></p>
                        <p>{member.bio}</p>
                        <ProfileLink to={`/team/${member.id}`}>
                            Подробнее
                        </ProfileLink>
                    </MemberCard>
                ))}
            </MemberGrid>
        </TeamContainer>
    );
}
