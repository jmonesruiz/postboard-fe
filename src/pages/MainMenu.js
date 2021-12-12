import "./MainMenu.scss";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function MainMenu() {
	return (
		<Menu>
			<div className="main-menu">
				<Link className="main-menu__btn" to="new">
					New Postboard
				</Link>
				<Link className="main-menu__btn" to="join">
					Join Postboard
				</Link>
			</div>
		</Menu>
	);
}

export default MainMenu;
