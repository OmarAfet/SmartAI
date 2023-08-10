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
					<Route path="/SmartAI-2" element={<Home />} />
					<Route path="/SmartAI-2/Home" element={<Home />} />
					<Route path="/SmartAI-2/DoctorGPT" element={<DoctorGPT />} />
					<Route path="/SmartAI-2/*" element={<ErrorPage />} />
				</Routes>
			</div>
		</>
	);
}
