// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {data} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = data
    return (
      <div className="detailsCardContainer">
        <div className="inRow">
          <div className="arrangeInColumn">
            <p className="whiteColor">{competingTeam}</p>
            <p className="whiteColor">{date}</p>
            <p className="venue">{venue}</p>
            <p className="venue">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="opponentTeamLogo"
          />
          <div className="arrangeInColumn">
            <p className="whiteColor">First Innings</p>
            <p className="whiteColor">{firstInnings}</p>
            <p className="whiteColor">Second Innings</p>
            <p className="whiteColor">{secondInnings}</p>
            <p className="venue">Man Of The Match</p>
            <p className="venue">{manOfTheMatch}</p>
            <p className="venue">Umpires</p>
            <p className="venue">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
