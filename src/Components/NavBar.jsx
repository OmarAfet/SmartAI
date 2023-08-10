import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<div className="fixed w-full bg-white z-10" dir="ltr">
				<div className="flex lg:justify-between justify-center py-4 px-12">
					<Link to="/SmartAI-2" className="flex items-center gap-8">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="228.18859212313262 202.06382978723406 93.62281575373473 65.87234042553189" className="w-16 h-16">
							<path d="M266.49733,202.06383h-7.66175l-30.64699,65.87234h17.28565l17.19221,-39.99058l17.19221,39.99058h17.28565z" className="fill-main"></path>
							<path d="M321.81141,202.06383h-16.6316v65.87234h16.6316z" className="fill-main"></path>
						</svg>
						<div className="hidden lg:block text-3xl">SmartAI</div>
					</Link>
					<div className="lg:flex hidden text-2xl items-center gap-8">
						<Link className="hover:underline" to="/SmartAI-2">
							Home
						</Link>
						<Link className="hover:underline" to="/SmartAI-2/DoctorGPT">
						DoctorGPT
						</Link>
					</div>
				</div>
				<hr />
			</div>
		</>
	);
};

export default NavBar;
