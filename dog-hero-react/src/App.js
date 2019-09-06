import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Switch, Route } from "react-router-dom";

import AuthService from "./components/auth/auth-service";
import OwnerList from './components/owner-list'
import CaregiverList from './components/caregiver-list'
import DogList from './components/dog-list'
import Navbar from './components/navbar'
import SignupOwner from './components/signup-owner'
import SignupCaregiver from './components/signup-caregiver'

class App extends Component {
  constructor() {
    super()
    this.state = {
      owners: [],
      caregivers: [],
      dogs: [],
    }
    this.service = new AuthService();
  }


 

  getCaregivers() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/caregivers`)
      .then(responseFromApi => {
        this.setState({
          caregivers: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  }

  getDogs() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/dogs`)
      .then(responseFromApi => {
        this.setState({
          dogs: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            exact path='/owners'
            render={() => <OwnerList />} />
          <Route
            exact path='/caregivers'
            render={() => <CaregiverList />} />
          <Route
            exact path='/dogs'
            render={() => <DogList />} />
          <Route
            exact path='/signup-owner'
            render={() => <SignupOwner />} />
          <Route
            exact path='/signup-caregiver'
            render={() => <SignupCaregiver />} />
        </Switch>
      </div>
    )
  }
}

export default App;
