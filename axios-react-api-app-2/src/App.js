import React, { Component } from 'react';
import axios from 'axios';


class App extends Component{

    constructor(props){
      super(props);
      this.state={
        imageURL:'',
      }
    }

    componentDidMount(){
      axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.setState({ imageURL: response.data.message });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }

  render(){
    const { imageURL } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <img src={imageURL} />
        </header>
      </div>
    );
  }
}

export default App;
