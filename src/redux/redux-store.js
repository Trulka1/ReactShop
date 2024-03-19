import { combineReducers, createStore } from 'redux';
import supportReducer from './support-reducer';
import accountReducer from './account-reducer';
import mainReducer from './main-reducer';

let reducers = combineReducers( {
    supportPage: supportReducer,
    accountPage: accountReducer,
    mainPage: mainReducer,
})

const store = createStore(reducers);

export default store;