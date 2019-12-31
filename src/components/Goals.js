import React, { Component} from 'react';
import Item from "./Item";
import PropTypes from 'prop-types';

class Goals extends Component {
  
  render() {
    return (
      <div>
        <ul> 
          {this.props.goals.map( (g) => (
          <Item key={g.key} goal={g} remove={this.props.remove}/>
          ))}
        </ul>
      </div>
    )}
}

// PropTypes
Goals.propTypes = {
  goals: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}
export default Goals;
