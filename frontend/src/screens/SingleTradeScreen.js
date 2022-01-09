import React, { useState, useEffect } from "react";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";
import Image from "react-bootstrap/Image";
import axios from "axios";
const SingleTradeScreen = () => {
	// get the id parameter in the uri path
	const { id } = useParams();

	const [tradeDoc, setTradeDoc] = useState({});

	// get trade document that matches id from db
	useEffect(() => {
		const fetchData = async () => {
			let res = await axios.get(`http://localhost:4000/api/trades/${id}`);
			setTradeDoc(res.data);
		};
		fetchData();
	});

	return (
		<Container>
			<Row className="justify-content-center">
				<Col className="col-lg-8 col-md-10">
					{/* Back button */}
					<Link to={"/trades"}>
						<Button type="button" className="btn btn-dark btn-lg rounded-0 mt-4">
							Back
						</Button>
					</Link>

					{/* Page Header */}
					<h1 className="text-center mt-5 mb-4">Daily Analysis</h1>

					{/* Trade DATE */}
					<h4 className=" mb-2">{tradeDoc.date}</h4>

					{/* Trade data */}
					<Table className="table-bordered table-striped table-sm">
						<thead className="table-dark">
							<tr>
								<th>Account Bal. ($)</th>
								<th>Type</th>
								<th>FX Pair</th>
								<th>Profit ($)</th>
								<th>% Return</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{tradeDoc.accountBalance}</td>
								<td>{tradeDoc.type}</td>
								<td>{tradeDoc.currencyPair}</td>
								<td>{tradeDoc.profit}</td>
								<td>{tradeDoc.return}</td>
							</tr>
						</tbody>
					</Table>

					{/* Trade Comment */}
					<hr className="mt-4" />
					<h4>Comment</h4>
					<p>{tradeDoc.comment}</p>
					<hr className="mt-4" />

					{/* Chart Image */}
					<h4>Chart Image</h4>
					<a href={tradeDoc.chartImage}>
						<Image fluid src={tradeDoc.chartImage} />
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default SingleTradeScreen;

{
	/* <Row className="justify-content-center">
	<Col className="col-8">
		<ListGroup className="list-group-horizontal">
			<ListGroup.Item>This</ListGroup.Item>
			<ListGroup.Item>ListGroup</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>!</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>horizontally!</ListGroup.Item>
		</ListGroup>
	</Col>
	<Col className="col-8">
		<ListGroup className="list-group-horizontal">
			<ListGroup.Item>This</ListGroup.Item>
			<ListGroup.Item>ListGroup</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>horizontally!</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>horizontally!</ListGroup.Item>
		</ListGroup>
	</Col>
</Row>; */
}
