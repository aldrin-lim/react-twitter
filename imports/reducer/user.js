/**
 * @author Aldrin Lim
 * Reducer for Phone Units
 */

export default (state = Session.get("user") || {}, action) => {
  switch(action.type){
    case 'SET_USER':
      return Object.assign({}, action.payload);
    case 'UNSET_USER':
      return Object.assign({});
    default: 
      return state;
  }
};