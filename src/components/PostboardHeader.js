import "./PostboardHeader.scss";
import { AiFillDelete as DeleteIcon, AiFillEdit as EditIcon } from "react-icons/ai";
import { Link } from "react-router-dom";

function PostboardHeader(props) {
	return (
		<header className="postboard-header">
			<h1 className="postboard-header__logo">Postboard</h1>
			<div className="postboard-header__info">
				<div className="postboard-header__title">
					<h2 className="postboard-header__name">{props.name}</h2>
					{props.creatorId === props.userId ? (
						<div className="postboard-header__buttons">
							{/* <button
								className="postboard-header__btn"
								onClick={(e) => props.onEdit()}
							>
								<EditIcon className="postboard-header__icon" />
							</button> */}
							<Link
								to="../"
								className="postboard-header__btn"
								onClick={(e) => props.onDelete()}
							>
								<DeleteIcon className="postboard-header__icon" />
							</Link>
						</div>
					) : (
						""
					)}
				</div>
				<h3 className="postboard-header__secretcode">
					Secret code:
					<span className="postboard-header__secretcode-value">
						{String(props.secretcode).padStart(6, "0")}
					</span>
				</h3>
			</div>
		</header>
	);
}

export default PostboardHeader;
