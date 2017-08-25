import {UPDATE_TIME} from '../actions/TimeActionCreators';

function timeReducer(state=new Date(),action){
  switch(action.type){
    case UPDATE_TIME:
      return new Date();
    default:
      return state;
  }
}

export default timeReducer;
