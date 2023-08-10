import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import DoctorGPT from "./Pages/DoctorGPT";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
	return (
		<>
			<NavBar />
			<div className="pt-32">
				<Routes>
					<Route path="/SmartAI" element={<Home />} />
					<Route path="/SmartAI/Home" element={<Home />} />
					<Route path="/SmartAI/DoctorGPT" element={<DoctorGPT />} />
					<Route path="/SmartAI/*" element={<ErrorPage />} />
				</Routes>
			</div>
		</>
	);
}
