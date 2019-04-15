import { ACTION } from "./constants";

export function updateCountValue() {
  console.log('action called');
  return function (dispatch) {
    dispatch({
      type: ACTION.UPDATE_COUNT,
    })
  }
}