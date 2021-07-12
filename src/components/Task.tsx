import React, { FunctionComponent } from 'react'
import { TaskProps } from '../model/Props';

const Task:FunctionComponent<TaskProps> = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <div style={{color: 'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}>X</div></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;
