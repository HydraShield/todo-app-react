import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = ({ setInputText}) => {
    const filteredTodos = useSelector(state => state.filterTodos)

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        setInputText={setInputText}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;