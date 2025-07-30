import { NavLink } from 'react-router-dom';
import { Home, BanknoteArrowDown, Landmark, PiggyBank } from 'lucide-react';

const navLinks = [
  { to: '/dashboard', icon: <Home />, label: 'Dashboard' },
  { to: '/transactions', icon: <BanknoteArrowDown />, label: 'Transactions' },
  { to: '/accounts', icon: <Landmark />, label: 'Accounts' },
  { to: '/budget', icon: <PiggyBank />, label: 'Budget' },
];

export const SideBar = () => {
  return (
    <div className="sticky top-0 left-0 bottom-0 h-full">
      <div className="flex h-screen w-16 flex-col justify-between border-e border-gray-100 bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              L
            </span>
          </div>

          <div className=" border-gray-100">
            <div className="px-2">
              <ul className="space-y-4 border-t border-gray-100 pt-4">
                {navLinks.map((link) => (
                  <li>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `t group relative flex justify-center rounded-lg  px-2 py-1.5 hover:bg-blue-50 ${
                          isActive ? 'bg-blue-50 text-blue-700' : ''
                        }`
                      }
                    >
                      {link.icon}
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        {link.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <a
            href="#"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
