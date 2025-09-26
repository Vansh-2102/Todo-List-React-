import React, { useState } from 'react';

function TodoList() {

    const [task, setTask] = useState(["Eat Breakfast", "Take a shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTask([...task, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updateTask = [...task];
            [updateTask[index], updateTask[index - 1]] =
                [updateTask[index - 1], updateTask[index]];
            setTask(updateTask);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updateTask = [...task];
            [updateTask[index], updateTask[index + 1]] =
                [updateTask[index + 1], updateTask[index]];
            setTask(updateTask);
        }
    }
    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}
                >Add
                </button>
            </div>

            <ol>

                {task.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >Delete</button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >👆</button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                        >👇
                        </button>
                    </li>)}
            </ol>
        </div>
    );
}

export default TodoList;