import { expect } from 'chai'
import { treesReducer } from '../reducers'
import { FETCH_TREES, RECEIVE_TREES } from '../actions'

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
      treesReducer(undefined, {type: FETCH_TREES})
    ).to.deep.equal({
      isFetchingTrees: true,
      trees: []
    })
  })
  it('should receive trees', () => {
    expect(
      treesReducer(undefined, {
        type: RECEIVE_TREES,
        payload: ['tree1', 'tree2']
      })
    ).to.deep.equal({
      trees: ['tree1', 'tree2'],
      isFetchingTrees: false
    })
  })
  it('should handle errors when receiving trees')
})
