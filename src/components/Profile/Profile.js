import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: props.image,
            name: props.name,
            skills: props.skills,
            hidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }
    toggleHidden(){
        this.setState({hidden: !this.state.hidden})
    }
    render(props) {
        var dinosaurSkills = this.props.skills.map(skill => {
            return(<li>
                {skill}
            </li>)
        })
        return (
            <li onClick={this.toggleHidden}>
                <div class="profile-card">
                    <header class="profile-header">
                        <img src= {this.props.image}/>
                        <h2>{this.props.name}</h2>
                    </header>
                    <section class= {this.state.hidden ?"skills-container hidden":"skills-container"}>
                        <h4>Skills</h4>
                        <ul class="skills-list">
                            {dinosaurSkills}
                        </ul>
                    </section>
                </div>
            </li>
            
        )
    }
}