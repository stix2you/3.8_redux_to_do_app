import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "./actions";
import "./index.scss";

// Must import the store to use it in the app
import { createStore } from 'redux';  
// Must import the Provider to use the store in the app
import todos from './reducers';

// Create the store
const store = createStore(todos);

// Dispatch some actions to populate the store

// ADD ACTIONS
store.dispatch(addTodo('Dispatch my first action'));
console.log("State after adding first todo", store.getState());
store.dispatch(addTodo('Dispatch my second action'));
console.log("State after adding second todo", store.getState());
store.dispatch(addTodo('Dispatch my third action'));
console.log("State after adding third todo", store.getState());

// TOGGLE ACTIONS
store.dispatch(toggleTodo (0));
console.log("State after toggling first todo", store.getState());
store.dispatch(toggleTodo (1));
console.log("State after toggling second todo", store.getState());
store.dispatch(toggleTodo (2));
console.log("State after toggling third todo", store.getState());

// EDIT ACTIONS
store.dispatch(editTodo(0, 'Dispatch my first action edited'));
console.log("State after editing first todo", store.getState());
store.dispatch(editTodo(1, 'Dispatch my second action edited'));
console.log("State after editing second todo", store.getState());
store.dispatch(editTodo(2, 'Dispatch my third action edited'));
console.log("State after editing third todo", store.getState());

// DELETE ACTIONS
store.dispatch(deleteTodo(0));
console.log("State after deleting first todo", store.getState());
store.dispatch(deleteTodo(0));
console.log("State after deleting second todo", store.getState());
store.dispatch(deleteTodo(0));
console.log("State after deleting third todo", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
