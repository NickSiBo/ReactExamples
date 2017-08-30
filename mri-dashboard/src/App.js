// jshint esversion: 6
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Table from './table.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        let options = {
            url: 'https://8v5lob9p29.execute-api.us-west-2.amazonaws.com/production',
            method: 'GET',
            dataType: 'json',
            error: (jqXHR, status, error) => {
                console.log(jqXHR, status, error);
            },
        };
        $.ajax(options).then((data) => {
            this.setState({
                data: data
            });
            setTimeout(this.updateData, 3000000);
        });
    }

  componentDidMount() {
      this.updateData();
  }

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
