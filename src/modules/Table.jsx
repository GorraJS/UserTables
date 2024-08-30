import axios from "axios";

function Table({prop}) {

	const Delete = (index) => {
		axios.delete(`http://localhost:3000/usuario/${index}`)
	}

	return (
		<table>
			<thead>
				<tr>
					<th scope="col">Nombre</th>
					<th scope="col">Apellido</th>
					<th scope="col">Edad</th>
					<th scope="col">Telefono</th>
					<th scope="col">ELIMINAR</th>
				</tr>
			</thead>
			<tbody>
				{prop.map((elem,index) => (
					<tr key={elem.id}>
						<td>{elem.nombre}</td>
						<td>{elem.apellido}</td>
						<td>{elem.edad}</td>
						<td>{elem.telefono}</td>
						<td><input type="submit" value="-" onClick={Delete(index)}/></td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
