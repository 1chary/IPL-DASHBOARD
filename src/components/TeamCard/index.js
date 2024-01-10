// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {details} = this.props
    const {id, name, teamImageUrl} = details

    return (
      <Link to={`/team-matches/${id}`} className="individualCardContainer">
        <li className="inRow" key={id}>
          <img src={teamImageUrl} className="teamImage" alt={name} />
          <h1 className="teamName">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
