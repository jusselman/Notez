import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function TextField(props) {

    const [expanded, makeExpanded] = useState(false);

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

    function expand() {
        makeExpanded(true);
    }

    return (
        <div className="task-area">
            <form className="make-task">
                {expanded && (
                    <input
                        name="title"
                        value={task.title}
                        placeholder="Task"
                        onChange={handleChange}
                    />
                )}

                <textarea
                    name="content"
                    onClick={expand}
                    value={task.content}
                    placeholder="Description"
                    rows={expanded ? 4 : 1}
                    onChange={handleChange}
                />
                <Zoom in={expanded}>
                    <Fab onClick={submitTask}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default TextField;