import Image from "next/image"
import {

  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from "@heroicons/react/outline"

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">

        {/* left  */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src='https://links.papareact.com/ocw' layout='fill' objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0">
          <Image
            src='https://links.papareact.com/jjm' layout='fill' objectFit="contain"
          />
        </div>
        {/* middle -> search input */}
        <div className="relative p-3 mt-1 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            {/* searchIcon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>
          <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black" type='text' placeholder='Search' />
        </div>
        {/* right  */}
      </div>
    </div>

  )
}

export default Header