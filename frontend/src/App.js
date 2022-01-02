import React from "react";
// components
import Header from "./components/Header.js";
import HomeScreen from "./screens/HomeScreen.js";
import Footer from "./components/Footer.js";

function App() {
	return (
		<div>
			<Header />

			<main>
				<HomeScreen />
			</main>

			<Footer />
		</div>
	);
}

export default App;
