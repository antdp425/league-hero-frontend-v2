export default ( state = { leagues: [], hasErrors: false, loading: false}, action) => {
   switch (action.type) {
      case "FETCHING_LEAGUES":
         return {
            ...state,
            loading: true
         }
      case "LEAGUES_FETCHED":
         return {
            ...state,
            leagues: [...action.payload],
            loading: false
         }

      case "ADDING_LEAGUE":
         return {
            ...state
         }

      case "LEAGUE_ADDED":
            return {
               ...state,
               hasErrors: false,
               leagues: [...state.leagues, action.payload]
            }       
      case "ERROR_ADDING_LEAGUE":
         return {
            ...state,
            hasErrors: true,
            errors: action.payload.errors
         }

      case "EDITING_LEAGUE":
         return {
            ...state
         }

      case "LEAGUE_EDITED":
            return {
               ...state,
               hasErrors: false,
               leagues: state.leagues.map(league => {
                  return league.id == action.payload.id ? action.payload : league
               })
            }
      case "ERROR_EDITING_LEAGUE":
            return {
               ...state,
               hasErrors: true,
               errors: action.payload.errors
            }
      case "DELETING_LEAGUE":
         return {
            ...state
         }

      case "LEAGUE_DELETED":
            return {
               ...state,
               hasErrors: false,
               leagues: state.leagues.filter(league => {
                  return league.id != action.payload
               })
            }
      case "ERROR_DELETING_LEAGUE":
            return {
               ...state,
               hasErrors: true,
               errors: action.payload.errors
            }
      default:
         return state
   }
}
