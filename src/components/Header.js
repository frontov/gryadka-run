import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background: ${theme.gradients.main};
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: relative;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 40px;

  img {
    height: 100%;
    width: auto;
    max-width: 180px;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav =  styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.primary};
  padding: 1rem;
  gap: 1rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  animation: ${({ $isOpen }) => $isOpen ? 'slideDown 0.3s ease' : 'none'};

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.light};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: ${theme.radii.sm};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
  }

  &.active {
    background: rgba(255,255,255,0.2);
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <HeaderContainer>
        <Nav>
          <Logo to="/">
            <img
                src={require('../images/logo.PNG')}
                alt="Gryadka.Run Logo"
            />
          </Logo>

          {/* Десктопное меню */}
          <DesktopNav>
            <StyledNavLink to="/about">О нас</StyledNavLink>
            <StyledNavLink to="/training">Тренировки</StyledNavLink>
            <StyledNavLink to="/team">Команда</StyledNavLink>
            <StyledNavLink to="/gallery">Красивое</StyledNavLink>
            {/*<StyledNavLink to="/contacts">Contacts</StyledNavLink>*/}
          </DesktopNav>

          {/* Мобильное меню */}
          <MobileMenuButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuButton>

          <MobileNav $isOpen={isMenuOpen}>
            <StyledNavLink to="/about" onClick={closeMenu}>О нас</StyledNavLink>
            <StyledNavLink to="/training" onClick={closeMenu}>Тренировки</StyledNavLink>
            <StyledNavLink to="/team" onClick={closeMenu}>Команда</StyledNavLink>
            <StyledNavLink to="/gallery" onClick={closeMenu}>Красивое</StyledNavLink>
          </MobileNav>
        </Nav>
      </HeaderContainer>
  );
}