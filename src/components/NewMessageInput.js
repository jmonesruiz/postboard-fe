import "./NewMessageInput.scss";
import ColorPicker from "./ColorPicker/ColorPicker";
import { useState } from "react";

function NewMessageInput(props) {
	const [message, setMessage] = useState("");

	return (
		<form className="new-message" onSubmit={submitHandler}>
			<label className="new-message__label" htmlFor="message">
				Add message:
			</label>
			<textarea
				className="new-message__input"
				name="message"
				id="message"
				value={message}
				placeholder="insert message"
				autoComplete="off"
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						submitHandler(e);
					}
				}}
				onChange={messageChangeHandler}
			/>
			<div className="new-message__controls">
				<div className="new-message__author">
					<label className="new-message__author-label" htmlFor="author">
						Writing as:
					</label>
					<input
						className="new-message__author-input"
						type="text"
						name="author"
						id="author"
						value={props.author}
						onChange={authorChangeHandler}
						placeholder="guest"
						autoComplete="off"
					/>
				</div>

				<ColorPicker color={props.color} setColor={props.setColor} />
				<button className="new-message__post-btn">Post</button>
			</div>
		</form>
	);

	function messageChangeHandler(e) {
		setMessage(e.target.value.trimStart().replace(/\s+/g, " "));
	}

	function authorChangeHandler(e) {
		props.setAuthor(e.target.value.trimStart().replace(/\s+/g, " "));
	}

	function submitHandler(e) {
		e.preventDefault();
		if (message !== "") {
			props.onSubmit(message);
			setMessage("");
		} else {
			//ERROR
		}
	}
}

export default NewMessageInput;
