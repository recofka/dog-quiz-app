const inicial = {denise: 'denise'}



  const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case 'SET_BREEDS':
    return [
      ...state,
      action.payload]
    default:
    return state
    }
  }
  export default reducer