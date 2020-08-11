import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editLeague } from '../../actions/leagues'
import { useEffect } from 'react'

function LeagueEditForm({match, leagues, league, editLeague, hasErrors, errors}) {

   useEffect(() => {
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
         match.params.leagueId)
   }

   return (
      <div>
         <hr/>
         <form onSubmit={handleSubmit}>
         <label htmlFor="league_name">Name: </label>
            <input
               id="league_name"
               name="league_name" 
               onChange={(e) => setLeagueName(e.target.value)}
               value={leagueName}
               type="text"/> <br/> 
         { hasErrors && errors.name ? errors.name.map(error => { return <><small>{error}</small> <br/></>  }) : ""}
         <label htmlFor="league_format">Format: </label>
            <select
               required 
               defaultValue={league && league.league_format}
               value={leagueFormat}
               onChange={(e) => setLeagueFormat(e.target.value)}
               id="league_format" 
               name="league_format">
                  <option value={league && league.league_format}>{league && league.league_format}</option>
                  {formats.map(format => <option key={format}>{format}</option>)}
            </select><br/>
   { hasErrors && errors.league_format ? errors.league_format.map(error => { return <><small>{error}</small><br/></>}) : ""}
         <label htmlFor="start_date">League Start: </label>
            <input
               id="start_date" 
               name="start_date"
               onChange={(e) => setLeagueStart(e.target.value)}
               defaultValue={league && league.start_date}
               value={leagueStart} 
               type="date"/><br/>
         { hasErrors && errors.start_date ? errors.start_date.map(error => { return <><small>{error}</small><br/></>}) : ""}
         <label htmlFor="end_date">League End: </label>
            <input 
               id="end_date"
               name="end_date"
               onChange={(e) => setLeagueEnd(e.target.value)}
               defaultValue={league && league.end_date}
               value={leagueEnd} 
               type="date"/><br/>
         { hasErrors && errors.end_date ? errors.end_date.map(error => { return <><small>{error}</small><br/></>}) : ""}
            <input type="submit"/>
         </form>
      </div>
   )
}


const mapStateToProps = (state, {match}) => {
   return {
      league: state.leaguesReducer.leagues.find(league => league.id == match.params.leagueId),
      leagues: state.leaguesReducer.leagues,
      hasErrors: state.leaguesReducer.hasErrors,
      errors: state.leaguesReducer.errors
   }
}

export default connect(mapStateToProps,{editLeague})(LeagueEditForm)