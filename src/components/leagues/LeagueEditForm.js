import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editLeague, clearFlags} from '../../actions/leagues'
import { useEffect } from 'react'
import { Col, Button } from 'react-bootstrap'
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";

function LeagueEditForm({history, match, league, editLeague, leagueEditErrors, errors, clearFlags}) {

   useEffect(() => {
      clearFlags()
      setLeagueName(league && league.name)
      setLeagueFormat(league && league.league_format)
      setLeagueStart(league && league.start_date)
      setLeagueEnd(league && league.end_date)
    },[league])

   const formats = ["3v3", "5v5", "7v7", "11v11"]
   const [leagueName, setLeagueName] = useState("")
   const [leagueFormat, setLeagueFormat] = useState("")
   const [leagueStart, setLeagueStart] = useState("")
   const [leagueEnd, setLeagueEnd] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      editLeague({
         name: leagueName,
         league_format: leagueFormat,
         start_date: leagueStart,
         end_date: leagueEnd
      }, 
         match.params.leagueId,
         history
      )      
   }

   return (
      <>
         <br/>
         <h3>Edit League: {league && league.name}</h3>
         <br/>
         <Col>
         <form onSubmit={handleSubmit}>
         <label htmlFor="league_name">Name:</label>
            <input
               id="league_name"
               name="league_name" 
               onChange={(e) => setLeagueName(e.target.value)}
               value={leagueName}
               type="text" /> 
               <br/>
         
         { 
            (leagueEditErrors && errors.name) && 
            errors.name.map(error => <> <small>{error}</small> <br/></> )
         }

         <label htmlFor="league_format">Format: </label>
            <select
               required 
               value={leagueFormat}
               onChange={(e) => setLeagueFormat(e.target.value)}
               id="league_format" 
               name="league_format">
                  <option value={league && league.league_format}>{league && league.league_format}</option>
                  {formats.map(format => <option key={format}>{format}</option>)}
            </select>
            <br/>

         { 
            (leagueEditErrors && errors.league_format) && 
            errors.league_format.map(error => <><small>{error}</small><br/></>)
         }

         <label htmlFor="start_date">League Start: </label>
         <Flatpickr
            options={{
               altInput: true,
            }} 
               value={leagueStart}
            id="start_date" 
            name="start_date"
            placeholder="Select Start Date"
            onChange={(e) => setLeagueStart(new Date(e))}            
         />
            <br/>

         { 
            (leagueEditErrors && errors.start_date ) && 
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
            (leagueEditErrors && errors.end_date) && 
            errors.end_date.map(error => <><small>{error}</small><br/></>)
         }

         <br/>
            <Button type="submit" variant="success">Submit</Button>
         </form>
         </Col>
      </>
   )
}


const mapStateToProps = (state, {match}) => {
   return {
      league: state.leaguesReducer.leagues.find(league => league.id == match.params.leagueId),
      leagues: state.leaguesReducer.leagues,
      leagueEditErrors: !!state.leaguesReducer.leagueEditErrors,
      errors: state.leaguesReducer.errors
   }
}

export default connect(mapStateToProps,{editLeague, clearFlags})(LeagueEditForm)