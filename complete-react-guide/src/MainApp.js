import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class mainApp extends Component {

    state = {
        persons:[
            {name:"Saba", key:1},
            {name:"Priya", key:2},
            {name:"Manu", key:3},
            {name:"New Manu", key:4}
        ], 
        otherProperty:'Sample Payload'
    }

    stateButtonHandler = () => {
        this.setState({
            persons:[
                {name:"Saba-UPD", key:1},
                {name:"Priya", key:2},
                {name:"Manu-UPD", key:3}
            ]}
        )
    }

    deleteHandler = (index) => {
        const tempArray = [...this.state.persons];
        tempArray.splice(index, 1);

        this.setState({
            persons:tempArray
        })
        
    }

    updateNameHandler = (event, personKey) => {
        const person = this.state.persons.find((person)=>{if (person.key === personKey) return person});
        
        person.name = event.target.value;

        const index = this.state.persons.findIndex(elem=>{if(elem.key === person.key) return elem});
        
        let tempArray = [...this.state.persons]

        tempArray[index] = person;

        this.setState({
            persons:tempArray
        })
    }

    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload. It works - Woohoo!!!
                </p>
                
                {
                    this.state.persons.map((person, index) => { 
                        return <Person name={person.name} 
                        clickHandler={() => this.deleteHandler(index)} 
                        nameChangeHandler={(event)=>this.updateNameHandler(event, person.key)}></Person> 
                    })
                }
                
                <p><button onClick={this.stateButtonHandler}>Update State Check!</button></p>
            </div>   
        )
    }
}

export default mainApp;