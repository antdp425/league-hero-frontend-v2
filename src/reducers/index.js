import {combineReducers} from 'redux'
import {leagues} from './leagues'
import {teams} from './teams'

export const rootReducer = combineReducers({
   leagues,
   teams
})