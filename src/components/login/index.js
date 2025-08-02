import React, { useEffect, useState } from 'react';
import { auth, provider } from '../../firebase/config';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import ListaPacientes from '../../pages/listaPaciente/ListaPacientes';
import {
  Container,
  Card,
  Title,
  Label,
  Input,
  ButtonRow,
  Button,
  GoogleButton,
  GoogleIcon,
  ErrorMessage
} from './styles';

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Usuário ou senha inválidos.');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError('Erro ao entrar com o Google.');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (user) {
    return <ListaPacientes userName={user.displayName || user.email} />;
  }

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
        />
        <Label>Senha</Label>
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <ButtonRow>
          <Button onClick={handleLogin}>Entrar</Button>
          <GoogleButton onClick={handleGoogleLogin}>
            <GoogleIcon src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
            Entrar com Google
          </GoogleButton>
        </ButtonRow>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Card>
    </Container>
  );
};

export default Login;