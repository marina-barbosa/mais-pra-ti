import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/authContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);

    if (username === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid username');
      setUsername('');
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded border w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 px-4 rounded-md border hover:bg-sky-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );

};
export default Login;