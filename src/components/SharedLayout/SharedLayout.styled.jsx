import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0;
`;

export const Header = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 40px;
  padding: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 600;
  font-size: 24px;

  &.active {
    color: var(--title-color);
  }
`;
