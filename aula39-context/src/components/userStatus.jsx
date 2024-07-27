import { useAuth } from '../contexts/authContext';

const UserStatus = () => {
    const { isAuthenticated } = useAuth();

    return <p>{isAuthenticated ? 'Logged in' : 'Logged out'}</p>;
};

export default UserStatus;
