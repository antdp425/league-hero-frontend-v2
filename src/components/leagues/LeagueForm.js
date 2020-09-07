import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addLeague } from '../../actions/leagues'
import { useEffect } from 'react'
import { Col, Button } from 'react-bootstrap'
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";


function LeagueForm({history, match, leagues, addLeague, errors, leagueErrors}) {

   useEffect(() => {
      clearForm()
    },[leagues])

   const formats = ["3v3", "5v5", "7v7", "11v11"]
   const [leagueName, setLeagueName] = useState("")
   const [leagueFormat, setLeagueFormat] = useState("")
   const [leagueStart, setLeagueStart] = useState("")
   const [leagueEnd, setLeagueEnd] = useState("")

   const clearForm = () => {
      setLeagueName("")
      setLeagueFormat("")
      setLeagueStart("")
      setLeagueEnd("")
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      addLeague({
         name: leagueName,
         league_format: leagueFormat,
         start_date: leagueStart,
         end_date: leagueEnd
      }, history)
   }

   return (
      <>
         <br/>
         <h3>New League</h3>
         <br/>
         <Col>
         <form onSubmit={handleSubmit}>
         <label htmlFor="league_name">Name: </label>
            <input
               id="league_name"
               name="league_name" 
               value={leagueName}
               onChange={(e) => setLeagueName(e.target.value)}
               type="text"/> 
               <br/>

         { 
            (leagueErrors && errors.name) && 
            errors.name.map(error => <> <small>{error}</small> <br/></> )
         }

         <label htmlFor="league_format">Format: </label>
            <select
               required 
               value={leagueFormat}
               onChange={(e) => setLeagueFormat(e.target.value)}
               id="league_format" 
               name="league_format">
                  <option value="">Select a League Format</option>
                  {formats.map(format => <option key={format}>{format}</option>)}
            </select>
            <br/>

         { 
            (leagueErrors && errors.league_format) && 
            errors.league_format.map(error => <><small>{error}</small><br/></>)
         }

         <label htmlFor="start_date">League Start: </label>
         <Flatpickr
            options={{
               altInput: true,
               minDate: new Date()
            }} 
            value={leagueStart}
            id="start_date" 
            name="start_date"
            placeholder="Select Start Date"
            onChange={(e) => setLeagueStart(new Date(e))}            
         />
            <br/>

         { 
            (leagueErrors && errors.start_date ) && 
            errors.start_date.map(error => <><small>{error}</small><br/></>) 
         }

         <label htmlFor="end_date">League End: </label>
         <Flatpickr
            options={{
               altInput: true,
               minDate: leagueStart || new Date()
            }} 
            value={leagueEnd}
            id="end_date" 
            name="end_date"
            placeholder="Select End Date"
            onChange={(e) => setLeagueEnd(new Date(e))}            
         />
            <br/>

         {  
            (leagueErrors && errors.end_date) && 
            errors.end_date.map(error => <><small>{error}</small><br/></>)
         }

         <br/>
         <Button type="submit" variant="success">Submit</Button>
         </form>
         </Col>
      </>
   )
}


const mapStateToProps = (state) => {
   return {
      leagues: state.leaguesReducer.leagues,
      leagueErrors: !!state.leaguesReducer.leagueErrors,
      errors: state.leaguesReducer.errors
   }
}

export default connect(mapStateToProps,{addLeague})(LeagueForm)