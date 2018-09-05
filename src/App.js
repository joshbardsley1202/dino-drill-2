import React, {Component} from "react"
import Header from "./components/header/Header"
import Profiles from "./components/Profiles/Profiles"
import './App.css'
import Footer from "./components/Footer/Footer"


class App extends Component {
    constructor(){
        super()
        this.state = { data: [] }
    }
    componentWillMount(){
        fetch('./dinosaurs.json')
            .then(data => data.json())
            .then(dinosaursJSON => {
                this.setState({
                    data: dinosaursJSON
                })
            })
    }
    render() {
        
        return (
            <div className = "App">
                <Header/>
                <main>
                    <Profiles
                        dinosaursData = {this.state.data}
                    />
                </main>
                <Footer/>
                
            </div>

        )
    }


}



export default App;


