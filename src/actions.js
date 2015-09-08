export const ASYNC_FETCH_TREES = 'ASYNC_FETCH_TREES'
export const RECEIVE_TREES = 'RECEIVE_TREES'

export function receiveTrees (results) {
  return {
    type: RECEIVE_TREES,
    payload: results
  }
}

export function asyncFetchTrees() {
  return dispatch => {
    return fetch('/api/trees_with_neighborhood.json')
      .then(req => req.json())
      .then(geojson => dispatch(receiveTrees(geojson)));
  };
}
