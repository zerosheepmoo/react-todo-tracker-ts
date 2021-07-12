import React, { FormEvent, FunctionComponent, useState } from "react";
import { NonIDTaskModel } from "../model/TaskModel";

interface AddTaskProps {
    onAdd: (tm: NonIDTaskModel) => void;
}

const AddTask:FunctionComponent<AddTaskProps> = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task');
            return;
        }

        onAdd({ text, day, reminder });
        
        setText('');
        setDay('')
        setReminder(false);
    }

    return (
        <form className='add=form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Tasks</label>
                <input type='text' placeholder='Add Task' className='form-control' value={text} onChange={(e) => setText(e.target.value)}></input>
                <input type='text' placeholder='Add Day & Time' className='form-control' value={day} onChange={(e) => setDay(e.target.value)}></input>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    className='form-control form-control-check'
                    value={reminder.toString()}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    checked={reminder}
                ></input>
            </div>

            <input className='btn btn-block' type='submit' value="Save Task"></input>
        </form>
    )
}

export default AddTask
