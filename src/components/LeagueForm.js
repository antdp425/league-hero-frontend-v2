import React, { useState } from 'react'


function LeagueForm() {

   const formats = ["3v3", "5v5", "7v7", "11v11"]
   const [leagueName, setLeagueName] = useState("")
   const [leagueFormat, setLeagueFormat] = useState("")
   const [leageStart, setLeageStart] = useState("")
   const [leageEnd, setLeageEnd] = useState("")

   return (
      <div>
         <hr/>
         <form>
            <input
               name="leagueName" 
               value={leagueName}
               onChange={(e) => setLeagueName(e.target.value)}
               type="text"/> <br/>
            <select
               required 
               value={leagueFormat}
               onChange={(e) => setLeagueFormat(e.target.value)} 
               name="leagueFormat">
                  <option value="">Select a League Format</option>
                  {formats.map(format => <option>{format}</option>)}
            </select><br/>
            <input 
               name="start_date"
               // onChange={(e) => setLeageStart(e.target.value)}
               value={leageStart} 
               type="date"/><br/>
            <input 
               name="end_date"
               value={leageEnd} 
               type="date"/><br/>
            <input type="submit"/>
         </form>
      </div>
   )
}

export default LeagueForm
