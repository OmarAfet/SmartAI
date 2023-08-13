import { motion } from "framer-motion";
import GoalsData from "../../../../data/DoctorGPT/GoalsData";
import { useState } from "react";

const container = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
};

const Goals = () => {
	const [animationDone, setAnimationDone] = useState(false);

	return (
		<>
			<div className="flex flex-col gap-8">
				<div className="lg:text-8xl text-6xl font-bold text-center">اهدافنا</div>
				<motion.div
					variants={container}
					onAnimationComplete={() => {
						setAnimationDone(true);
					}}
					viewport={{ once: true }}
					initial="hidden"
					whileInView="visible"
					className="flex flex-wrap justify-center gap-4"
				>
					{GoalsData.map((goal, index) => (
						<motion.div key={index} transition={{ duration: 0.1 }} variants={item} className={`${!animationDone ? "duration-0" : ""} bg-gray-200 flex gap-4 p-4 rounded-lg hover:shadow-lg cursor-default`}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
							</svg>
							<div className="flex-1">{goal.goal}</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default Goals;
