import "./Message.scss";
import { AiFillDelete as DeleteIcon, AiFillEdit as EditIcon } from "react-icons/ai";

function Message(props) {
	return (
		<li className="message" style={{ borderColor: props.color }}>
			<p className="message__text">{props.message}</p>
			<p className="message__author">{props.author}</p>
			{props.authorId === props.userId ? (
				<div className="message__buttons">
					{/* <button className="message__btn" onClick={(e) => props.onEdit()}>
						<EditIcon className="message__icon" />
					</button> */}
					<button
						className="message__btn"
						onClick={(e) => props.onDelete(props.messageId)}
					>
						<DeleteIcon className="message__icon" />
					</button>
				</div>
			) : (
				""
			)}
		</li>
	);
}

export default Message;
