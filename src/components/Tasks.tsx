import Task from './Task';
import { TasksProps } from '../model/Props';
import { FunctionComponent } from 'react';

const Tasks: FunctionComponent<TasksProps> = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>)
            )}  
        </>
    )
}

export default Tasks
