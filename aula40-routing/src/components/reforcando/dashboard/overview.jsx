import { Link, Outlet } from 'react-router-dom';
const Overview = () => {
  return (
    <div>
      <h2>Overview</h2>
      <p>Overview aqui. Overview works.</p>
      <nav>
        <ul>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="reports">Reports</Link></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Overview;