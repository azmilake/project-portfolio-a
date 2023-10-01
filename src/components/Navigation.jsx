import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <header className="max-w-full lg:max-w-7xl mx-auto px-4 font-poppins py-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="w-28">
            <img src="/images/logo.svg" />
          </div>
        </Link>

        <button
          className={[
            'w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50',
            menu ? ' fixed right-4' : 'relative text-inherit',
          ].join(' ')}
          onClick={toggleMenu}
        >
          <span>{menu ? <CloseIcon /> : <MenuIcon />}</span>
        </button>

        <div
          className={[
            'lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20',
            menu
              ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-white'
              : 'hidden opacity-0 h-0 invisible',
          ].join(' ')}
        >
          <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0">
            <li>
              <Link
                to="/"
                className="px-4 lg:text-gray-900 text-base hover:text-red-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/hotels"
                className="px-4 lg:text-gray-900 text-base hover:text-red-500"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/flights"
                className="px-4 lg:text-gray-900 text-base hover:text-red-500"
              >
                Rewards
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="px-4 lg:text-gray-900 text-base hover:text-red-500"
              >
                Sign Up
              </Link>
            </li>
            <li className="mt-6 lg:mt-0">
              <Link
                to="/login"
                className="px-8 py-3 bg-green-600 rounded-lg mx-3 text-white"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
