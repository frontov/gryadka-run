// src/components/MemberDetail.js
import React from 'react';
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components';
import {theme} from '../theme';
import {members} from '../data/members';

const DetailContainer = styled.div`
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
`;

const BackLink = styled(Link)`
    display: inline-block;
    margin-bottom: 2rem;
    color: ${theme.colors.primary};
    text-decoration: none;

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
        margin-bottom: 1rem;
    }
`;

const ProfileInfo = styled.div`
    flex: 1;
`;

const Section = styled.section`
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
    color: ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
`;

const List = styled.ul`
    padding-left: 1.5rem;
`;

const ListItem = styled.li`
    margin-bottom: 0.5rem;
`;

const ContactInfo = styled.div`
    background-color: ${theme.colors.lightGray};
    padding: 1.5rem;
    border-radius: ${theme.radii.md};
`;

function MemberDetail() {
    const {id} = useParams();
    const member = members.find(m => m.id === id);

    if (!member) {
        return (
            <DetailContainer>
                <BackLink to="/team">← Вернуться к команде</BackLink>
                <h2>Тренер не найден</h2>
            </DetailContainer>
        );
    }

    return (
        <DetailContainer>
            <BackLink to="/team">← Вернуться к команде</BackLink>

            <ProfileHeader>
                <ProfileImage src={member.image} alt={member.name}/>
                <ProfileInfo>
                    <h2>{member.name}</h2>
                    <p><strong>{member.role}</strong></p>
                    <p>{member.bio}</p>
                    <p>
                        <a href={"mailto:" + member.contact.email} target="_blank"> почта </a>
                        ||
                        <a target="_blank" href={"https://t.me/" + member.contact.tg}
                           rel="nofollow noopener noreferrer"> телеграм </a>
                    </p>
                </ProfileInfo>
            </ProfileHeader>

            <Section>
                <SectionTitle>О тренере</SectionTitle>
                {member.fullBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </Section>

            <Section>
                <SectionTitle>Опыт работы</SectionTitle>
                <List>
                    {member.experience.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </List>
            </Section>

            <Section>
                <SectionTitle>Образование и сертификаты</SectionTitle>
                <List>
                    {member.education.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </List>
            </Section>

            <Section>
                <SectionTitle>Достижения</SectionTitle>
                <List>
                    {member.achievements.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </List>
            </Section>

            {/*<Section>*/}
            {/*    <SectionTitle>Контактная информация</SectionTitle>*/}
            {/*    <ContactInfo>*/}
            {/*        <h2>*/}

            {/*        </h2>*/}
            {/*    </ContactInfo>*/}
            {/*</Section>*/}
        </DetailContainer>
    );
}

export default MemberDetail;
