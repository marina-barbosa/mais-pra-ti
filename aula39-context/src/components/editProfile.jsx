import { useState } from 'react';
import { useUserProfile } from '../contexts/userProfileContext';

const EditProfile = () => {
  const { profile, updateProfile } = useUserProfile();
  const [newName, setNewName] = useState(profile.name);
  const [newEmail, setNewEmail] = useState(profile.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name: newName, email: newEmail });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='border w-full'
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Name"
      />
      <input className='border w-full'
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit" className='bg-sky-500 border w-full'>Update</button>
    </form>
  );
};

export default EditProfile;
