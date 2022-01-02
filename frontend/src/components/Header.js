import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
	// remove underline from link
	const noUnderline = { textDecoration: "none" };

	return (
		<Navbar className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
			<Container>
				<Link to={"/"} style={noUnderline}>
					<Navbar.Brand>
						<h1>Trading Journal</h1>
					</Navbar.Brand>
				</Link>
			</Container>
		</Navbar>
	);
};

export default Header;
