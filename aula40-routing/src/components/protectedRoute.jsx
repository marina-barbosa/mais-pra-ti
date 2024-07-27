import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/loginreforcando" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
