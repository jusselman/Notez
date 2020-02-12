import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


function Task(props) {

    function handleChange() {
        props.onDelete(props.id);
    }


    return (
        <div>
            <div className="task">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className="task-delete" onClick={handleChange}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
}

export default Task;