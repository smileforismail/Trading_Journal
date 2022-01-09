import React from "react";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
	return (
		<footer className="bg-dark">
			<Row>
				<Col className="mt-2 mb-0 text-center">
					<p>Copyright &copy; Ismail's Trading Journal, Inc &#174;</p>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;
