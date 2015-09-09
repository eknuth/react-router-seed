import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { receiveTrees, asyncFetchTrees } from '../actions'
import DonutChart from './DonutChart'

class TreeLink extends Component {
  render () {
    const { tree } = this.props

    return (
      <li key={tree.treeid}><Link to={`/trees/?tree=${tree.properties.treeid}`}>{tree.properties.common_nam}</Link></li>
    )
  }
}

class Trees extends Component {
  componentDidMount () {
    this.props.dispatch(asyncFetchTrees())
  }
  render () {
    const { trees } = this.props

    return (
        <div>
          <h2>Trees</h2>
          {this.props.location.query.tree}
          <ul>
            {(trees || []).map((tree,i) => {
              return <TreeLink tree={tree} />
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

Trees.contextTypes = {
  router: React.PropTypes.func
}

function select(state) {
  console.log('select state', state)
  return {
    trees: state.trees.features,
    isFetchingTrees: state.isFetchingTrees
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Trees);
