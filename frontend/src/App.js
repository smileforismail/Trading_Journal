import React from "react";

// routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";
import NewEntryScreen from "./screens/NewEntryScreen.js";

function App() {
	return (
		<Router>
			<Header />

			<main>
				<Routes>
					<Route exact path="/" element={<HomeScreen />} />
					<Route path="/newEntry" element={<NewEntryScreen />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
