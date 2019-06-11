import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor() {
    super();
    this.state = {
      image: null
    }
  }
  onSubmit = e => {
    let formData = new FormData()
    formData.append('file', this.state.image);

    axios.post('http://localhost:3000/api/upload/', formData, {
      headers: {
      'Content-Type': 'multipart/form-data',
    }
  }).then(response => {
      console.log(response);
    })
  }
  onChange = e => {
    let errs = []
    let files = Array.from(e.target.files)
    if (files[0].size > 150000) {
      errs.push(`${files[0].name} is too large, please pick a smaller file`)
    }
    if (errs.length) {
      return errs;
    }
    this.setState({ image: files[0] })
    //  this.setState({file:e.target.files[0]});  
  }
  render() {
    return (
      <div className="App">
        <h1> Test React</h1>
        <input type="file" name="file" onChange={this.onChange} />
        <input type="submit" onClick={this.onSubmit} value="submit" />
      </div>
    );
  }
}

export default App;
