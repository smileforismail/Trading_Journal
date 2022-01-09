import React from "react";

// routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";
import NewEntryScreen from "./screens/NewEntryScreen.js";
import AllTradesScreen from "./screens/AllTradesScreen.js";
import SingleTradeScreen from "./screens/SingleTradeScreen.js";

function App() {
	return (
		<Router>
			<Header />

			<main>
				<Routes>
					<Route exact path="/" element={<HomeScreen />} />
					<Route path="/new-entry" element={<NewEntryScreen />} />
					<Route path="/trades" element={<AllTradesScreen />} />
					<Route path="/trades/:id" element={<SingleTradeScreen />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
