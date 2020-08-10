import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addLeague } from '../actions/leagues'
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
            <input
               name="league_name" 
               value={leagueName}
               onChange={(e) => setLeagueName(e.target.value)}
               type="text"/> <br/>
            {/* FIX ME <small>{errors && errors.league_name}</small> */}
            <select
               required 
               value={leagueFormat}
               onChange={(e) => setLeagueFormat(e.target.value)} 
               name="league_format">
                  <option value="">Select a League Format</option>
                  {formats.map(format => <option>{format}</option>)}
            </select><br/>
            {/* FIX ME <small>{errors && errors.league_format}</small> <br/> */}
            <input 
               name="start_date"
               onChange={(e) => setLeagueStart(e.target.value)}
               value={leagueStart} 
               type="date"/><br/>
            {/* FIX ME <small>{errors && errors.start_date}</small>  */}
            <input 
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