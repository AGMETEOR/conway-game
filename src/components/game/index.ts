import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Game from './game';

import {start} from '../../game-redux/actions';
import { getGameStartStatus } from '../../game-redux/selectors';
import { GameState } from '../../game-redux/types';

function mapStateToProps(state: GameState) {
  const gameStartStatus = getGameStartStatus(state);
  return {
    gameStartStatus,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators({
        start,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);