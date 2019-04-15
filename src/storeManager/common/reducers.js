import { ACTION } from './constants';

const initialState = {
  count : 0,
  isLoading : false,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.UPDATE_COUNT:
      return { ...state, count: state.count + 1 };
    case ACTION.UPDATE_DETAIL:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}