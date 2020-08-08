export const fetchTeams = () => {
   return (dispatch) => {
      dispatch({type: "FETCHING_TEAMS"})
      fetch("/teams")
      .then(resp => resp.json())
      .then(date => console.log(date))
   }
}