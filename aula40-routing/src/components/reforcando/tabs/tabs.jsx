import { Link, Outlet, useLocation } from 'react-router-dom';

const Tabs = () => {
  const location = useLocation();

  return (
    <div className="p-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="tab1"
              className={`p-2 rounded ${location.pathname.endsWith('tab1') ? 'bg-sky-500 text-white' : 'bg-slate-200'}`}
            >
              Aba 1
            </Link>
          </li>
          <li>
            <Link
              to="tab2"
              className={`p-2 rounded ${location.pathname.endsWith('tab2') ? 'bg-sky-500 text-white' : 'bg-slate-200'}`}
            >
              Aba 2
            </Link>
          </li>
          <li>
            <Link
              to="tab3"
              className={`p-2 rounded ${location.pathname.endsWith('tab3') ? 'bg-sky-500 text-white' : 'bg-slate-200'}`}
            >
              Aba 3
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-t">
        <Outlet />
      </div>
    </div>
  );
};

export default Tabs;