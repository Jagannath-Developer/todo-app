import React from 'react'
import './TodoComponent.css'

export default function TodoComponent({ title, status }) {
    return (
        <div className='mt-4 text-start'>
            {status ?
                <input className='check_box_todo' type="checkbox" id="vehicle1" name="todo" checked /> :
                <input className='check_box_todo' type="checkbox" id="vehicle1" name="todo" />}
            <label ><h5 className='todo_text'>{title}</h5> </label><br></br>
            <hr />
        </div>
    )
}
