import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import {
  Topbar,
  LogoArea,
  LogoIcon,
  LogoText,
  Nav,
  NavItem,
  UserArea,
  UserName,
  LogoutButton,
  HamburgerButton,
  MobileMenu,
  MobileNavItem,
  Overlay
} from './styles';

const Menu = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const userName = localStorage.getItem("userName") || "Médico";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      else
        localStorage.setItem("userName", user.displayName || user.email);
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error('Erro ao sair:', error);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  // Fecha o menu mobile ao navegar
  const handleNavigate = (path) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <>
      <Topbar>
        <LogoArea>
          <LogoIcon>
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
          </LogoIcon>
          <LogoText>Tchau Insônia Doctor</LogoText>
        </LogoArea>
        <Nav className="desktop-nav">
          <NavItem onClick={() => navigate("/")}>Lista de pacientes</NavItem>
          <NavItem onClick={() => navigate("/agenda")}>Minha agenda</NavItem>
          <NavItem onClick={() => navigate("/relatorio")}>Relatórios</NavItem>
          <NavItem>Cursos</NavItem>
        </Nav>
        <UserArea>
          {!isMobile && (
            <>
              <UserName>Olá, {userName}!</UserName>
              <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
            </>
          )}
          <HamburgerButton
            aria-label="Abrir menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </UserArea>
      </Topbar>
      {mobileOpen && (
        <>
          <Overlay onClick={() => setMobileOpen(false)} />
          <MobileMenu>
            <MobileNavItem onClick={() => handleNavigate("/")}>Lista de pacientes</MobileNavItem>
            <MobileNavItem onClick={() => handleNavigate("/agenda")}>Minha agenda</MobileNavItem>
            <MobileNavItem onClick={() => handleNavigate("/relatorio")}>Relatórios</MobileNavItem>
            <MobileNavItem>Cursos</MobileNavItem>
            <MobileNavItem as="div" style={{ borderTop: '1px solid #eee', marginTop: 12, paddingTop: 12 }}>
              <UserName style={{ margin: 0 }}>Olá, {userName}!</UserName>
              <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
            </MobileNavItem>
          </MobileMenu>
        </>
      )}
    </>
  );
};

export default Menu;