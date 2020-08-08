export const fetchTeams = () => {
   return (dispatch) => {
      dispatch({type: "FETCHING_TEAMS"})
      fetch("/teams")
      .then(resp => resp.json())
      .then(data =>  dispatch({type: "TEAMS_FETCHED", payload: data}))
   }
}