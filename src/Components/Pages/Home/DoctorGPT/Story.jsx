import { motion } from "framer-motion";
import StoryData from "../../../../data/DoctorGPT/StoryData";
import { useState } from "react";

const Story = () => {
  const [animationStates, setAnimationStates] = useState(
    Array(StoryData.length).fill(false),
  );

  const handleAnimationComplete = (index) => {
    const newAnimationStates = [...animationStates];
    newAnimationStates[index] = true;
    setAnimationStates(newAnimationStates);
  };

  return (
    <>
      <div className="flex flex-col gap-32 my-32">
        {StoryData.map((story, index) => (
          <motion.div
            key={index}
            initial={{ x: 100 }}
            onAnimationComplete={() => {
              handleAnimationComplete(index);
            }}
            viewport={{ once: true }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              !animationStates[index] ? "duration-0" : ""
            } flex flex-col justify-center text-center items-center xl:grid xl:grid-cols-3`}
          >
            <div className="flex justify-start items-center">{story.svg}</div>
            <div className="col-span-2">
              <div className="lg:text-8xl text-6xl font-bold pb-16">
                {story.header}
              </div>
              <div className="text-xl">{story.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Story;
