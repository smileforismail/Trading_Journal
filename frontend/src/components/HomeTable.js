import React from "react";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const HomeTable = () => {
	return (
		<Container>
			<Row className="text-center mt-5">
				<Col>
					<h2>Track Record</h2>
				</Col>
			</Row>

			<Table className="table-bordered table-striped table-sm">
				<thead className="table-dark">
					<tr>
						<th></th>
						<th>All Trades</th>
						<th>Long Trades</th>
						<th>Short Trades</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Total Profit & Loss</th>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<th>Total Return</th>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<th>Avg. Return Per Trade</th>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<th>Total No. Trades</th>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<th>Batting Avg.</th>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<th>Win/Loss Ratio</th>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
};

export default HomeTable;
