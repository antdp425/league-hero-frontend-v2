export const fetchLeagues = () => {
   return (dispatch) => {
      dispatch({type: "FETCHING_LEAGUES"})
      fetch("/leagues")
      .then(resp => resp.json())
      .then(data => dispatch({type: "LEAGUES_FETCHED", payload: data}))
   }
}

export const addLeague = (leagueInfo, history) => {

   let configObj = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
         },
         body: JSON.stringify(leagueInfo)
   }

   return (dispatch) => {
      dispatch({type: "ADDING_LEAGUE"})
      fetch("/leagues", configObj)
      .then(resp => resp.json())
      .then(data => {
         return data.id ?
         dispatch({type: "LEAGUE_ADDED", payload: data}) :
         dispatch({type: "ERROR_ADDING_LEAGUE", payload: data})
      })
      .then(data => {
         return data.type === "ERROR_ADDING_LEAGUE" ? 
         null : 
         history.push(`/leagues`) 
      })
   }
}

export const editLeague = (leagueInfo, leagueId, history) => {
   let configObj = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
         },
         body: JSON.stringify(leagueInfo)
   }

   return (dispatch) => {
      dispatch({type: "EDITING_LEAGUE"})
      fetch(`/leagues/${leagueId}`, configObj)
      .then(resp => resp.json())
      .then(data => {
         return data.id ? 
         dispatch({type: "LEAGUE_EDITED", payload: data}) : 
         dispatch({type: "ERROR_EDITING_LEAGUE", payload: data})
      })
      .then(data => {
         return data.type === "ERROR_EDITING_LEAGUE" ? 
         null : 
         history.push(`/leagues/${leagueId}`) 
      })
   }
}

export const deleteLeague = (leagueId) => {
   let configObj = {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
         }
      }

   return (dispatch) => {
      dispatch({type: "DELETING_LEAGUE"})
      fetch(`/leagues/${leagueId}`, configObj)
      .then(data => {
         data.ok ?
         dispatch({type: "LEAGUE_DELETED", payload: leagueId}) :
         dispatch({type: "ERROR_DELETING_LEAGUE", payload: data})
      })
   }
}

export const clearFlags = () => {
   return (dispatch) => {
      dispatch({type: "CLEAR_FLAGS"})
   }
}