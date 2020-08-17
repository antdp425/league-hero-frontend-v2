import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editTeam } from '../../actions/teams'
import { useEffect } from 'react'
import { Col } from 'react-bootstrap'

function TeamEditForm({history, match, teams, team, league, leagues, editTeam, errors, teamEditErrors}) {

   useEffect(() => {
      setTeamName(team && team.name)
      setTeamEmail(team && team.email)
      setTeamPhone(team && team.phone)
      setTeamLeague(team && team.league.id)
   },[team])

   const [teamName, setTeamName] = useState("")
   const [teamEmail, setTeamEmail] = useState("")
   const [teamPhone, setTeamPhone] = useState("")
   const [teamLeague, setTeamLeague] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      editTeam({
         name: teamName,
         email: teamEmail,
         phone: teamPhone,
         league_id: teamLeague
      }, 
      match.params.teamId,
      history)
   }

   return (
      <div>
         <br/>
         <h3>Edit Team: {team && team.name}</h3>
         <br/>
         <Col>
         <form onSubmit={handleSubmit}>
         <label for="team_name">Team Name: </label>
            <input
               name="team_name"
               id="team_name" 
               value={teamName}
               onChange={(e) => setTeamName(e.target.value)}
               type="text" /> <br/>
         { teamEditErrors && errors.name ? errors.name.map(error => { return <><small>{error}</small> <br/></>  }) : ""}
         <label for="team_league">League: </label>
            <select
               required 
               onChange={(e) => setTeamLeague(e.target.value)}
               id="team_league" 
               name="team_league">
                  <option value={league && league.id}>{league && league.name}</option>
                  {leagues.map(league => <option value={league.id}>{league.name}</option>)}
            </select><br/>
      { teamEditErrors && errors.league_id ? errors.league_id.map(error => { return <><small>{error}</small><br/></>}) : ""}
         <label for="email">Contact Email: </label>
            <input
               id="email"
               name="email"
               onChange={(e) => setTeamEmail(e.target.value)}
               value={teamEmail} 
               type="email"/><br/>
         { teamEditErrors && errors.email ? errors.email.map(error => { return <><small>{error}</small><br/></>}) : ""}
         <label for="phone">Contact Phone: </label>
            <input
               id="phone" 
               name="phone"
               onChange={(e) => setTeamPhone(e.target.value)}
               value={teamPhone} 
               type="text"/><br/>
         { teamEditErrors && errors.phone ? errors.phone.map(error => { return <><small>{error}</small><br/></>}) : ""}
         <br/>
            <input type="submit"/>
         </form>
         </Col>
      </div>
   )
}

const mapStateToProps = (state, {match}) => {
   return {
      league: state.leaguesReducer.leagues.find(league => league.id == match.params.leagueId),
      leagues: state.leaguesReducer.leagues,
      team: state.teamsReducer.teams.find(team => team.id == match.params.teamId),
      teams: state.teamsReducer.teams,
      teamEditErrors: !!state.teamsReducer.teamEditErrors,
      errors: state.teamsReducer.errors
   }
}

export default connect(mapStateToProps, {editTeam})(TeamEditForm)