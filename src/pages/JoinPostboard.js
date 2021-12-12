import { useState } from "react";
import "./JoinPostboard.scss";
import Menu from "../components/Menu";
import { findPb } from "../services";
import { useNavigate } from "react-router-dom";

function JoinPostboard() {
	const [secretCode, setSecretCode] = useState("");
	const navigate = useNavigate();

	return (
		<Menu title="Join Postboard" isSubMenu>
			<form className="join-postboard" onSubmit={submitHandler}>
				<label className="join-postboard__code-label" htmlFor="secretcode">
					Secret code:
				</label>
				<input
					className="join-postboard__code-input"
					type="text"
					name="secretcode"
					id="secretcode"
					value={secretCode}
					onChange={changeHandler}
					placeholder="insert code"
					autoComplete="off"
				/>
				<button className="join-postboard__join-btn">Join</button>
			</form>
		</Menu>
	);

	function changeHandler(e) {
		setSecretCode(e.target.value.match(/[0-9]*/)[0]);
	}

	async function submitHandler(e) {
		e.preventDefault();
		if (secretCode !== "") {
			// JOIN POSTBOARD
			const res = await findPb(secretCode);
			console.log(res);
			if (res.status === 200) {
				navigate(`../postboard/${secretCode}`, { state: { pbId: res.data._id } });
			} else {
				// ERROR
			}
		} else {
			// ERROR
			console.log("EMPTY NAME");
		}
	}
}

export default JoinPostboard;
