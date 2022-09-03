import { ALL, COMPLETED, CREATE, EDIT, MARKASDONE, REMOVE, SETALL, SETCOMPLETED, SETUNCOMPLETED, UNCOMPLETED } from "./Constants";

const getFromLocal = () => {
    let items = localStorage.getItem("todos");
    if (items) {
      return JSON.parse(items);
    }
    return [];
  };

const TododsReducers = (todos = getFromLocal(), action) => {
    switch(action.type){
        case CREATE:
        case EDIT:
            return [...todos, action.payload];
        case REMOVE:
            return todos.filter(todo => todo.id!==action.payload.id)
        case MARKASDONE:
            return todos.map(todo => todo.id===action.payload.id ? action.payload : todo);
        default:
            return todos
    }
};

const FilterReducers = (state=[], action) => {
    const {type, payload} = action;
    switch(type){
        case COMPLETED:
            return payload.filter(todo => todo.isCompleted);
        case UNCOMPLETED:
            return payload.filter(todo => !todo.isCompleted);
        case ALL:
            return payload;
        default:
            return state;
    }
}

const StatusReducer = (state="all", action) => {
    const {type, payload} = action;
    switch(type){
        case SETCOMPLETED:
            return payload
        case SETUNCOMPLETED:
            return payload;
        case SETALL:
            return payload;
        default:
            return state;
    }
}

export {TododsReducers, FilterReducers, StatusReducer};