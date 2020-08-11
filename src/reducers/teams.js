export default( state = { teams: [], hasErrors: false}, action) => { 
   switch (action.type) {
      case "FETCHING_TEAMS":
         return {
            ...state,
            loading: true
         }
      case "TEAMS_FETCHED":
         return {
            ...state,
            teams: [...action.payload],
            loading: false
         }

      case "ADDING_TEAM":
         return {
            ...state
         }

      case "TEAM_ADDED":{  
            return {
               ...state,
               hasErrors: false,
               teams: [...state.teams, action.payload]
            }
         }
      case "ERROR_ADDING_TEAM":{
            return {
               ...state,
               hasErrors: true,
               errors: action.payload.errors
            }
      }

      default:
         return state
   }
}
