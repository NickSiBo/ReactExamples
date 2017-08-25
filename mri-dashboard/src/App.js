import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Table from './table.js';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [{status: false, endTime: 0, startJob: 'r1k401u1p', endJob: 'e4mst14u1p', SLA: 'NMG Online Dashboard  SLA'}]
      }
  }
  /*
  updateData() {
      $.ajax('http://aws.../getData').then(function(data) {
          this.setState({
              data: data
          });
      });
      setTimeout(updateData, 3000000);
  }
  componentDidMount() {
      updateData();
  }*/
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MRI Dashboard</h2>
        </div>
        <p className="body"></p>
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
