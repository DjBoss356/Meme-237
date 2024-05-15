import { createStore } from 'redux';

// Définir le reducer pour gérer l'état user
const userReducer = (state = null, action) => {
  if (action.type === 'SET_USER') {
    return action.payload;
  }
  return state;
};

// Créer le store Redux avec le reducer
const store = createStore(userReducer);

export default store;