import { expect } from 'chai'
import { treesReducer } from '../reducers'
import { ASYNC_FETCH_TREES, RECEIVE_TREES } from '../actions'

describe('tree reducer', () => {
  it('should have an initial state', () => {
    expect(
      treesReducer(undefined, {})
    ).to.deep.equal({
      trees: []
    })
  })
  it('should start fetching trees', () => {
    expect(
      treesReducer(undefined, {type: ASYNC_FETCH_TREES})
    ).to.deep.equal({
      isFetchingTrees: true,
      trees: []
    })
  })
  it('should receive trees', () => {
    let treesJSON = {
      features: [],
      type: "FeatureCollection"
    }
    expect(
      treesReducer(undefined, {
        type: RECEIVE_TREES,
        payload: treesJSON
      })
    ).to.deep.equal({
      trees: treesJSON,
      isFetchingTrees: false
    })
  })
  it('should handle errors when receiving trees')
})
