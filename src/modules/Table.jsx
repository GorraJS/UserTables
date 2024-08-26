import Form from "./Form";
import axios from "axios";
import { useState } from "react";

function Table() {
	const [data, setData] = useState([]);

	axios
		.get("http://localhost:3000/usuario")
		.then((res) => {
			setData(res.data);
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<table>
			<thead>
				<tr>
					<th scope="col">Nombre</th>
					<th scope="col">Apellido</th>
					<th scope="col">Edad</th>
					<th scope="col">Telefono</th>
					<th scope="col">[ X ]</th>
				</tr>
			</thead>
			<tbody>
				{data.map((elem) => {
					<tr>
						<th scope="row">
							<td>{elem.nombre}</td>
						</th>
						<th scope="row">
							<td>{elem.apellido}</td>
						</th>
						<th scope="row">
							<td>{elem.edad}</td>
						</th>
						<th scope="row">
							<td>{elem.telefono}</td>
						</th>
					</tr>;
				})}
			</tbody>
		</table>
	);
}

export default Table;
