// src/components/Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// --- Import your images ---
// Adjust the paths based on where you saved your images
import heroImage from '../images/feature5.jpg'; // Example path
import feature1Image from '../images/feature1.jpg'; // Example path
import feature2Image from '../images/feature2.jpg'; // Example path
import feature3Image from '../images/feature3.jpg'; // Example path
import feature4Image from '../images/feature4.jpg'; // Example path

import { Link } from 'react-router-dom';

// --- Styled Components ---

// ... (keep HomeWrapper, HeroSection, MainHeading, SubHeading, MainContent, FeaturesGrid)


// ... (keep FeatureText, CallToAction, StyledButton, Footer)


// Simple fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Slide-in from bottom animation
const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Gentle pulse animation for emphasis (optional)
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;


// --- Styled Components ---

const HomeWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  overflow-x: hidden; // Prevent horizontal scrollbars caused by animations
`;

const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  min-height: 60vh; // Adjust height as needed
  padding: 40px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage}) no-repeat center center/cover;
  color: white;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-out; // Fade in the whole section
`;

const MainHeading = styled.h1`
  font-size: 3rem; // Responsive font size
  //margin-bottom: 15px;
  margin-top: 0;  
  animation: ${slideInUp} 1s ease-out 0.5s; // Slide in after section fades in
  animation-fill-mode: backwards; // Apply start state before animation begins
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  animation: ${slideInUp} 1s ease-out 0.8s; // Slide in slightly later
  animation-fill-mode: backwards;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MainContent = styled.main`
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto; // Center content
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // Responsive grid
  gap: 30px;
  margin-top: 40px;
`;

const FeatureText = styled.div`
  padding: 20px;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #555;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin: 60px 0;
  padding: 30px;
  background-color: #e7f3ff; // Light blue background
  border-radius: 8px;
  opacity: 0; // Start hidden
  animation: ${fadeIn} 1s ease-out 1.8s forwards; // Fade in last
`;

// NEW: Styled wrapper for the image link
const ImageLink = styled(Link)`
  display: block; /* Make the link a block element to contain the image */
  text-decoration: none; /* Remove default underline */
  color: inherit; /* Inherit text color (though not visible for image) */
  line-height: 0; /* Prevent potential extra space below the image */
  border-radius: 8px 8px 0 0; /* Match top corners of the card if image is first */
  overflow: hidden; /* Ensure image stays within rounded corners */

  &:focus {
    outline: 2px solid ${props => props.theme.primary || '#007bff'}; /* Add focus outline for accessibility */
    outline-offset: 2px;
  }
`;


const FeatureCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:nth-child(1) { animation-delay: 1.2s; }
  &:nth-child(2) { animation-delay: 1.4s; }
  &:nth-child(3) { animation-delay: 1.6s; }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block; /* Ensure image behaves like a block */
`;


const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: ${pulse} 2s infinite 2.5s; // Start pulsing after delay

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
    animation-play-state: paused; // Stop pulsing on hover
  }
`;


const Footer = styled.footer`
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #eee;
  font-size: 0.9em;
  color: #777;
  opacity: 0; // Start hidden
  animation: ${fadeIn} 1s ease-out 2s forwards; // Fade in very last
`;


/**
 * A Home page component with images and basic animations.
 */
const Home = () => {
    return (
        <HomeWrapper>
            <HeroSection>
                <MainHeading>Тут вам не овощебаза</MainHeading> {/* Changed site name */}
                <SubHeading>
                    {/*Тут вам не овощебаза*/}
                </SubHeading>
            </HeroSection>

            <MainContent>
                {/*<h2>Our Features</h2>*/}
                <FeaturesGrid>
                    <FeatureCard>
                        <ImageLink to="/about">
                            <FeatureImage src={feature1Image} alt="Navigate to Feature Three details" />
                        </ImageLink>
                        <FeatureText>
                            <h3>О нас</h3>
                            {/*<p>Explain the third highlight or benefit for the user.</p>*/}
                        </FeatureText>
                    </FeatureCard>
                    <FeatureCard>
                        <ImageLink to="/training">
                            <FeatureImage src={feature2Image} alt="Navigate to Feature Three details" />
                        </ImageLink>
                        <FeatureText>
                            <h3>Тренироваться с нами</h3>
                            {/*<p>Explain the third highlight or benefit for the user.</p>*/}
                        </FeatureText>
                    </FeatureCard>

                    <FeatureCard>
                        <ImageLink to="/team">
                            <FeatureImage src={feature3Image} alt="Navigate to Feature Three details" />
                        </ImageLink>
                        <FeatureText>
                            <h3>Наша команда</h3>
                            {/*<p>Explain the third highlight or benefit for the user.</p>*/}
                        </FeatureText>
                    </FeatureCard>
                    <FeatureCard>
                        <ImageLink to="/gallery">
                            <FeatureImage src={feature4Image} alt="Navigate to Feature Three details" />
                        </ImageLink>
                        <FeatureText>
                            <h3>#wearegryadka</h3>
                            {/*<p>Explain the third highlight or benefit for the user.</p>*/}
                        </FeatureText>
                    </FeatureCard>

                </FeaturesGrid>

                {/*<CallToAction>*/}
                {/*    <h2>Ready to Dive In?</h2>*/}
                {/*    <p>Explore more or get started today!</p>*/}
                {/*    /!* You might want to link this button using react-router-dom later *!/*/}
                {/*    <StyledButton onClick={() => alert('Button Clicked!')}>*/}
                {/*        Get Started*/}
                {/*    </StyledButton>*/}
                {/*</CallToAction>*/}

            </MainContent>

        </HomeWrapper>
    );
};

export default Home;
