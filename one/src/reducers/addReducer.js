import {combineReducers} from 'redux';

const countReducer =() =>{
  return[count: 1
  ]
};

const addReducer = (action)=>{
  if(action.type === "ADD_ONE"){
    return  count: count +1 ;
  }
  else return count;
}

const subtractReducer = action =>{
  if(action.type === "SUBTRACT_ONE"){
      return count: count-1;
  }
  else return count;
}

export default combineReducers({
  count: countReducer,
  add: addReducer,
  take: subtractReducer,
})
