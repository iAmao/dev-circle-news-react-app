import { combineReducers } from 'redux'; // Destructuring
import news from './news';
import users from './users';

const combinedReducers = combineReducers({ news, users });

debugger;

export default combinedReducers;
