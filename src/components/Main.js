import React, { useState } from 'react'
import TodoComponent from './TodoComponent'
import './Main.css';

export default function Main() {

    const [todoData, setTodoData] = useState([]);
    const [todo, setTodo] = useState({
        title: "",
        status: false
    });
    const handleSetList = async () => {
        console.log(todo);
        const data = await [...todoData, todo]
        await setTodoData(data);
        console.log(todoData, "list");
        setTodo({title:""})
    }
    const handleSetTodo = (event) => {
        const title = event.target.value;
        setTodo({
            title: title,
            status: false
        })

    }
    return (
        <div className='main_conatiner container  text-center border border-1 p-4 mt-5' >
            <h2>My Todo List</h2>
            <div className='input-group mt-3'>
                <input type="text" className='form-control' value={todo.title} onChange={handleSetTodo} />
                <button className='btn btn-primary' onClick={handleSetList}>
                    <span className=' bi bi-plus  text-white'></span>
                </button>

            </div>
            {
                todoData.map((item, index) => (
                    <TodoComponent title={item.title} status={item.status} key={index} />
                ))
            }

        </div>
    )
}
