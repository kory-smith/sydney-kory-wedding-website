/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "remix";

function styleNavLinkIfActive(isActive: boolean) {
  return isActive
    ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
}

function styleMobileLinkIfActive(isActive: boolean) {
  return isActive
    ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium";
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl bg-[#ECCEC1] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/favicon.ico"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/favicon.ico"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) => styleNavLinkIfActive(isActive)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/parking"
                    className={({ isActive }) => styleNavLinkIfActive(isActive)}
                  >
                    Parking
                  </NavLink>
                  <NavLink
                    to="/registry"
                    className={({ isActive }) => styleNavLinkIfActive(isActive)}
                  >
                    Registry
                  </NavLink>
                  <NavLink
                    to="Contact"
                    className={({ isActive }) => styleNavLinkIfActive(isActive)}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                to="/"
                className={({ isActive }) => styleMobileLinkIfActive(isActive)}
              >
                Home
              </NavLink>
              <NavLink
                to="/parking"
                className={({ isActive }) => styleMobileLinkIfActive(isActive)}
              >
                Parking
              </NavLink>
              <NavLink
                to="/registry"
                className={({ isActive }) => styleMobileLinkIfActive(isActive)}
              >
                Registry
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => styleMobileLinkIfActive(isActive)}
              >
                Contact
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
