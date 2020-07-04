import { FETCH_TODOS, UPDATE_TODOS, DELETE_ITEM } from 'src/constants/types'

  // initial state: 
  const initialState = [
        {
            id: 1,
            title: 'tests title',
            done: false,
        },
        {
            id: 2,
            title: 'tests2  title',
            done: true,
        },
        {
            id: 3,
            title: 'tests 3 title',
            done: false,
        }
  ];
  
  

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TODOS: 
        return [
            ...state.map(v => {
                if (v.id === action.payload.id) {
                    v.done = action.payload.done;
                    v.title = action.payload.title;
                }
                return v;
            })
        ]
        break;
      case DELETE_ITEM:
        console.log('payload', action.payload);
        return [
            ...state.filter(v => {
                return (v.id !== action.payload);
            })
        ]
        break;
      case FETCH_TODOS:
        break;
    }
    return state;
  };

  export default reducer;
  