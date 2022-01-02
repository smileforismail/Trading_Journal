import React from "react";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const HomeTable = () => {
	return (
		<Container>
			<Row className=" mt-5 mb-4 justify-content-center">
				<Col className="col-8">
					<h1 className="text-center">Track Record</h1>

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
				</Col>
			</Row>
		</Container>
	);
};

export default HomeTable;
