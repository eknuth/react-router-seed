import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchTrees, receiveTrees } from '../actions'

class Trees extends Component {
  componentDidMount () {
    this.props.dispatch(receiveTrees(['tree1', 'tree2']))
  }
  render () {
    const { trees } = this.props
    return (
        <div>
          <h2>Trees</h2>
          <ul>
            {trees.map((tree,i) => {
              return <li key={i}>{tree}</li>
            })}
          </ul>
        </div>
    )
  }
}

Trees.propTypes = {
  trees: PropTypes.array,
  isFetchingTrees: PropTypes.bool,
};


function select(state) {
  console.log('select state', state)
  return {
    trees: state.trees,
    isFetchingTrees: state.isFetchingTrees
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Trees);
