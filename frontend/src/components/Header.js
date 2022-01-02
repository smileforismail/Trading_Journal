import React from "react";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
	return (
		<Navbar className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
			<Container>
				<Navbar.Brand href="#home">
					<h1>Trading Journal</h1>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
