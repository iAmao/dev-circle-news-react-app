import initialState from './initialState';
import { ADD_NEWS, DELETE_NEWS } from '../actions/constants';

export default function (state = initialState.news, action) {
  // action -> { type: 'BLAH_BLAH'....}\
  switch(action.type) {
    case ADD_NEWS:
      console.log('action', action);
      return Object.assign(
        {}, // Empty
        state, // Value to clone
        { data: [...state.data, action.payload] } // Part to change
      );
    case DELETE_NEWS:
      return Object.assign(
        {},
        state,
        { data: [...state.data].filter((news) => news.id !== action.payload.id) }
      )
    default:
      return Object.assign({}, state);
  }
}
