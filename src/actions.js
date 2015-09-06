export const FETCH_TREES = 'FETCH_TREES'
export const RECEIVE_TREES = 'RECEIVE_TREES'

export function fetchTrees () {
  return {
    type: FETCH_TREES
  }
}

export function receiveTrees (results) {
  console.log('action ', results)
  return {
    type: RECEIVE_TREES,
    payload: results
  }
}
