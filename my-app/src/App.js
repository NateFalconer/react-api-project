import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {Switch, Route, Link} from 'react-router-dom'


class App extends Component {
  
  state = {
    newsStories: [],
    ready: false
  }


  componentDidMount() {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YRBTUrHKNAXud2ybgqO5kVXXfBPF8zzA`).then(res => {
      console.log(res)
      this.setState({
        newsStories: res.data,
        ready: true
      });
    });
  }
  
  render() {
    console.log(this.state.newsStories)
    return (
     <div className="App">
       <h1> nate's react app...  </h1>
     </div>
  );
}
}
export default App;
