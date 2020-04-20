import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Game from './game';
import {play} from '../../game-redux/actions';
import { getGamePlayStatus } from '../../game-redux/selectors';
import { GameState } from '../../game-redux/types';

function mapStateToProps(state: GameState) {
  const gamePlayStatus = getGamePlayStatus(state);
  return {
    gamePlayStatus,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({
        play,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);