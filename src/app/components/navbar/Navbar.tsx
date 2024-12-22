"use client";

import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/outline';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const { data: session } = useSession();

  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm top-0 left-0">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link href="/" className="text-rose-500 text-xl font-bold">
              <div className="hidden md:block">
                Airbnb
              </div>
              <div className="block md:hidden">
                <svg className="block h-8 w-auto fill-rose-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="Airbnb homepage">
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.386 3.223 0 5.156 2.473 5.156 5.386 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01 0-3.177 1.514-3.177 3.387 0 1.971 1.305 4.924 3.27 7.429.59-.739 1.1-1.509 1.537-2.287l.297-.524c.62-1.135 1.14-2.277 1.14-3.532v-.043c-.022-1.847-1.216-3.43-3.053-3.43h-.014z"></path>
                </svg>
              </div>
            </Link>

            {/* Search */}
            <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">Anywhere</div>
                <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">Any week</div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                  <div className="hidden sm:block">Add guests</div>
                  <div className="p-2 bg-rose-500 rounded-full text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex flex-row items-center gap-3">
              <div 
                onClick={registerModal.onOpen}
                className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
              >
                Airbnb your home
              </div>
              <div className="hidden md:block">
                <GlobeAltIcon className="h-5 w-5 text-neutral-500" />
              </div>
              <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition" onClick={session ? undefined : () => loginModal.onOpen()}>
                <Bars3Icon className="h-5 w-5" />
                <div className="hidden md:block">
                  {session ? (
                    <img src={session.user?.image || '/images/placeholder.jpg'} alt="Profile" className="rounded-full h-8 w-8" />
                  ) : (
                    <UserCircleIcon className="h-8 w-8 text-neutral-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
