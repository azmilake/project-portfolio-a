import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavigationAuth() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <header className="max-w-full lg:max-w-7xl mx-auto px-4 font-poppins py-4">
      <div className="flex justify-between items-center">
        <div className="w-28">
          <Link to="/">
            <img src="/images/logo.svg" />
          </Link>
        </div>

        <button
          className={[
            'w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50',
            menu ? ' fixed right-4' : 'relative text-inherit',
          ].join(' ')}
          onClick={toggleMenu}
        >
          <span className="text-black">
            {menu ? <CloseIcon /> : <MenuIcon />}
          </span>
        </button>

        <div
          className={[
            'lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20',
            menu
              ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-white'
              : 'hidden opacity-0 h-0 invisible',
          ].join(' ')}
        >
          <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0 text-black">
            <li>
              <Link
                to="/"
                className="px-4 lg:text-gray-900  text-base hover:text-red-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="px-4 lg:text-gray-900  text-base hover:text-red-500"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="px-4 lg:text-gray-900  text-base hover:text-red-500"
              >
                Rewards
              </Link>
            </li>
            <div className="divider divider-horizontal hidden md:flex"></div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/profile.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a href="/login">Logout</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body text-white">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-green-500">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
