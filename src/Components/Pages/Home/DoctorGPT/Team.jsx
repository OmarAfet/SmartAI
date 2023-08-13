import { motion } from "framer-motion";
import TeamData from "../../../../data/DoctorGPT/TeamData";
import { useState } from "react";

const container = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

const TeamMembers = () => {
	const [animationDone, setAnimationDone] = useState(false);

	return (
		<>
			<div className="flex flex-col text-center pb-32 gap-16">
				<div className="lg:text-8xl text-6xl font-bold pt-32">اعضاء الفريق</div>
				<motion.div
					variants={container}
					onAnimationComplete={() => {
						setAnimationDone(true);
					}}
					viewport={{ once: true }}
					initial="hidden"
					whileInView="visible"
					className="grid grid-cols-1 gap-4"
				>
					{TeamData.map((member, index) => (
						<motion.a key={index} transition={{ duration: 0.6 }} variants={item} target="_blank" href={member.url ? member.url : null} className={`${!animationDone ? "duration-0" : ""} bg-gray-200 p-4 rounded-lg hover:shadow-lg cursor-pointer`}>
							<div className="flex">
								<div className="flex text-2xl font-bold flex-1 mb-4">{member.name}</div>
								<div>{member.badge}</div>
							</div>
							<div className="flex text-start">{member.description}</div>
						</motion.a>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default TeamMembers;
