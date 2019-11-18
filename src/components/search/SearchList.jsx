import React from "react"

export default function SearchList(props) {
  return (
    <div className="search-list mr-3">
      {props.planets.map(planet => (
        <div
          className="card m-3 search-item"
          key={planet.name}
          onClick={() => props.onSelect(planet.name)}
        >
          <h5 className="card-header">{planet.name}</h5>
          <div className="card-body">
            <p className="card-text">Population: {planet.population}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
