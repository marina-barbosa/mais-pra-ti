import { useAuth } from '../contexts/authContext';

const LoginButton = () => {
  const { login } = useAuth();

  return <button onClick={login}>Login</button>;
};

export default LoginButton;
