import React from "react"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import Navbar from "./Navbar"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <header className="flex items-center justify-center py-2 lg:fixed lg:w-full">
        {!isOpen && (
          <div>
            <Logo />
          </div>
        )}

        {isOpen && (
          <nav>
            <Navbar />
          </nav>
        )}

        <div className="absolute left-5">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  )
}

export default Header
