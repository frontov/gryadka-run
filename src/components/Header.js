import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import logo from '../images/logo.PNG'

const HeaderContainer = styled.header`
  background: ${theme.gradients.main};
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: ${theme.fonts.heading};

`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  color: ${theme.colors.light};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.light};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: ${theme.radii.sm};
  transition: all 0.3s ease;
  font-family: ${theme.fonts.heading};


  &:hover {
    background: rgba(255,255,255,0.1);
  }

  &.active {
    background: rgba(255,255,255,0.2);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img
              src={logo}
              alt="gryadka.run"
              height="50px"
          />
        </Logo>        <NavItems>
          <StyledNavLink to="/about">О нас</StyledNavLink>
          <StyledNavLink to="/training">Тренировки</StyledNavLink>
          <StyledNavLink to="/team">Команда</StyledNavLink>
          {/*<StyledNavLink to="/coaches">Coaches</StyledNavLink>*/}
          {/*<StyledNavLink to="/contacts">Contacts</StyledNavLink>*/}
          <StyledNavLink to="/gallery">Красивое</StyledNavLink>
        </NavItems>
      </Nav>
    </HeaderContainer>
  );
}