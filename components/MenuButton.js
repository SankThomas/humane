import React from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { GrClose } from "react-icons/gr"

const MenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="hover:shadow-xl transition-all duration-500 p-2 rounded-lg">
        {isOpen ? (
          <GrClose
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <BiMenuAltRight
            className="text-4xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </>
  )
}

export default MenuButton
