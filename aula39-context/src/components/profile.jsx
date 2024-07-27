import { useUserProfile } from '../contexts/userProfileContext';

const Profile = () => {
    const { profile } = useUserProfile();

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default Profile;
