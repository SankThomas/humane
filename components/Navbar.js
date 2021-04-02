import React from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  const [links, setLinks] = React.useState(navbar)

  return (
    <>
      <ul>
        {links.map(({ id, title }) => {
          return (
            <li key={id} className="my-2">
              {title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Navbar
