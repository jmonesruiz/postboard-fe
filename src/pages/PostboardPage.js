import { Link, useLocation, useParams } from "react-router-dom";
import "./PostboardPage.scss";
import { useEffect, useState } from "react";
import { IoReloadSharp as ReloadIcon, IoArrowBackSharp as BackIcon } from "react-icons/io5";
import NewMessageInput from "../components/NewMessageInput";
import { deleteMessage, deletePostboard, findPb, getPb, postMessage } from "../services";
import Message from "../components/Message";
import PostboardHeader from "../components/PostboardHeader";

function PostboardPage(props) {
	const location = useLocation();
	const { secretcode } = useParams();
	const [postboard, setPostboard] = useState({ messages: [] });

	useEffect(() => {
		if (location.state) {
			fetchPbData(location.state.pbId);
		} else {
			findPbId();
		}
		// eslint-disable-next-line
	}, []);

	async function findPbId() {
		const res = await findPb(secretcode);
		console.log(res);
		if (res.status === 200) {
			fetchPbData(res.data._id);
		} else {
			// ERROR
		}
	}

	async function fetchPbData(pbId) {
		const res = await getPb(pbId);
		if (res.status === 200) {
			setPostboard(res.data);
		} else {
			// ERROR
		}
	}
	function reload() {
		fetchPbData(postboard._id);
	}

	return (
		<div className="postboard-page">
			<PostboardHeader
				name={postboard.name}
				secretcode={postboard.secretCode}
				creatorId={postboard.creatorId}
				userId={props.userId}
				onDelete={deletePostboardHandler}
			/>
			<main className="postboard-page__postboard">
				<div className="postboard-page__buttons">
					<Link to="../" className="postboard-page__btn">
						<BackIcon className="postboard-page__icon" />
					</Link>
					<button className="postboard-page__btn" onClick={reload}>
						<ReloadIcon className="postboard-page__icon" />
					</button>
				</div>
				<ul className="postboard-page__messages">
					{postboard.messages.map((message, index) => {
						return (
							<Message
								key={index}
								message={message.message}
								messageId={message._id}
								author={message.author}
								color={message.color}
								authorId={message.authorId}
								userId={props.userId}
								onDelete={deleteMessageHandler}
							/>
						);
					})}
				</ul>
			</main>
			<NewMessageInput
				author={props.author}
				color={props.color}
				setAuthor={props.setAuthor}
				setColor={props.setColor}
				onSubmit={postMessageHandler}
			/>
		</div>
	);

	async function postMessageHandler(message) {
		let author = props.author;
		if (props.author === "") {
			props.setAuthor("guest");
			author = "guest";
		}
		//EDIT USER TO SAVE LAST AUTHOR NAME AND LAST COLOR
		const res = await postMessage(postboard._id, message, author, props.color, props.userId);
		if (res.status === 200) {
			reload();
		}
		console.log(res);
	}

	async function deleteMessageHandler(messageId) {
		const res = await deleteMessage(postboard._id, messageId);
		if (res.status === 200) {
			reload();
		} else {
			// ERROR
		}
	}

	async function deletePostboardHandler() {
		const res = await deletePostboard(postboard._id);
		if (res.status === 200) {
			reload();
		} else {
			// ERROR
		}
	}
}

export default PostboardPage;
