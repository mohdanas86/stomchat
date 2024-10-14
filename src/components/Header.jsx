import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useMyContext } from "../context/MyContext";

// Language Array
// const Language = [
//   { id: 1, language: "English" },
//   { id: 2, language: "Spanish" },
//   { id: 3, language: "French" },
//   { id: 4, language: "German" },
//   { id: 5, language: "Chinese" },
//   { id: 6, language: "Italian" },
//   { id: 7, language: "Portuguese" },
//   { id: 8, language: "Russian" },
//   { id: 9, language: "Japanese" },
//   { id: 10, language: "Arabic" },
//   { id: 11, language: "Hindi" },
//   { id: 12, language: "Korean" },
//   { id: 13, language: "Turkish" },
//   { id: 14, language: "Bengali" },
//   { id: 15, language: "Vietnamese" },
//   { id: 16, language: "Thai" },
//   { id: 17, language: "Persian" },
//   { id: 18, language: "Malay" },
//   { id: 19, language: "Filipino" },
//   { id: 20, language: "Swahili" },
// ];

const Language = [
  // Top 5 languages of India
  { id: 1, language: "Hindi" },
  { id: 2, language: "Bengali" },
  { id: 3, language: "Telugu" },
  { id: 4, language: "Marathi" },
  { id: 5, language: "Tamil" },
  { id: 6, language: "Kannada" },

  // Additional languages from around the world
  { id: 7, language: "English" },
  { id: 8, language: "Mandarin Chinese" },
  { id: 9, language: "Spanish" },
  { id: 10, language: "Arabic" },
  { id: 11, language: "French" },
  { id: 12, language: "Russian" },
  { id: 13, language: "German" },
  { id: 14, language: "Japanese" },
  { id: 15, language: "Portuguese" },
  { id: 16, language: "Turkish" },
  { id: 17, language: "Korean" },
  { id: 18, language: "Vietnamese" },
  { id: 19, language: "Thai" },
  { id: 20, language: "Italian" },
  { id: 21, language: "Dutch" },
];

export default function Header() {
  const {
    login,
    setLogin,
    isLoggedIn,
    logoutUser,
    dark,
    setDark,
    language,
    setLanguage,
  } = useMyContext();

  // Cookie setup
  useEffect(() => {
    console.log("Selected Language:", language); // Log selected language

    if (language) {
      Cookies.set("lang", language, { path: "/" });
      localStorage.setItem("lang", language);
    } else {
      Cookies.remove("lang"); // Clear cookie if no language selected
      localStorage.removeItem("lang"); // Clear localStorage
    }
  }, [language]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`bg-white fixed z-50 top-0 w-full ${
        isLoggedIn ? "block" : "hidden"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">StomChat</span>
            <img
              alt="stomilar"
              src="https://stomilar-blog.onrender.com/loogo.jpg"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              {!language ? "language" : language}
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="langContainer p-4 lg:h-[60vh] overflow-y-scroll">
                {Language.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLanguage(item.language)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <span className="block font-semibold text-gray-900">
                        {item.language}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {isLoggedIn ? (
            <div className="darkMode">
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
          ) : (
            ""
          )}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            onClick={logoutUser}
            className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
          >
            Logout <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">StomChat</span>
              <img
                alt="stomchat"
                src="https://stomilar-blog.onrender.com/loogo.jpg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Language
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {Language.map((item) => (
                      <DisclosureButton
                        key={item.id}
                        onClick={() => setLanguage(item.language)}
                        as="span"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.language}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  onClick={logoutUser}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
