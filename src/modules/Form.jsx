import { useState } from "react";
import toast from "solid-toast";
import axios from "axios";

function Form() {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [edad, setEdad] = useState("");
	const [tel, setTel] = useState("");

	const handleChangeName = (a) => {
		a.preventDefault();
		setFname(a.target.value);
	};
	const handleChangeLname = (e) => {
		e.preventDefault();
		setLname(e.target.value);
	};
	const handleChangeEdad = (i) => {
		i.preventDefault();
		setEdad(i.target.value);
	};
	const handleChangeTel = (o) => {
		o.preventDefault();
		setTel(o.target.value);
	};

	const handleClickSubmit = (u) => {
		u.preventDefault();
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
						autocomplete="given-name"
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
						autocomplete="apellido"
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
					autocomplete="username"
					value={edad}
					onChange={handleChangeEdad}
				/>
				<input
					type="Tel"
					name="Telefono"
					placeholder="Telefono"
					aria-label="Telefono"
					autocomplete="current-telefono"
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
