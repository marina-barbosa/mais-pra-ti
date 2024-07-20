import { useEffect } from 'react'

const Header = () => {

  useEffect(() => {
    const hamburgerButton = document.querySelector("#hamburgerButton");
    const closeButton = document.querySelector("#closeButton");
    const mobileMenu = document.querySelector("#mobileMenu");

    if (hamburgerButton && closeButton && mobileMenu) {
      const openMenu = () => {
        mobileMenu.classList.add("flex")
        mobileMenu.classList.remove("hidden")
      };
      const closeMenu = () => {
        mobileMenu.classList.add("hidden")
        mobileMenu.classList.remove("flex")
      };

      hamburgerButton.addEventListener("click", openMenu);
      closeButton.addEventListener("click", closeMenu);

      // Cleanup para remover os event listeners quando o componente for desmontado
      return () => {
        hamburgerButton.removeEventListener("click", openMenu);
        closeButton.removeEventListener("click", closeMenu);
      };
    } else {
      console.error("Elementos não encontrados");
    }
  }, []);

  return (
    <header>
      <nav className="navbar bg-neutral-700 text-neutral-200 flex justify-between items-center rounded px-8 py-2 h-16">
        <div className="logo text-3xl font-bold hover:text-sky-400 transition duration-500 ease-in-out cursor-pointer">dev-resources-hub</div>
        <ul className="nav-links-desktop hidden md:flex">
          <li className='px-4 transition duration-300 hover:text-sky-400 cursor-pointer'>Referências</li>
          <li className='px-4 transition duration-300 hover:text-sky-400 cursor-pointer'>Ferramentas</li>
          <li className='px-4 transition duration-300 hover:text-sky-400 cursor-pointer'>Editores</li>
        </ul>
        <div id="mobileMenu" className="hidden md:hidden flex-col bg-neutral-900 pt-12 text-neutral-200 p-4 fixed top-0 right-0 w-3/5 h-full bg-opacity-90 items-center text-2xl z-50">
          <button id='closeButton' className='close self-end mb-4 mr-12 text-4xl'>
            <i className="fas fa-times"></i>
          </button>
          <ul className="nav-links-mobile flex flex-col text-center items-center w-full list-none">
            <li className='text-xl border-b border-solid border-neutral-700 p-5 w-80  hover:text-sky-400 cursor-pointer transition duration-300'>Referências</li>
            <li className='text-xl border-b border-solid border-neutral-700 p-5 w-80  hover:text-sky-400 cursor-pointer transition duration-300'>Ferramentas</li>
            <li className='text-xl border-b border-solid border-neutral-700 p-5 w-80  hover:text-sky-400 cursor-pointer transition duration-300'>Editores</li>
          </ul>
        </div>
        <button id='hamburgerButton' className='hamburger block md:hidden'>
          <i className="fas fa-bars text-neutral-200 text-3xl"></i>
        </button>
      </nav>
    </header>
  )
}

export default Header


