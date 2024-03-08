// Import the ACTION TYPES from the actions file.

import {
    ADD_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../actions';


// Define the initial state of the reducer as an empty array.

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) =>
                (index === action.index)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case EDIT_TODO:
            return state.map((todo, index) =>
                (index === action.index)
                    ? { ...todo, text: action.text }
                    : todo
            )
        case DELETE_TODO:
            return state.filter((todo, index) =>
                index !== action.index
            )
        default:
            return state
    }
}

export default todos;