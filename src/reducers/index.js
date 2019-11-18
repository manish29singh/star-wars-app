import { combineReducers } from "redux"
import userAuth from "./Auth"
import planets from "./Planets"

export default combineReducers({
  userAuth,
  planets
})
