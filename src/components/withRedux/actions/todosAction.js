import {
  UPDATE_TODOS,
  DELETE_ITEM,
  ADD_TODO
} from "src/components/withRedux/constants/types";

export const updateTODOs = todo => dispatch => {
  dispatch({
    type: UPDATE_TODOS,
    payload: todo
  });
};

export const addTODO = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
};

export const deleteItem = id => dispatch => {
  console.log("id", id);
  dispatch({
    type: DELETE_ITEM,
    payload: id
  });
};
