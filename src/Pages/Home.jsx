import { Link } from "react-router-dom";
import Goals from "../Components/Pages/Home/DoctorGPT/Goals";
import Story from "../Components/Pages/Home/DoctorGPT/Story";
import TeamMembers from "../Components/Pages/Home/DoctorGPT/Team";
import Logo from "../Components/Logo";

const Home = () => {
  return (
    <div className="container px-16 mx-auto">
      <header className="flex flex-col">
        <div className="flex lg:flex-row flex-col justify-center items-center py-32 gap-32">
          <Logo className={"lg:w-96 lg:h-96 w-52 h-52"} />
          <h1 className="lg:text-8xl text-6xl font-bold">SmartAI</h1>
        </div>
        <h2 className="text-center lg:text-6xl text-3xl">
          SmartAI مكان حيث يزدهر فيه الابداع
        </h2>
        <Link to="/SmartAI/DoctorGPT" className="btn text-4xl mt-32">
          جرب DoctorGPT
        </Link>
      </header>
      <section>
        <Story />
        <Goals />
        <TeamMembers />
      </section>
    </div>
  );
};

export default Home;
