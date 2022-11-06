import React from "react";
import "./FooterList.scss";

const FooterList = ({name, links}) => {
	return (
		<>
			<ul className="footer__nav-list">
				<li className="footer__nav-list-name">{name}</li>
				{links.map((link) => (
					<li key={link} className="footer__nav-list-item">
						<a href="#!">{link}</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default FooterList;
