import React from "react";
import "./Hero.scss";

import heroImg from "../../assets/img/image-intro-desktop.jpg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__inner">
					<img src={heroImg} alt="hero-img" className="hero__inner-img" />

					<div className="hero__inner-content">
						<h1 className="hero__inner-content-title">
							Humanizing <br /> your insurance.
						</h1>
						<p className="hero__inner-content-text">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
						<a href="#!" className="cta__btn light">
							View plans
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
