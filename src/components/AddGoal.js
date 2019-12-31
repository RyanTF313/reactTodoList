import React, { Component } from 'react'

export class AddGoal extends Component {
  state = {
    objective: ''
  }

  add = (e)=> {
    e.preventDefault();

    this.props.addGoal(this.state.objective);
    this.setState({objective: ''})
  }
  record = e => this.setState({ [e.target.name]: e.target.value }) 
  render() {
    return (
      <div>
        <form onSubmit={this.add}>
        <input 
          type="text"
          name="objective" 
          placeholder="Add Next Goal"
          value={this.state.objective}
          onChange={this.record}
        />
        <input 
          type="submit" 
          value="Add"
        />
        </form>
      </div>
    )
  }
}

export default AddGoal
