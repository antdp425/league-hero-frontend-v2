import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addLeague } from '../actions/leagues'

function LeagueForm({addLeague}) {

   const formats = ["3v3", "5v5", "7v7", "11v11"]
   const [leagueName, setLeagueName] = useState("")
   const [leagueFormat, setLeagueFormat] = useState("")
   const [leagueStart, setLeagueStart] = useState("")
   const [leagueEnd, setLeagueEnd] = useState("")

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
            <select
               required 
               value={leagueFormat}
               onChange={(e) => setLeagueFormat(e.target.value)} 
               name="league_format">
                  <option value="">Select a League Format</option>
                  {formats.map(format => <option>{format}</option>)}
            </select><br/>
            <input 
               name="start_date"
               onChange={(e) => setLeagueStart(e.target.value)}
               value={leagueStart} 
               type="date"/><br/>
            <input 
               name="end_date"
               onChange={(e) => setLeagueEnd(e.target.value)}
               value={leagueEnd} 
               type="date"/><br/>
            <input type="submit"/>
         </form>
      </div>
   )
}

export default connect(null,{addLeague})(LeagueForm)