import { useState } from "react";

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
		setFname(e.target.value);
	};
	const handleChangeEdad = (e) => {
		e.preventDefault();
		setFname(e.target.value);
	};
	const handleChangeTel = (e) => {
		e.preventDefault();
		setFname(e.target.value);
	};

	const handleClickSubmit = (e) => {
		e.preventDefault();
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
			<fieldset class="grid">
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
					value="enviar"
					onClick={handleClickSubmit}
				/>
			</fieldset>
		</form>
	);
}

export default Form;
