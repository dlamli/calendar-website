import { Button } from "@/calendar";
import { CalendarIcon, HamburgerIcon } from "@/global/icons";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="icon inline-flex gap-2">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <CalendarIcon className="size-6" currentColor="white" />
          </a>
          <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
            User
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button>Logout</Button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerIcon className="size-5" currentColor="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};
