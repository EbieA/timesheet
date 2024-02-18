"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui/button";

const products = [
  {
    name: "Sub Contractor",
    href: "#",
  },
  {
    name: "HR Management",
    href: "#",
  },
  {
    name: "Enterpreneur",
    href: "#",
  },
  {
    name: "Recruiters",
    href: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="h-20 flex top-0 bg-white shadow items-center justify-center fixed z-30 w-full">
        <nav
          className="flex gap-x-32 justify-between items-center p-6 container mx-auto"
          aria-label="Global"
        >
          <div className="flex w-auto">
            <Link href="/" className="flex items-center">
              <Image alt="logo" src="/logo.png" width={38} height={38} />
              <Image
                className="ml-2"
                alt="logo"
                src="/ADMIN-TIMESHEET.svg"
                width={184}
                height={14}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden justify-center item-center lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex focus:outline-none items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900">
                Use Cases
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-4 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="/pricing"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Book a Demo
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us
            </a>
          </Popover.Group>
          <div className="flex justify-center items-center">
            <div className="hidden lg:flex space-x-4">
              <Button className=" w-[114.74px] h-[45px] bg-teal-500 rounded-lg hover hover:bg-teal-400 active:bg-teal-300 focus:outline-none focus:ring focus:ring-teal-300">
                Sign Up
              </Button>
              <Button className="w-[115.74px] h-[45px] bg-white rounded-lg border border-teal-500 text-teal-500 hover:bg-white active:bg-white focus:outline-none focus:ring focus:ring-gray-100">
                Login
              </Button>
            </div>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden fixed inset-0 z-50 overflow-y-auto"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex p-6">
              <button
                type="button"
                className="-m-6.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Use Cases
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Book a Session
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="py-6">
                  <div className="flex justify-center items-center space-x-4">
                    <Button className=" w-[114.74px] h-[45px] bg-teal-500 rounded-lg">
                      Sign Up
                    </Button>
                    <Button className="w-[115.74px] h-[45px] bg-white rounded-lg border border-teal-500 text-teal-500">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
