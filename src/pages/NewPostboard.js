import { useState } from "react";
import Menu from "../components/Menu";
import "./NewPostboard.scss";
import { postPb } from "../services";
import { useNavigate } from "react-router-dom";

function NewPostboard(props) {
	const [name, setName] = useState("");
	const navigate = useNavigate();

	return (
		<Menu title="New Postboard" isSubMenu>
			<form className="new-postboard" onSubmit={submitHandler}>
				<div className="new-postboard__name">
					<label className="new-postboard__name-label" htmlFor="name">
						Name:
					</label>
					<input
						className="new-postboard__name-input"
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={changeHandler}
						placeholder="insert name"
						autoComplete="off"
					/>
				</div>
				<button className="new-postboard__create-btn">Create</button>
			</form>
		</Menu>
	);

	function changeHandler(e) {
		setName(e.target.value);
	}

	async function submitHandler(e) {
		e.preventDefault();
		if (name.replace(/\s+/g, "") !== "") {
			// CREATE POSTBOARD
			const res = await postPb(props.userId, name);
			if (res.status === 201) {
				navigate(`../postboard/${res.data.secretCode}`, { state: { pbId: res.data._id } });
			} else {
				// ERROR
			}
		} else {
			// ERROR
			console.log("EMPTY NAME");
		}
	}
}

export default NewPostboard;
