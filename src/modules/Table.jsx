import Form from "./Form";
import axios from 'axios'

function Table() {
	
    return (
		<table>
			<thead>
				<tr>
					<th scope="col">Nombre</th>
					<th scope="col">Apellido</th>
					<th scope="col">Edad</th>
					<th scope="col">Telefono</th>
					<th scope="col">---</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row"></th>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
