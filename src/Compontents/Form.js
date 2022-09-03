import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, status } from "../Action-Reducer/Action";

const Form = ({inputText, setInputText}) => {

    const dispach = useDispatch();
    const todos = useSelector(state => state.todos);

    const inputTextHadler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHadler = (e) => {
        e.preventDefault();
        if (inputText === "") {
            alert("Todo is Empty");
            return;
        }
        if (todos.find(todox => todox.text === inputText)) {
            alert("Todo alredy there");
            setInputText("");
            return;
        }
        const id = todos.length === 0 ? 0 : todos[todos.length-1].id + 1;
        dispach(createTodo(inputText, id));
        setInputText("");
    }

    const statusHabdler = (e) => {
        dispach(status(e.target.value))
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHadler} type="text" className="todo-input" />
            <button onClick={submitTodoHadler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHabdler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;