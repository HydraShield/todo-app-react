import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, editTodo } from "../Action-Reducer/Action";

const TodoListItem = ({ todo, setInputText }) => {

    const dispach = useDispatch();

    const completeTodoHandler = () => {
        dispach(completeTodo(todo))
    }

    const deleteTodoHabdler = () => {
        dispach(deleteTodo(todo));
    }

    const editTodoHabdler = () => {
        setInputText(todo.text)
        dispach(editTodo(todo))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.isCompleted ? "completed" : ""} ${new Date().getTime() - new Date(todo.createdAt).getTime() > 24*60*60000+15379200482 ? "old" : ""}`}>{todo.text}</li>
            <button onClick={editTodoHabdler} className="edit-btn">
                <i className="fas fa-pen"></i>
            </button>
            {!todo.isCompleted ?
                (<button onClick={completeTodoHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>) :
                (<button onClick={completeTodoHandler} className="notComplete-btn">
                    <i className="fas fa-plus"></i>
                </button>)}
            <button onClick={deleteTodoHabdler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default TodoListItem;