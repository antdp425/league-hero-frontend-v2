import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
   return (
      <div>
         <NavLink to="/" exact >Home</NavLink>
         <NavLink to="/leagues" exact >Leagues</NavLink>
         <NavLink to="/teams" exact >Teams</NavLink>
      </div>
   )
}

export default Navbar
