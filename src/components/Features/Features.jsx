import React from "react";
import {features} from "../../data/data";
import FeatureItem from "./FeatureItem/FeatureItem";
import "./Features.scss";

const Features = () => {
	return (
		<section className="features">
			<div className="container">
				<div className="features__separator"></div>
				<h2 className="features__title">We’re different</h2>
				<div className="features__content">
					{features.map((feature) => (
						<FeatureItem key={feature.id} img={feature.img} title={feature.title} text={feature.text} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
