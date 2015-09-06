import { isFSA } from 'flux-standard-action'
import { expect } from 'chai'

import {
  FETCH_TREES, fetchTrees,
  RECEIVE_TREES, receiveTrees,
} from '../actions'

describe('Action Creators', () => {
  describe('fetchTrees', () => {
    it('should be a flux standard action', () => {
      expect(isFSA(fetchTrees())).to.be.true
    })
    it('should be of the correct type', () => {
      expect(fetchTrees().type).to.equal(FETCH_TREES)
    })
  })

  describe('receiveTrees', () => {
    it('should be a flux standard action', () => {
      expect(isFSA(receiveTrees())).to.be.true
    })
    it('should be of the correct type', () => {
      expect(receiveTrees().type).to.equal(RECEIVE_TREES)
    })
  })
})
