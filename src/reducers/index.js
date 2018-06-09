import { combineReducers } from 'redux';
import messageList from './message_reducer';
import supportName from './supportName_reducer';

const rootReducer = combineReducers({
  messageList,
  supportName,
});

export default rootReducer;
