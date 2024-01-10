// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCard: [], isLoading: true}

  componentDidMount() {
    this.getTeamNames()
  }

  getTeamNames = async () => {
    const responseData = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await responseData.json()
    const updatedData = jsonData.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCard: updatedData, isLoading: false})
  }

  renderAppContainer = () => {
    const {teamCard} = this.state
    return (
      <ul className="cardContainer">
        {teamCard.map(eachItem => (
          <TeamCard key={eachItem.id} details={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => {
    ;<div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="appContainer">
        <div className="iplWithRow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="heading">IPL DASHBOARD</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderAppContainer()}
      </div>
    )
  }
}

export default Home
