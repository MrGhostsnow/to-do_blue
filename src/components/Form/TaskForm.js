import FormControl from "./FormControl"

function TaskForm(props){
    return (
        <div>
                <FormControl
                    id="criar_task"
                    label="Task"
                    type="text"
                    onChange={props.onChange}
                    name="task"
                    value={props.task_value}
                    completed={props.completed}
                />
            <button type="button" 
                className={`btn btn-danger`}
                onClick={props.onClick}>
                    {props.button_label}
                </button>
        </div>
    )
}
export default TaskForm