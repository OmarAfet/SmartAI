import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import DoctorGPT from "./Pages/DoctorGPT";
import ErrorPage from "./Pages/ErrorPage";

// Routes configuration
const routes = [
	{ path: "/SmartAI/", element: <Home /> },
	{ path: "/SmartAI/Home", element: <Home /> },
	{ path: "/SmartAI/DoctorGPT", element: <DoctorGPT /> },
	{ path: "/SmartAI/*", element: <ErrorPage /> },
];

export default function App() {
	return (
		<Layout>
			<Routes>
				{routes.map((route, index) => (
					<Route key={index} path={route.path} element={route.element} />
				))}
			</Routes>
		</Layout>
	);
}

// Common layout component (can be moved to a separate file)
function Layout({ children }) {
	return (
		<>
			<NavBar />
			<div className="pt-32">{children}</div>
		</>
	);
}
