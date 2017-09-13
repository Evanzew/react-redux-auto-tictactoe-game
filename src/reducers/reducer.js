import {
  ADD_History,
  GO_BACK_HISTORY,
  TOGGLE_GAMER,
  GAME_OVER,
  DELETE_HISTORY,
  NEXT_ROUND
} from "../actions/action";
import { combineReducers } from "redux";

let firstObject = {
  squares: Array(9).fill(null),
  id: 0
};

let firstRound = {
  round: 1,
  player1: 0,
  player2: 0
};

function xIsNext(state = true, action) {
  switch (action.type) {
    case TOGGLE_GAMER:
      return action.xIsNext;
    default:
      return state;
  }
}

const stepNumber = (state = 0, action) => {
  switch (action.type) {
    case GO_BACK_HISTORY:
      return action.stepNumber;
    default:
      return state;
  }
};

const history = (state = [firstObject], action) => {
  switch (action.type) {
    case ADD_History:
      return [
        ...state,
        {
          squares: action.array,
          id: action.id
        }
      ];
    case DELETE_HISTORY:
      return state.slice(0, action.id + 1);
    default:
      return state;
  }
};

function gameOver(state = false, action) {
  switch (action.type) {
    case GAME_OVER:
      return action.gameOver;
    default:
      return state;
  }
}
function round(state = firstRound, action) {
  switch (action.type) {
    case NEXT_ROUND:
      return {
        round: action.round,
        player1: action.player1,
        player2: action.player2
      };
    default:
      return state;
  }
}

const gameApp = combineReducers({
  history,
  stepNumber,
  xIsNext,
  gameOver,
  round
});

export default gameApp;
