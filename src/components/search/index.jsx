import React from "react"
import SearchList from "./SearchList"
import { getPlanets } from "../../api"
import Planet from "../Planet"
import { connect } from "react-redux"
import * as PlanetsActions from "../../actions/planetsActions"

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPlanet: undefined,
      searchText: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value }, async () => {
      await this.getPlanets(this.state.searchText)
    })
  }

  getPlanets = async query => {
    try {
      const response = await getPlanets(query)
      this.props.onPlanetsSearch(response.data.results)
    } catch (err) {
      console.log("Something went wrong.")
    }
  }

  selectPlanet = name => {
    const selectedPlanet = this.props.planets.find(
      planet => planet.name === name
    )
    this.setState({ selectedPlanet })
  }

  render() {
    const { searchText, selectedPlanet } = this.state
    const { planets } =this.props
    return (
      <div>
        <input
          type="search"
          className="form-control"
          value={searchText}
          name="searchText"
          placeholder="Search for planets"
          onChange={this.handleInputChange}
        />
        <div className="search-reasult p-5">
          {planets && (
            <SearchList
              planets={planets.map(p => ({
                name: p.name,
                population: p.population
              }))}
              onSelect={this.selectPlanet}
            />
          )}
          {selectedPlanet && <Planet planet={selectedPlanet} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planets: state.planets.data
})

const mapDispatchToProps = dispatch => ({
  onPlanetsSearch: planets => dispatch(PlanetsActions.onPlanetsSearch(planets))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
