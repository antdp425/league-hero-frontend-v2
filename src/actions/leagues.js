export const fetchLeagues = () => {
   return (dispatch) => {
      dispatch({type: "FETCHING_LEAGUES"})
      fetch("/leagues")
      .then(resp => resp.json())
      .then(data => dispatch({type: "LEAGUES_FETCHED", payload: data}))
   }
}