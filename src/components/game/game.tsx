import React from 'react';
import Canvas from '../canvas/canvas';
import './game.css';

function Game() {
  return (
    <div className="conway-game conway-game--control-pane-expanded">
      <div>
        <Canvas />
      </div>
      <div className="conway-game__control-pane">Controls</div>
    </div>
  );
}

export default Game;