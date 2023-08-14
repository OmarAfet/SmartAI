import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Goals from "../Components/Pages/Home/DoctorGPT/Goals";
import Story from "../Components/Pages/Home/DoctorGPT/Story";
import TeamMembers from "../Components/Pages/Home/DoctorGPT/Team";

const Home = () => {
  return (
    <>
      <div className="container px-16 mx-auto">
        <div className="flex flex-col">
          <div className="flex lg:flex-row flex-col justify-center items-center py-32 gap-32">
            <div className="flex justify-end items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="228.18859212313262 202.06382978723406 93.62281575373473 65.87234042553189"
                className="lg:w-96 lg:h-96 w-52 h-52"
              >
                <path
                  d="M266.49733,202.06383h-7.66175l-30.64699,65.87234h17.28565l17.19221,-39.99058l17.19221,39.99058h17.28565z"
                  fill="currentColor"
                ></path>
                <path
                  d="M321.81141,202.06383h-16.6316v65.87234h16.6316z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div>
              <div className="lg:text-8xl text-6xl font-bold">SmartAI</div>
            </div>
          </div>
          <div className="text-center lg:text-6xl text-3xl">
            SmartAI مكان حيث يزدهر فيه الابداع
          </div>
          <Link to="/SmartAI/DoctorGPT" className="btn text-4xl mt-32">
            جرب DoctorGPT
          </Link>
        </div>
        <hr className="mt-32" />
        <Story />
        <div className="flex flex-col justify-center">
          <Goals />
          <div className="flex flex-col text-center py-32 gap-16">
            <div className="lg:text-8xl text-6xl font-bold">طموحنا</div>
            <div className="lg:text-3xl text-xl">
              يكون تطبيقنا مربوط مع تطبيق صحتي لخدمة جميع المرضى بجميع الفئات
              العمرية.
            </div>
          </div>
          <TeamMembers />
        </div>
      </div>
    </>
  );
};

export default Home;
