import "./FormControl.css";

function FormControl(props) {
  return (
    <div className="container_FormControl">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        onChange={props.onChange}
        name={props.name}
        completed={props.completed}
        value={props.value}
      />
    </div>
  );
}
export default FormControl;
