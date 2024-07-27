import { Link } from "react-router-dom";

export function HeaderReforcando() {
  return (

    <header className=" bg-slate-700">
      <nav className="px-4 lg:px-10 py-2.5 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Routing</span>

        <ul className="flex flex-row font-medium lg:space-x-8 lg:mt-0">

          <Link to="/">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300" aria-current="page">UserDetail</span>
            </li>
          </Link>

          <Link to="/dashboard">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Dashboard</span>
            </li>
          </Link>

          <Link to="/modal">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Modal Routes</span>
            </li>
          </Link>

          <Link to="/heavy1">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Heavy 1</span>
            </li>
          </Link>

          <Link to="/heavy2">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Heavy 2</span>
            </li>
          </Link>

          <Link to="/tab">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Tabs</span>
            </li>
          </Link>


          <Link to="/search">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Search</span>
            </li>
          </Link>

          <Link to="/search-results">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Search Results</span>
            </li>
          </Link>


          <Link to="/loginreforcando">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Login</span>
            </li>
          </Link>

        </ul>

      </nav>
    </header>

  )
}