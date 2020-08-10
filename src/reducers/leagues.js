export default ( state = { leagues: [], loading: false}, action) => {
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
         if (action.payload.errors){
            return {
               ...state,
               errors: action.payload.errors
            }
         } else {  
            return {
               ...state,
               leagues: [...state.leagues, action.payload]
            }       
      }  

      case "EDITING_LEAGUE":
         return {
            ...state
         }

      case "LEAGUE_EDITED":
         if (action.payload.errors){
            return {
               ...state,
               errors: action.payload.errors
            }
         } else {  
            return {
               ...state,
               leagues: state.leagues.map(league => {
                  return league.id == action.payload.id ? action.payload : league
               })
            }       
      }  

      default:
         return state
   }
}
