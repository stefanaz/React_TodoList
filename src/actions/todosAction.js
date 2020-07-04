import { FETCH_TODOS, UPDATE_TODOS, DELETE_ITEM } from 'src/constants/types';

export const updateTODOs = (todo) => dispatch => {
    // console.log('todosActions', todo);
    dispatch({
        type: UPDATE_TODOS, 
        payload: todo
    })
}

export const deleteItem = (id) => dispatch => {
    console.log('id', id);
    dispatch({
        type: DELETE_ITEM, 
        payload: id
    })
}