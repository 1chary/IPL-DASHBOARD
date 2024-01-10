// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    teamDetails: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getDetailsOfMatch()
  }

  getDetailsOfMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await data.json()
    const values = jsonData.latest_match_details
    const updatedCamelCase = {
      id: values.id,
      umpires: values.umpires,
      result: values.result,
      manOfTheMatch: values.man_of_the_match,
      date: values.date,
      venue: values.venue,
      competingTeam: values.competing_team,
      competingTeamLogo: values.competing_team_logo,
      firstInnings: values.first_innings,
      secondInnings: values.second_innings,
      matchStatus: values.match_status,
    }
    const recentMatches = jsonData.recent_matches
    const formattedData = recentMatches.map(eachItem => ({
      id: eachItem.id,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
    }))

    this.setState({teamBannerUrl: jsonData.team_banner_url})
    this.setState({latestMatchDetails: updatedCamelCase})
    this.setState({teamDetails: formattedData})
  }

  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      case 'RR':
        return 'rr'
      case 'KXP':
        return 'kxp'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, teamDetails} = this.state
    const {id} = latestMatchDetails
    return (
      <div className={`matchContainer ${this.getBackgroundColor()}`}>
        <div className="insideContainer">
          <img src={teamBannerUrl} alt="team banner" className="bannerImage" />
          <h1>Latest Match</h1>
          <LatestMatch key={id} data={latestMatchDetails} />
          <ul className="recentMatchContainer">
            {teamDetails.map(eachItem => (
              <MatchCard key={eachItem.id} list={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
