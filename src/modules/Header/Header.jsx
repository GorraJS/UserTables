import inputText from "./InputText";

function Header() {
	return (
		<nav>
			<ul>
				<li>
					<h1>Tabla Usuarios</h1>
				</li>
			</ul>
			<ul>
				<li>
					<input
						type="search"
						name="buscar"
						placeholder="Buscar"
						aria-label="Search"
					/>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
