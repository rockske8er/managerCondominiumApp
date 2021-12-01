import AsyncStorage from '@react-native-async-storage/async-storage'

const INITIAL_STATE = {
  token: '',
  user: {},
  property: {}
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'setToken':
      AsyncStorage.setItem('@ManagerCondominium:token', action.payload.token)
      return { ...state, token: action.payload.token }
      break;

    case 'setUser':
      return { ...state, user: action.payload.user }
      break;

    case 'setProperty':
      return { ...state, property: action.payload.property }
      break;
  }

  return state
}