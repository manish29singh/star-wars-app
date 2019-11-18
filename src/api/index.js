import axios from "axios"

const apiUrl = process.env.REACT_APP_SWAPI_BASE_URL || 'https://swapi.co/api'

export const getPlanets = async query => 
  axios.get(`${apiUrl}/planets/?format=json&search=${query}`)

