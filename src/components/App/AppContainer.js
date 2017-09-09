import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from './App';
import * as AppActionCreators from '../../actions/AppActionCreators';
import * as FocusActionCreators from '../../actions/FocusActionCreators';
import * as TimeActionCreators from '../../actions/TimeActionCreators';
import * as BgActionCreators from '../../actions/BgActionCreators';
import * as NameActionCreators from '../../actions/NameActionCreators';
import { toggleTimer, setTimer, resetTimer, updateTimer } from '../../reducers/timer';

const mapStateToProps=(state)=>{
  return {
    apps:state.apps,
    focus:state.focus,
    time:state.time,
    background:state.background,
    name:state.name,
    timer: state.timer
  };
}
const mapDispatchToProps=(dispatch)=>{
  const dispatchObj = Object.assign(
    {},
    { toggleTimer: () => dispatch(toggleTimer())},
    { setTimer: time => dispatch(setTimer(time))},
    { resetTimer: () => dispatch(resetTimer())},
    { updateTimer: (time, seconds, id) => dispatch(updateTimer(time, seconds, id))},
    bindActionCreators(AppActionCreators,dispatch),
    bindActionCreators(FocusActionCreators,dispatch),
    bindActionCreators(TimeActionCreators,dispatch),
    bindActionCreators(BgActionCreators,dispatch),
    bindActionCreators(NameActionCreators,dispatch),
  );
  return dispatchObj;
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
