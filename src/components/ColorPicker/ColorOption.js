import "./ColorOption.scss";

function ColorOption(props) {
	return (
		<label className="color-option" htmlFor={props.color}>
			<input
				className="color-option__radio"
				type="radio"
				name="color"
				id={props.color}
				value={props.color}
				checked={props.selected === props.color}
				onChange={props.onChange}
			/>
			<div className="color-option__box" style={{ backgroundColor: props.color }}></div>
		</label>
	);
}

export default ColorOption;
