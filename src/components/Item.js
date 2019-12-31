import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Item extends Component {
  state = {
    status: "incomplete"
  }
  
  statusChange = (key)=> {
    if (this.state.status === 'incomplete') {
      this.setState({ status: "complete" })
    }else {
      this.setState({ status: "incomplete" })
    }
  }

  render() {  
    const { key, objective } = this.props.goal
    
    return (
     <li className={this.state.status }>
        <input id={key} type="checkbox" onChange={this.statusChange}/>
        <label htmlFor={key}>{objective}</label>
        <button onClick={this.props.remove.bind(this,key)}>X</button>
     </li>
    )
  }
}

// PropTypes
Item.propTypes = {
  goal: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
}

export default Item