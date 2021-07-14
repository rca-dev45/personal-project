const initialState ={
  count: 1
};

function addReducer(state = initialState, action){
  switch(action.type){
    case 'ADD_ONE':
      return{
        count: state.count + 1
      };
      case 'SUB_ONE':
      return{
        count: state.count -1
      };
      default:
        return state;
  }
}

export default addReducer;
