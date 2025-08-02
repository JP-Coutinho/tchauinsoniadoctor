import styled from 'styled-components';

export const MenuContainer = styled.nav`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  padding: 32px 40px;
  min-width: 320px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 90%;
`;

export const MenuItem = styled.li`
  padding: 16px 0;
  font-size: 1.2rem;
  color: #0a1446;
  text-align: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f7f7f7;
  }
`;

export const Topbar = styled.header`
  width: 90%;
  height: 64px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  @media (max-width: 900px) {
    padding: 0 12px;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .dot {
    width: 16px;
    height: 8px;
    border-radius: 4px;
    display: block;
  }
  .dot1 { background: #ffd600; }
  .dot2 { background: #00e5e0; }
  .dot3 { background: #7c4dff; }
  .dot4 { background: #ff006e; margin-left: 8px; }
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0a1446;
`;

export const Nav = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  color: #0a1446;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #1976d2;
  }
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserName = styled.div`
  background: #f5f5f5;
  border-radius: 16px;
  padding: 8px 18px;
  font-size: 1rem;
  color: #0a1446;
  font-weight: 500;
`;

export const LogoutButton = styled.button`
  background: #f5f5f5;
  border: none;
  border-radius: 16px;
  padding: 8px 18px;
  font-size: 1rem;
  color: #0a1446;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e0e0e0;
  }
`;

export const NotificationArea = styled.div`
  position: relative;
  margin-left: 8px;
`;

export const NotificationIcon = styled.span`
  font-size: 1.5rem;
  color: #ff0000;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff0000;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 50%;
  padding: 2px 6px;
  font-weight: bold;
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  margin-left: 8px;
  cursor: pointer;
  z-index: 120;
  @media (max-width: 900px) {
    display: flex;
  }
  span {
    display: block;
    width: 22px;
    height: 3px;
    background: #1976d2;
    margin: 3px 0;
    border-radius: 2px;
    transition: 0.2s;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 72vw;
  max-width: 300px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 16px rgba(25,118,210,0.10);
  z-index: 200;
  display: flex;
  flex-direction: column;
  padding: 32px 18px 18px 18px;
  animation: slideIn 0.2s;
  @keyframes slideIn {
    from { right: -320px; opacity: 0; }
    to { right: 0; opacity: 1; }
  }
`;

export const MobileNavItem = styled.div`
  font-size: 1.1rem;
  color: #0a1446;
  padding: 14px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-weight: 500;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: #1976d2;
    background: #f5faff;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 150;
`;