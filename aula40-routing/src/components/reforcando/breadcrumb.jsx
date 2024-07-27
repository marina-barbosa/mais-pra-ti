import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb" className="bg-slate-100 p-4 rounded-md border mb-4">
      <ol className="flex space-x-2 text-slate-700">
        <li>
          <Link to="/" className="text-sky-500 hover:text-sky-700">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li
              key={to}
              className="flex items-center"
              aria-current={index === pathnames.length - 1 ? 'page' : undefined}
            >
              <span className="mx-2 text-slate-500">/</span>
              {index === pathnames.length - 1 ? (
                <span className="font-semibold text-slate-900">{value}</span>
              ) : (
                <Link to={to} className="text-sky-500 hover:text-sky-700">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;