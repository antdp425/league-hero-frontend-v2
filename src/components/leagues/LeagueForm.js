import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addLeague } from '../../actions/leagues'
import { useEffect } from 'react'

function LeagueForm({leagues, addLeague, errors}) {

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
      })
   }

   return (
      <div>
         <hr/>
         <form onSubmit={handleSubmit}>
         <label for="league_name">Name: </label>
            <input
               id="league_name"
               name="league_name" 
               value={leagueName}
               onChange={(e) => setLeagueName(e.target.value)}
               type="text"/> <br/>
            {/* FIX ME <small>{errors && errors.league_name}</small> */}
         <label for="league_format">Format: </label>
            <select
               required 
               value={leagueFormat}
               onChange={(e) => setLeagueFormat(e.target.value)}
               id="league_format" 
               name="league_format">
                  <option value="">Select a League Format</option>
                  {formats.map(format => <option>{format}</option>)}
            </select><br/>
            {/* FIX ME <small>{errors && errors.league_format}</small> <br/> */}
         <label for="start_date">League Start: </label>
            <input
               id="start_date" 
               name="start_date"
               onChange={(e) => setLeagueStart(e.target.value)}
               value={leagueStart} 
               type="date"/><br/>
            {/* FIX ME <small>{errors && errors.start_date}</small>  */}
         <label for="end_date">League End: </label>
            <input 
               id="end_date"
               name="end_date"
               onChange={(e) => setLeagueEnd(e.target.value)}
               value={leagueEnd} 
               type="date"/><br/>
            {/* FIX ME <small>{errors && errors.end_date}</small> <br/> */}
            <input type="submit"/>
         </form>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      leagues: state.leaguesReducer.leagues,
      errors: state.leaguesReducer.errors
   }
}

export default connect(mapStateToProps,{addLeague})(LeagueForm)