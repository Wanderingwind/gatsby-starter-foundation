import React, { useState } from "react";
import Logo from "./logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-purple-300 ">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 " >
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Madeleine Deliee"
            title="Madeleine Deliee"
            className="inline-flex items-center"
          >
            <svg class="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 751.92 740.05"><defs /><g data-name="Layer 2"><g fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-miterlimit="10" stroke-width="16" data-name="Layer 1"><path d="M371.38 400.77c-2.7-1.5 17.94-39.89 42.18-102.95h0c48.52-126.66 85.63-265.27 279.36-287.76 32.22-3.78 51-1.44 51-.12.06 2-18.6 2.82-49.56 9C501.3 57.36 476.64 183.56 425.2 302.56h0c-27.3 62.88-52.08 99.18-53.82 98.21z" /><path d="M421.66 316.18c-2.82-1.86 15.66-33.78 42.66-78.42 30.1-49.54 61.48-100.76 115.56-134.22 13.38-8.28 22.12-11.46 22.86-10.14 1 1.5-6.06 7.26-17.58 17.28-54.81 48-71.81 80.63-108.36 135-29.22 43.62-52.44 72.36-55.14 70.5z" /><path d="M419.86 321.46c-.84-1.92 14.7-10.14 39-26.16 95.73-63.13 130.15-121.83 190.38-196 43.62-53.76 78-85.86 80-84 2.46 2.28-27.9 37.86-68.94 92.7-62.14 83.1-106.79 148-196.4 195.82-26.28 14-43.32 19.08-44 17.64z" /><g><path d="M357.34 233.57c.43-1.11-26.62-18.91-80.72-24.24-23.69-2.34-52.48-1.2-84.59 5h0c-27.24 125.87-56.43 274.6-66.39 324.43 93.9 2.48 221.54 22.33 331.93 70.91 45.18 19.88 69.87 37.06 71.48 34.59 1.05-1.71-21.4-20.76-65.81-44.53-95.78-51.47-211.46-81.28-323.69-72.42 5.95-26.89 37.79-177.43 63.09-302h0a355.8 355.8 0 0172.54-3.07c51.8 3.07 80.89 15 82.16 11.37z" /><path d="M192.32 243.29c.27-1.15-34.76-11.77-77-2.12C90.09 327.45 55.49 459.74 10.88 635c120.86-23.81 281.78-28.37 425.3.86 58.22 11.91 91.7 23.14 92.75 20.14.71-2-31.19-17.88-89.45-33.83-150.89-41.34-278.43-37.48-419.91 4.31C66.38 461.94 101 337 122.68 248.93c23.64-4.79 44-4.62 67.78 1z" /><path d="M59.74 619l-30 109.55c186.43-52.28 257-66.84 409.81-65.18 55.5.61 91.29 7.89 91.8 4.27.44-2.89-33.41-10.66-89.58-17.42-186-22.39-326.47 36.23-402.29 66.64l27.83-97.25z" /></g></g></g></svg>
            <span className="text-xl tracking-wide text-gray-100 logo-text">
              Madeleine Deliee
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/blog"
                aria-label="My Musings"
                title="My Musings"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/about"
                aria-label="About Me"
                title="About Me"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About Me
              </a>
            </li>

            <li>
              <a
                href="/contact"
                aria-label="Contact Me"
                title="Contact Me"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact Me
              </a>
            </li>

          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Madeleine Deliee"
                        title="Madeleine Deliee"
                        className="inline-flex items-center"
                      >
                        <svg class="w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 751.92 740.05"><defs /><g data-name="Layer 2"><g fill="#af63a8" fill-rule="evenodd" stroke="#af63a8" stroke-miterlimit="10" stroke-width="16" data-name="Layer 1"><path d="M371.38 400.77c-2.7-1.5 17.94-39.89 42.18-102.95h0c48.52-126.66 85.63-265.27 279.36-287.76 32.22-3.78 51-1.44 51-.12.06 2-18.6 2.82-49.56 9C501.3 57.36 476.64 183.56 425.2 302.56h0c-27.3 62.88-52.08 99.18-53.82 98.21z" /><path d="M421.66 316.18c-2.82-1.86 15.66-33.78 42.66-78.42 30.1-49.54 61.48-100.76 115.56-134.22 13.38-8.28 22.12-11.46 22.86-10.14 1 1.5-6.06 7.26-17.58 17.28-54.81 48-71.81 80.63-108.36 135-29.22 43.62-52.44 72.36-55.14 70.5z" /><path d="M419.86 321.46c-.84-1.92 14.7-10.14 39-26.16 95.73-63.13 130.15-121.83 190.38-196 43.62-53.76 78-85.86 80-84 2.46 2.28-27.9 37.86-68.94 92.7-62.14 83.1-106.79 148-196.4 195.82-26.28 14-43.32 19.08-44 17.64z" /><g><path d="M357.34 233.57c.43-1.11-26.62-18.91-80.72-24.24-23.69-2.34-52.48-1.2-84.59 5h0c-27.24 125.87-56.43 274.6-66.39 324.43 93.9 2.48 221.54 22.33 331.93 70.91 45.18 19.88 69.87 37.06 71.48 34.59 1.05-1.71-21.4-20.76-65.81-44.53-95.78-51.47-211.46-81.28-323.69-72.42 5.95-26.89 37.79-177.43 63.09-302h0a355.8 355.8 0 0172.54-3.07c51.8 3.07 80.89 15 82.16 11.37z" /><path d="M192.32 243.29c.27-1.15-34.76-11.77-77-2.12C90.09 327.45 55.49 459.74 10.88 635c120.86-23.81 281.78-28.37 425.3.86 58.22 11.91 91.7 23.14 92.75 20.14.71-2-31.19-17.88-89.45-33.83-150.89-41.34-278.43-37.48-419.91 4.31C66.38 461.94 101 337 122.68 248.93c23.64-4.79 44-4.62 67.78 1z" /><path d="M59.74 619l-30 109.55c186.43-52.28 257-66.84 409.81-65.18 55.5.61 91.29 7.89 91.8 4.27.44-2.89-33.41-10.66-89.58-17.42-186-22.39-326.47 36.23-402.29 66.64l27.83-97.25z" /></g></g></g></svg>
                        <span className="text-xl tracking-wide text-purple-300  logo-text">
                          Madeleine Deliee
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/blog"
                          aria-label="My Musings"
                          title="My Musings"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          aria-label="About Me"
                          title="About Me"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Me
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          aria-label="Contact Me"
                          title="Contact Me"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact Me
                        </a>
                      </li>

                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation