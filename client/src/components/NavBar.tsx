import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Daily Activity Log", href: "#", current: false },
  { name: "Income and Expenses Tracker", href: "#", current: false },
  { name: "Crop Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="text-white">
      <Disclosure as="nav" className="bg-green-700 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center">
              <img src="logo.png" className="h-12 w-auto" alt="Logo" />
              <p className="text-2xl font-bold text-white px-4">KRISHI SATHI</p>
            </div>

            {/* Centered Navigation Links */}
            <div className="hidden sm:flex flex-1 justify-center">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      "text-white font-semibold text-lg px-4 py-2 rounded-md transition",
                      item.current ? "bg-green-900" : "hover:bg-green-600"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Notification Bell & Profile Dropdown */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-2 text-green-700 hover:bg-gray-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700 focus:outline-none"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <Menu as="div" className="relative">
                <MenuButton className="relative flex rounded-full bg-green-700 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700 focus:outline-none">
                  <img
                    alt="User Avatar"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-10 w-10 rounded-full"
                  />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-none"
                >
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
