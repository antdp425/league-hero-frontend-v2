export function teams( state = { teams: []}, action){ 
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
      default:
         return state
   }
}
