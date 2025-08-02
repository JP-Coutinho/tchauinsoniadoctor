import React, { useEffect } from 'react';
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
  NotificationArea,
  NotificationIcon,
  NotificationBadge
} from './styles';

const Menu = ({ userName = "Usuário" }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear(); // Limpa dados do usuário, se necessário
      navigate("/login"); // Redireciona para a tela de login
    } catch (error) {
      console.error('Erro ao sair:', error);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <Topbar>
      <LogoArea>
        <LogoIcon>
          <span className="dot dot1" />
          <span className="dot dot2" />
          <span className="dot dot3" />
          <span className="dot dot4" />
        </LogoIcon>
        <LogoText>Tchau Insônia</LogoText>
      </LogoArea>
      <Nav>
        <NavItem onClick={() => navigate("/")}>Lista de pacientes</NavItem>
        <NavItem onClick={() => navigate("/agenda")}>Minha agenda</NavItem>
        <NavItem onClick={() => navigate("/relatorio")}>Relatórios</NavItem>
        <NavItem>Cursos</NavItem>
      </Nav>
      <UserArea>
        <UserName>Olá, {userName}!</UserName>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        <NotificationArea>
          <NotificationIcon>🔔</NotificationIcon>
          <NotificationBadge>1</NotificationBadge>
        </NotificationArea>
      </UserArea>
    </Topbar>
  );
};

export default Menu;