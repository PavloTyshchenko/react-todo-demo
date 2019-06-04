import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, filter, onDeleted,
    onToggleImportant,
    onToggleDone }) => {

    // var currArr = todos;

    // // check with filter and in case of existing text filter -> create new filtered array;
    // if (filter.text !== '') {

    //     currArr = todos.filter((el) => {
    //         if (el.label.indexOf(filter.text) !== -1) {
    //             return true;
    //         }
    //         return false;
    //     });

    // }

    // // check with trigger value: 0 - go ahead. 1 only active, 2 - done
    // if (filter.trigger == 1) {

    //     currArr = currArr.filter((el) => {
    //         if (el.done == true) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     });
    // }
    // if (filter.trigger == 2) {

    //     currArr = currArr.filter((el) => {
    //         if (el.done == true) {
    //             return true;
    //         }
    //         else {
    //             return false;
    //         }
    //     });
    // }

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;