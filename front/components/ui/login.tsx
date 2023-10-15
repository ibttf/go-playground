"use client";
import { signIn } from "next-auth/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import { FaGoogle, FaGithub } from "react-icons/fa";
export default function Login() {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <li>
        <a
          onClick={() => setIsOpen(true)}
          className="block py-2 pl-3 pr-4 text-gray-950 rounded hover:bg-gray-100"
        >
          <div className="flex items-center">
            <AiOutlineUser style={{ fontSize: "24px", color: "#333" }} />
          </div>
        </a>
      </li>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Sign In or Sign Up
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Signing in allows you to sync your data with our servers
                      (highly recommended).
                    </p>
                  </div>
                  <div className="mt-5 sm:mt-6 space-y-4">
                    <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
                      <button
                        type="button"
                        className="btn pl-3 border"
                        tabIndex={0}
                        onClick={() => signIn("google")}
                      >
                        <FaGoogle size={18} />
                        <span className="ml-3">Sign In With Google</span>
                      </button>
                      <button type="button" className="btn pl-3 border">
                        <FaGithub size={20} />
                        <span className="ml-3">Sign In With Github</span>
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
