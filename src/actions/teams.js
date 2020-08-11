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