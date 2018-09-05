import React, {Component} from "react"
import Profile from '../Profile/Profile.js'

export default class Profiles extends Component {
  render(props) {
    var dinoProfiles = this.props.dinosaursData.map(dinosaurProfile => {
         return(<Profile
            key={dinosaurProfile.name}
            image={dinosaurProfile.image}
            name={dinosaurProfile.name}
            skills={dinosaurProfile.skills}
        />)
    })
    return (
      <section id='profiles-container'>
        <h2>Profiles</h2>
        <ul id = "profiles">
            {dinoProfiles}
        </ul>
      </section>
    )
  }
}


