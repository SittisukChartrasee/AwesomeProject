const init = {
  name: 'Sittisuk',
  lastName: 'Chartrasee',
  age: 23,
}

export default (state=init, action) => {
  switch (action.type) {
    case 'TYPE_A':
      return { ...state, [action.key]: action.value }
  
    default:
      return state
  }
}