import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = () => {
    // Don't do this!  this.state.persons[0].name = 'Maximillion';
    this.setState({persons: [
      {name: 'Maximillion', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hi Im a React App</h1>
        <p>This is really working!</p>
        {/* switchNameHandler not switchNameHandler()! no parenth is a reference, with parenth gets called on render*/}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age} > My Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age} />
      </div>
    );

    // at least 3 args, at most inifnite args
    // first argument is element we want to render to the dom
    // second argument is the configuration for the object
    // third argument is children, whats nested inside the div 
      // -- rendered as text default, to use element make React.createElement call
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
