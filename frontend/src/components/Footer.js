import React from "react";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
	return (
		<footer className="bg-dark navbar fixed-bottom">
			<Container>
				<Row>
					<Col className="pt-3 text-center">
						<p>Copyright &copy; Ismail's Trading Journal, Inc</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
