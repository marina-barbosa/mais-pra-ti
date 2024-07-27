import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();

  const user = {
    1: { name: 'Isaac', email: 'isaac@example.com' },
    2: { name: 'Hortência Flores', email: 'flores@example.com' },
  };
  const userInfo = user[userId] || { name: 'Not Found', email: 'empty' };

  return (
    <div>
      <h1>User Detail</h1>
      <p><strong>Name:</strong> {userInfo.name}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
    </div>
  );
};
export default UserDetail;
