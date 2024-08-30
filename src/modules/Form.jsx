import { useState } from "react";
import toast from "solid-toast";
import axios from "axios";

function Form() {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [edad, setEdad] = useState("");
	const [tel, setTel] = useState("");

	const handleChangeName = (e) => {
		e.preventDefault();
		setFname(e.target.value);
	};
	const handleChangeLname = (e) => {
		e.preventDefault();
		setLname(e.target.value);
	};
	const handleChangeEdad = (e) => {
		e.preventDefault();
		setEdad(e.target.value);
	};
	const handleChangeTel = (e) => {
		e.preventDefault();
		setTel(e.target.value);
	};

	const handleClickSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:3000/usuario", {
				nombre: fname,
				apellido: lname,
				edad: edad,
				telefono: tel,
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<form>
			<fieldset>
				<label>
					Nombre
					<input
						name="name"
						placeholder="Nombre"
						autoComplete="given-name"
						value={fname}
						onChange={handleChangeName}
					/>
				</label>
				<label>
					Apellido
					<input
						type="apellido"
						name="apellido"
						placeholder="Apellido"
						autoComplete="apellido"
						value={lname}
						onChange={handleChangeLname}
					/>
				</label>
			</fieldset>
			<fieldset className="grid">
				<input
					name="edad"
					placeholder="Edad"
					aria-label="edad"
					autoComplete="username"
					value={edad}
					onChange={handleChangeEdad}
				/>
				<input
					type="Tel"
					name="Telefono"
					placeholder="Telefono"
					aria-label="Telefono"
					autoComplete="current-telefono"
					value={tel}
					onChange={handleChangeTel}
				/>
				<input
					type="submit"
					value="ENVIAR"
					onClick={handleClickSubmit}
				/>
			</fieldset>
		</form>
	);
}

export default Form;
