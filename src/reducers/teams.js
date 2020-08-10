export default( state = { teams: []}, action) => { 
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

      case "TEAM_ADDED":
         if (action.payload.errors){
            return {
               ...state,
               errors: action.payload.errors
            }
         } else {  
            return {
               ...state,
               teams: [...state.teams, action.payload]
            }       
      }  
      default:
         return state
   }
}
