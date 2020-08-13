export const fetchTeams = () => {
   return (dispatch) => {
      dispatch({type: "FETCHING_TEAMS"})
      fetch("/teams")
      .then(resp => resp.json())
      .then(data =>  dispatch({type: "TEAMS_FETCHED", payload: data}))
   }
}

export const addTeam = (teamInfo) => {

   let configObj = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
         },
         body: JSON.stringify(teamInfo)
   }

   return (dispatch) => {
      dispatch({type: "ADDING_TEAM"})
      fetch("/teams/", configObj)
      .then(resp => resp.json())
      .then(data => {
         data.id ?
         dispatch({type: "TEAM_ADDED", payload: data}) :
         dispatch({type: "ERROR_ADDING_TEAM", payload: data}) 
      })
   }
}

export const editTeam = (teamInfo, teamId) => {
   let configObj = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
         },
         body: JSON.stringify(teamInfo)
   }

   return (dispatch) => {
      dispatch({type: "EDITING_TEAM"})
      fetch(`/teams/${teamId}`, configObj)
      .then(resp => resp.json())
      .then(data => {
         data.id ? 
         dispatch({type: "TEAM_EDITED", payload: data}) : 
         dispatch({type: "ERROR_EDITING_TEAM", payload: data})
      })
   }
}

export const deleteTeam = (teamId) => {
   let configObj = {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
         }
      }

   return (dispatch) => {
      dispatch({type: "DELETING_TEAM"})
      fetch(`/teams/${teamId}`, configObj)
      .then(data => {
         data.ok ?
         dispatch({type: "TEAM_DELETED", payload: teamId}) :
         dispatch({type: "ERROR_DELETING_TEAM", payload: data})
      })
   }
}