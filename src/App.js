import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox.js';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchField: ''
      }
    }

    onChangeField = (event) => {
      this.setState({searchField: event.target.value});
      // console.log(event.target.value);
    }

    // After render ()
    componentDidMount () {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({robots: data}))
      // console.log(this.state);
    }

    render () {

      const filteredArray = this.state.robots.filter((item) => {
        return item.name.toLowerCase().includes(this.state.searchField.toLowerCase());
      })

      return (
        <div>
          <SearchBox onChangeFunction={this.onChangeField} />
          <CardList arrayOfRobots={filteredArray} />
        </div>
      )
    }
}

export default App;