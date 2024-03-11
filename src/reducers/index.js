// Import the ACTION TYPES from the actions file.
import {
    ADD_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../actions';

// Define the initial state of the reducer as an empty array.
const todos = (state = [], action) => {
    switch (action.type) {        // for each action type, return the new state.
        case ADD_TODO:     // if the action type is ADD_TODO, return a new array with the new todo.
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:    // if the action type is TOGGLE_TODO, return a new array with the toggled todo.
            return state.map((todo, index) =>
                (index === action.index)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case EDIT_TODO:      // if the action type is EDIT_TODO, return a new array with the edited todo.
            return state.map((todo, index) =>
                (index === action.index)
                    ? { ...todo, text: action.text }
                    : todo
            )
        case DELETE_TODO:       // if the action type is DELETE_TODO, return a new array with the deleted todo.
            return state.filter((todo, index) =>
                index !== action.index
            )
        default:            // if the action type is not recognized, return the current state.
            return state
    }
}

export default todos;