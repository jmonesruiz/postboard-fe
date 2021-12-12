import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import PostboardPage from "./pages/PostboardPage";
import NewPostboard from "./pages/NewPostboard";
import JoinPostboard from "./pages/JoinPostboard";
import { useEffect, useState } from "react";
import { getUser, postUser } from "./services";

function App() {
	const [userId, setUserId] = useState("");
	const [author, setAuthor] = useState("");
	const [color, setColor] = useState("");

	useEffect(() => {
		let savedUserId = sessionStorage.getItem("userId");
		if (savedUserId) {
			setUserId(savedUserId);
			// SEND REQUEST TO GET USER
			async function loadUser(userId) {
				const res = await getUser(userId);
				if (res.status === 200) {
					setAuthor(res.data.lastAuthorName);
					setColor(res.data.lastColor);
				} else {
					// ERROR
				}
			}
			loadUser(savedUserId);
		} else {
			// SEND REQUEST TO GENERATE USER ID, AND SAVE IT TO LOCALSTORAGE
			async function genUser() {
				const res = await postUser();
				if (res.status === 201) {
					sessionStorage.setItem("userId", res.data._id);
					setUserId(res.data._id);
					setAuthor(res.data.lastAuthorName);
					setColor(res.data.lastColor);
				} else {
					// ERROR
				}
			}
			genUser();
		}
	}, []);

	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<MainMenu />} exact />
				<Route path="/new" element={<NewPostboard userId={userId} />} />
				<Route path="/join" element={<JoinPostboard userId={userId} />} />
				<Route
					path="/postboard/:secretcode"
					element={
						<PostboardPage
							userId={userId}
							author={author}
							color={color}
							setAuthor={setAuthor}
							setColor={setColor}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
