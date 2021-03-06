/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

export default function Headers({ login }) {
  return (
    <Popover className="relative bg-gray-100 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-200 py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <NavLink to={"/blog/home"}>
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-12 w-auto sm:h-16"
                    src="https://phyllisfagell.com/wp-content/uploads/2017/03/blog-icon-Standard.png"
                    alt=""
                  />
                </NavLink>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex  items-center justify-end md:flex-1 lg:w-0">
                <NavLink
                  to={
                    localStorage.getItem("auth")
                      ? "/blog/CreatPost"
                      : "/blog/auth"
                  }
                  className="whitespace-nowrap cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Create Post
                </NavLink>
                <a
                  onClick={login}
                  className="ml-8 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {localStorage.getItem("auth") ? "Log out" : "Log in"}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
}
