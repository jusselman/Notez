import React, { useState } from 'react';

function TextField(props) {

    const [task, makeTask] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        makeTask(prevTask => {
            return {
                ...prevTask,
                [name]: value
            }
        })
    }

    function submitTask(e) {
        props.onAdd(task);
        makeTask({
            title: "",
            content: ""
        })
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    value={task.title}
                    placeholder="Task"
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    value={task.content}
                    placeholder="Description"
                    rows="4"
                    onChange={handleChange}
                />
                <button onClick={submitTask}>Done</button>
            </form>
        </div>
    );
}

export default TextField;