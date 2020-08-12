import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom"
import { Nav, Form, Button, FormControl } from 'react-bootstrap'


const LeagueHeroNav = () => {
   return (
   <Navbar className="league-hero-nav" expand="sm">
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
      {/* <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-success">Search</Button>
      </Form> */}
      </Navbar.Collapse>
   </Navbar>
   )
}

export default LeagueHeroNav
