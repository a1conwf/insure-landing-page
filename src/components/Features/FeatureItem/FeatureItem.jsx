import React from "react";
import "./FeatureItem.scss";

const FeatureItem = ({img, title, text}) => {
	return (
		<div className="feature">
			<img src={img} alt={title} className="feature__img" />
			<h4 className="feature__title">{title}</h4>
			<p className="feature__text">{text}</p>
		</div>
	);
};

export default FeatureItem;
