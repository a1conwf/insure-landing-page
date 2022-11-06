import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Features />
				<Cta />
			</main>
			<Footer />
		</>
	);
};

export default App;
