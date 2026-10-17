import React, { useState } from 'react'

const App = () => {

    const [text, setText] = useState('');
    const [task, setTask] = useState([]);

    function addTask() {
        if (text.trim() === "") {
            return;
        }
        setTask([...task, { text: text, done: false }]);
        setText('');
    }
    function deleteTask(index) {

        setTask(task.filter((task, i) => i != index))

    }
    function doneTask(index) {
        setTask(task.map((task, i) => i === index ? { ...task, done: !task.done } : task))

    }

    return (
        <div className='maincontainer'>
            <div className='Input'>
                <input className='realInput' type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='What is New' required />
                <button onClick={addTask}>Add</button>
            </div>

            <div className='task-container'>
                <ul>
                    {task.map((task, index) => (
                        <li className='listdiv' key={index}>
                            <span
                                className='listtask'
                                style={{

                                    color: task.done ? "green" : "blue"
                                }}
                            >
                                {task.text}
                                <textarea className='text_discription'
                                    disabled={task.done}
                                    placeholder="Write details..."
                                    rows={2}
                                />
                            </span>

                            <button className='done' style={{ backgroundColor: task.done ? "blue" : "green" }} onClick={() => doneTask(index)}>
                                {task.done ? "Undo" : "Done"}
                            </button>

                            <button className='Delete' onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default App
