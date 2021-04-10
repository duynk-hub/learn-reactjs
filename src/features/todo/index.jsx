//rsfp
import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Code',
            status: 'new',
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'completed',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        // clone current arr to the new one
        const newTodoList = [...todoList];

        // console.log(todo, idx);
        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        //update todo list
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;