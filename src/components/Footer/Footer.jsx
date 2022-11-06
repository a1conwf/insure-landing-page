import React from "react";
import "./Footer.scss";
import FooterList from "./FooterList/FooterList";
import {footerLists} from "../../data/data";

//Logo and icons
import Logo from "../../assets/brand/logo.svg";
import iconFacebook from "../../assets/svg/icon-facebook.svg";
import iconTwitter from "../../assets/svg/icon-twitter.svg";
import iconPinterest from "../../assets/svg/icon-pinterest.svg";
import iconInstagram from "../../assets/svg/icon-instagram.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__header">
					<img src={Logo} alt="logo-img" className="footer__header-logo" />

					<ul className="footer__header-socials">
						<li>
							<a href="#!">
								<img src={iconFacebook} alt="icon-facebook" />
							</a>
						</li>
						<li>
							<a href="#!">
								<img src={iconTwitter} alt="icon-twitter" />
							</a>
						</li>
						<li>
							<a href="#!">
								<img src={iconPinterest} alt="icon-pinterest" />
							</a>
						</li>
						<li>
							<a href="#!">
								<img src={iconInstagram} alt="icon-instagram" />
							</a>
						</li>
					</ul>
				</div>

				<nav className="footer__nav">
					{footerLists.map((list) => (
						<FooterList key={list.id} name={list.name} links={list.links} />
					))}
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
