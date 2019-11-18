import * as actionTypes from "../actionTypes"

export function onPlanetsSearch(planets) {
  return {
    type: actionTypes.PLANETS_SEARCH,
    planets
  }
}
