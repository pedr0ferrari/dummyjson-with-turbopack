import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-4 navbar bg-base-100 drop-shadow-md">
      <div className="flex-1 navbar-start">
        <Link className="text-xl normal-case btn btn-ghost" href="/">
          dr34m human resources
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="hidden gap-8 p-2 bg-base-100 md:flex">
          <li>
            <Link className="cursor-pointer btn btn-ghost" href="/">
              Homepage
            </Link>
          </li>
        </ul>

        <div className="dropdown dropdown-left md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <Link className="cursor-pointer btn btn-ghost" href="/">
              Homepage
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
