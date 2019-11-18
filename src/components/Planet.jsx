import React from "react"

export default function({ planet }) {
  return (
    <div className="card search-list ml-3">
      <div className="card-header font-weight-bold">{planet.name}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Population</strong>: {planet.population}</li>
        <li className="list-group-item"><strong>Diameter</strong>: {planet.diameter}</li>
        <li className="list-group-item"><strong>Gravity</strong>: {planet.gravity}</li>
        <li className="list-group-item"><strong>Orbital Period</strong>: {planet.orbital_period}</li>
        <li className="list-group-item"><strong>Rotation Period</strong>: {planet.rotation_period}</li>
        <li className="list-group-item"><strong>Climate</strong>: {planet.climate}</li>
        <li className="list-group-item"><strong>Terrain</strong>: {planet.terrain}</li>
        <li className="list-group-item"><strong>Surface Water</strong>: {planet.surface_water}</li>
      </ul>
    </div>
  )
}
