import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom"
import { Nav, Form, Button, FormControl } from 'react-bootstrap'

const LeagueHeroNav = ({setSearchTerm}) => {

   return (
   <Navbar className="league-hero-nav" expand="sm" variant="dark">
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
      <Form inline>
         <FormControl onChange={(e) => setSearchTerm(e.target.value)} type="text" name="query" placeholder="Search" className="mr-sm-2" />
         <NavLink to="/results" exact> <Button variant="outline-success">Search</Button> </NavLink>
      </Form>
      </Navbar.Collapse>
   </Navbar>
   )
}

export default LeagueHeroNav
