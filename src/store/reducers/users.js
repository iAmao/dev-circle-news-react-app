import initialState from './initialState';


export default function (state = initialState.users, action) {
  // action -> { type: 'BLAH_BLAH'....}\
  switch(action.type) {
    default:
      return Object.assign({}, state);
  }
}
