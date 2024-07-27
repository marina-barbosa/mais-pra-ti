import { Link } from "react-router-dom";

export function Header() {
  return (

    <header className=" bg-slate-700">
      <nav className="px-4 lg:px-10 py-2.5 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Routing</span>

        <ul className="flex flex-row font-medium lg:space-x-8 lg:mt-0">
          <Link to="/">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300" aria-current="page">Gallery</span>
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Profile</span>
            </li>
          </Link>
          <Link to="/settings">
            <li>
              <span className="block py-2 pr-4 pl-3 text-slate-100 hover:text-slate-400 transition-all duration-300">Settings</span>
            </li>
          </Link>
        </ul>

      </nav>
    </header>

  )
}