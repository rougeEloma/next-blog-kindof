import Link from "next/link"
import Image from "next/image"

import { CustomButton } from "."

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex max-w-[1200px] mx-auto justify-between items-center sm:px-12 px-6 py-4">
        <Link href="/" className="flex  justify-center items-center">
          <Image
          src="/logo.svg"
          alt="Car logo hub"
          width={118}
          height={18}
          className="object-contain"/>
        </Link>
        
        <CustomButton
          title="S'inscrire"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
      </nav>
    </header>
  )
}

export default NavBar