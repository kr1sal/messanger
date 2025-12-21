import './SubmitButton.css';


function SubmitButton(props: { text: string, onSubmit: VoidFunction }) {
  return <button type="submit" onClick={props.onSubmit}>{props.text}</button>
}

export default SubmitButton;
