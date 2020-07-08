import {
  FETCH_TODOS,
  UPDATE_TODOS,
  DELETE_ITEM,
  ADD_TODO
} from "src/components/withRedux/constants/types";

// initial state:
const initialState = [
  {
    id: 1,
    title: "tests title",
    done: false
  },
  {
    id: 2,
    title: "tests2  title",
    done: true
  },
  {
    id: 3,
    title: "tests 3 title",
    done: false
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TODOS:
      console.log("state", state);
      return [
        ...state.map(v => {
          if (v.id === action.payload.id) {
            v.done = action.payload.done;
            v.title = action.payload.title;
          }
          return v;
        })
      ];
    case DELETE_ITEM:
      return [
        ...state.filter(v => {
          return v.id !== action.payload;
        })
      ];
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload,
          done: false
        }
      ];
    case FETCH_TODOS:
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
