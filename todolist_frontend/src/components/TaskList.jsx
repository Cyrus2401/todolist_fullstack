import { useEffect, useState } from 'react'
import AddTask from './AddTask'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


function TaskList() {

    const [todos, setTodos] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))

    }, [])

    const handleCompleted = (id) => {

        axios.put('http://localhost:3001/update/'+id)
            .then(result => {
                console.log(result)
                location.reload()
            })
            .catch(err => console.log(err))

    }

    const handleDeleted = (id) => {

        axios.delete('http://localhost:3001/delete/'+id)
            .then(result => {
                console.log(result)
                location.reload()
            })
            .catch(err => console.log(err))

    }

    return (
    
        <div className="container w-50 mt-5">
            <div className="row justify-content-center align-items-center main-row">

                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col p-3">
                            <h5>TO DO LIST APP</h5>
                        </div>
                    </div>

                    <AddTask />
                    
                    <h4 className="fw-bold mb-4">Liste des tâches</h4>

                    {
                        todos.length === 0 

                        ? (
                            <h4>No record</h4>
                        ) : (

                            todos.map(todo => (
                                // <div key={todo._id}>
                                //     {todo.task}
                                // </div>

                                <div key={todo._id} className="d-flex justify-content-between align-items-center border p-3 rounded mb-4" style={{ backgroundColor: todo.completed ? 'lightgreen' : '#fff' }}>
                                    <span className="col-10">{todo.task}</span>
                                    <span className="d-flex gap-2">
                                        <FontAwesomeIcon icon={faCheck} className="text-success icons fs-5" title="Terminer la tâche" onClick={() => handleCompleted(todo._id)} />
                                        <FontAwesomeIcon icon={faTimes} className="text-danger icons fs-5" title="Supprimer la tâche" onClick={() => handleDeleted(todo._id)} />
                                    </span>
                                </div>
                            ))

                        )
                    }

                </div>

            </div>
        </div>

    )
}

export default TaskList
  