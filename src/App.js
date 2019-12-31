import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddGoal from "./components/AddGoal";
import Goals from './components/Goals';

class App extends Component {
  state = {
    goals: []
  }

  // add goal
  addGoal = (objective)=> {
    const newGoal = {
      key: this.state.goals.length + 1,
      objective,
      status: 'incomplete'
    }

    this.setState({ goals: [...this.state.goals, newGoal] })
    
  }
  // remove goal
  remove = (key)=> {
    this.setState({ goals: [...this.state.goals.filter(
      g => g.key !== key
    )] });
  }
  render(){
    return (
      <>
      <Header />
      <AddGoal addGoal={this.addGoal}/>
      <Goals goals={this.state.goals} remove={this.remove}/>
      </>
    )
  }
  
}

export default App;
