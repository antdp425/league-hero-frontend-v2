import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useHistory } from "react-router-dom"
import { Nav, Form, Button, FormControl } from 'react-bootstrap'

const LeagueHeroNav = () => {

   const [searchTerm, setSearchTerm] = useState("")
   let history = useHistory()

   const handleSubmit = (e) => {
      e.preventDefault()
      history.push(`/results/${searchTerm}`)
      setSearchTerm("")
   }

   return (

      <Navbar className="league-hero-nav" 
            expand="sm" 
            variant="dark"
            sticky="top">

         <Navbar.Brand>
            <NavLink to="/" exact >League Hero</NavLink>
         </Navbar.Brand>

         <Navbar.Toggle aria-controls="lh-nav"/>
         <Navbar.Collapse id="lh-nav">
            <Nav className="mr-auto">
               <Nav.Link>
                  <NavLink to="/leagues" exact >Leagues</NavLink>
               </Nav.Link>
               <Nav.Link>
                  <NavLink to="/teams" exact >Teams</NavLink>
               </Nav.Link>
            </Nav>
         <Form inline onSubmit={handleSubmit}>
            <FormControl onChange={(e) => setSearchTerm(e.target.value)} 
                        value={searchTerm}
                        type="text" 
                        name="query" 
                        placeholder="Search" 
                        className="mr-sm-2" />
            <Button disabled={searchTerm === ""} 
                    type="submit" 
                    variant="outline-success">Search</Button>
         </Form>
         </Navbar.Collapse>
      </Navbar>
      
   )
}

export default LeagueHeroNav
