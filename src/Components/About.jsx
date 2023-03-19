import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="mt-[1rem] sm:mt-[0rem] text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-25">
          Currently working as a System Engineer for Tata Consultancy Services having an experience of 20 months in Frontend Development.<br></br><br></br>
          Developed 75+ Responsive UI Screens in ReactJs and integerated a restricted client styling framework on top of abstract ReactJs components.<br></br><br></br>
          Provided Proof Of Concepts in ReactJS to 10+ clients all over the globe.<br></br><br></br>
          Major projects include a banking project where we developed a React Application with all the functionalities same as a Visual Basic Application.
        
        
        </p>

      </div>
    </div>
  );
};

export default About;
