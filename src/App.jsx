import { useState } from "react";
import { useEffect } from "react";
import Form from "./modules/Form";
import Table from "./modules/Table";
import Header from "./modules/Header/Header";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);
	
	useEffect(() => {
		axios
			.get("http://localhost:3000/usuario")
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Header />
			<Form />
			<Table prop={data}/>
		</>
	);
}

export default App;
