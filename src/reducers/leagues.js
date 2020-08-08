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
      default:
         return state
   }
}
