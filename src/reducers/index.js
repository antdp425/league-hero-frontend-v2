import {combineReducers} from 'redux'
import leaguesReducer from './leagues'
import teamsReducer from './teams'

export const rootReducer = combineReducers({
   leaguesReducer,
   teamsReducer
})