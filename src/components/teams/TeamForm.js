import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTeam } from '../../actions/teams'
import { useEffect } from 'react'
import { Col } from 'react-bootstrap'

function TeamForm({history, teams, leagues, addTeam, errors, teamErrors}) {

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
      !teamErrors && history.push(`/teams`)
   }

   return (
      <div>
         <br/>
         <h3>New Team</h3>
         <br/>
         <Col>
         <form onSubmit={handleSubmit}>
         <label htmlFor="team_name">Team Name: </label>
            <input
               name="team_name"
               id="team_name" 
               value={teamName}
               onChange={(e) => setTeamName(e.target.value)}
               type="text"/> <br/>
         { teamErrors && errors.name ? errors.name.map(error => { return <><small>{error}</small> <br/></>  }) : ""}
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
      { teamErrors && errors.league_id ? errors.league_id.map(error => { return <><small>{error}</small><br/></>}) : ""}
         <label for="email">Contact Email: </label>
            <input
               id="email"
               name="email"
               onChange={(e) => setTeamEmail(e.target.value)}
               value={teamEmail} 
               type="email"/><br/>
         { teamErrors && errors.email ? errors.email.map(error => { return <><small>{error}</small><br/></>}) : ""}
         <label for="phone">Contact Phone: </label>
            <input
               id="phone" 
               name="phone"
               onChange={(e) => setTeamPhone(e.target.value)}
               value={teamPhone} 
               type="text"/><br/>
         { teamErrors && errors.phone ? errors.phone.map(error => { return <><small>{error}</small><br/></>}) : ""}
            <input type="submit"/>
         </form>
         </Col>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      leagues: state.leaguesReducer.leagues,
      teams: state.teamsReducer.teams,
      teamErrors: !!state.teamsReducer.teamErrors,
      errors: state.teamsReducer.errors
   }
}

export default connect(mapStateToProps,{addTeam})(TeamForm)