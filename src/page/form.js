import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-20 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div class="flex space-x-5 mt-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                  className="border p-2  w-1/2"
                />
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Your Surname"
                  className="border p-2 w-1/2"
                />
              </div>
            </div>

            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="border p-2 w-full mt-3"
            />

            <div className="flex space-x-5 mt-3">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Country
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-2"
                  id="grid-city"
                  type="text"
                  placeholder="USA"
                />
              </div>
              <div className="md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-2"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
              </div>
            </div>
            <div className="flex space-x-5 mt-3">
              <div className="w-1/2 mb-6">
                <label
                  for="username"
                  className="block uppercase tracking-wide text-grаy-700 text-xs font-bold mb-2"
                >
                  <span className="text-red-500">&nbsp;*</span>username
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <input
                    id="username"
                    className="block appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-300 ease-in-out"
                    placeholder="you@example.com"
                    autocomplete="off"
                  />
                </div>
                <strong class="text-red-500 text-xs italic">
                  username is require
                </strong>
              </div>
              <div className="w-1/2 mb-6">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    className="block appearance-none border-2 border-orange-100 rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-300 ease-in-out"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-grey-dark text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
