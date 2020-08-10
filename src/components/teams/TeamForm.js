import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTeam } from '../../actions/teams'
import { useEffect } from 'react'

function TeamForm({teams, leagues, addTeam, errors}) {

   useEffect(() => {
      clearForm()
    },[teams])

   const [teamName, setTeamName] = useState("")
   const [teamEmail, setTeamEmail] = useState("")
   const [teamPhone, setTeamPhone] = useState("")
   const [teamLeague, setTeamLeague] = useState("")

   const clearForm = () => {
      setTeamName("")
      setTeamEmail("")
      setTeamPhone("")
      setTeamLeague("")
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      addTeam({
         name: teamName,
         email: teamEmail,
         phone: teamPhone,
         league_id: teamLeague
      })
   }

   return (
      <div>
         <hr/>
         <form onSubmit={handleSubmit}>
         <label for="team_name">Team Name: </label>
            <input
               name="team_name"
               id="team_name" 
               value={teamName}
               onChange={(e) => setTeamName(e.target.value)}
               type="text"/> <br/>
            {/* FIX ME <small>{errors && errors.team_name}</small> */}
         <label for="team_league">League: </label>
            <select
               required 
               value={teamLeague}
               onChange={(e) => setTeamLeague(e.target.value)}
               id="team_league" 
               name="team_league">
                  <option value="">Select a League</option>
                  {leagues.map(league => <option value={league.id}>{league.name}</option>)}
            </select><br/>
            {/* FIX ME <small>{errors && errors.league_format}</small> <br/> */}
         <label for="email">Contact Email: </label>
            <input
               id="email"
               name="email"
               onChange={(e) => setTeamEmail(e.target.value)}
               value={teamEmail} 
               type="email"/><br/>
            {/* FIX ME <small>{errors && errors.start_date}</small>  */}
         <label for="phone">Contact Phone: </label>
            <input
               id="phone" 
               name="phone"
               onChange={(e) => setTeamPhone(e.target.value)}
               value={teamPhone} 
               type="text"/><br/>
            {/* FIX ME <small>{errors && errors.end_date}</small> <br/> */}
            <input type="submit"/>
         </form>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      leagues: state.leaguesReducer.leagues,
      teams: state.teamsReducer.teams,
      errors: state.teamsReducer.errors
   }
}

export default connect(mapStateToProps,{addTeam})(TeamForm)