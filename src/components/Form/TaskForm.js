import FormControl from "./FormControl"
import './TaskForm.css'

function TaskForm(props){
    return (
        <div className="container_TaskForm">
                <h1>Task</h1>
                <FormControl
                    id="criar_task"
                    // label="Task"
                    type="text"
                    onChange={props.onChange}
                    name="task"
                    value={props.task_value}
                    completed={props.completed}
                />
            <button type="button" 
                className='btn_add'
                onClick={props.onClick}>
                    {props.button_label}
                </button>
        </div>
    )
}
export default TaskForm