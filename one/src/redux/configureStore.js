import {createStore, combineReducers, applyMiddleWare, compose} from 'redux';
import addReducer from '../redux/reducers/addReducer';

export default function configureStore(initialState){
  let reducer = combineReducers({
    counter: addReducer,
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  return createStore(reducer, initialState,composeEnhancers());
}
