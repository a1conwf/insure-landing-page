import React, {useState} from "react";
import "./Header.scss";

//Logo and icons
import Logo from "../../assets/brand/logo.svg";
import iconHamburger from "../../assets/svg/icon-hamburger.svg";
import iconClose from "../../assets/svg/icon-close.svg";

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<header className="header">
			<nav className="nav">
				<div className="container">
					<img src={Logo} alt="logo-img" className="nav__logo" />

					<ul className={isExpanded ? "nav__list active" : "nav__list"}>
						<li className="nav__list-link">
							<a href="#!">How we work</a>
						</li>
						<li className="nav__list-link">
							<a href="#!">Blog</a>
						</li>
						<li className="nav__list-link">
							<a href="#!">Account</a>
						</li>
						<li className="nav__list-link">
							<a href="#!" className="cta__btn">
								View plans
							</a>
						</li>
					</ul>

					<div className="nav__hamburger" onClick={() => setIsExpanded(!isExpanded)}>
						{!isExpanded ? <img src={iconHamburger} alt="icon-hamburger" /> : <img src={iconClose} alt="icon-close" />}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
