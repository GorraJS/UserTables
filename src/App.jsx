import { useState } from "react";
import Form from "./modules/Form";
import Table from "./modules/Table";
import Header from "./modules/Header/Header";
import axios from "axios";

function App() {
	return (
		<>
			<Header />
			<Form />
			<Table />
		</>
	);
}

export default App;
