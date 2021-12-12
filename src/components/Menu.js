import { Link } from "react-router-dom";
import { IoArrowBackSharp as BackIcon } from "react-icons/io5";
import "./Menu.scss";

function Menu(props) {
	return (
		<div className="menu">
			<header className="menu__header">
				<h1 className="menu__logo">Postboard</h1>
			</header>
			{props.title ? (
				<header className="menu__title-box">
					{props.isSubMenu ? (
						<Link className="menu__back-button" to="../">
							<BackIcon className="menu__back-icon" />
						</Link>
					) : (
						""
					)}
					<h2 className="menu__title">{props.title}</h2>
				</header>
			) : (
				""
			)}
			<main className="menu__body">{props.children}</main>
		</div>
	);
}

export default Menu;
