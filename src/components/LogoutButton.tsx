"use client";
import { logout } from "../auth/actions/logout";

export const LogoutButton = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Login - OTP
        </span>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <button
            onClick={() => logout()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
