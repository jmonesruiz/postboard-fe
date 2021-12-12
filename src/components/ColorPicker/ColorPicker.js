import ColorOption from "./ColorOption";
import "./ColorPicker.scss";

function ColorPicker(props) {
	return (
		<fieldset className="color-picker">
			<legend className="color-picker__label">Color:</legend>
			<div className="color-picker__options">
				<ColorOption color="#BE7979" selected={props.color} onChange={changeHandler} />
				<ColorOption color="#933F45" selected={props.color} onChange={changeHandler} />
				<ColorOption color="#CC925E" selected={props.color} onChange={changeHandler} />
				<ColorOption color="#DACB80" selected={props.color} onChange={changeHandler} />
				<ColorOption color="#76C379" selected={props.color} onChange={changeHandler} />
				<ColorOption color="#508D76" selected={props.color} onChange={changeHandler} />
				<ColorOption color="#7B99C8" selected={props.color} onChange={changeHandler} />
				<ColorOption color="#99D4E6" selected={props.color} onChange={changeHandler} />
			</div>
		</fieldset>
	);

	function changeHandler(e) {
		props.setColor(e.target.value);
	}
}

export default ColorPicker;
