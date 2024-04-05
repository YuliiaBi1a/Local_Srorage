import '../Form/Form.css'

function Form({handleChange, addTask, task}){
    return (
        <div className="form-container">
            <h2>Task Form</h2>
            <form onSubmit={addTask}>
                <input type="text" 
                name="task" 
                placeholder="Add your task" 
                value = {task} 
                onChange={handleChange}/>

                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export  default Form; 