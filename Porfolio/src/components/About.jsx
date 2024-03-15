import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg p-8 mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 border-b-4 border-gray-500 inline-block">
          About Me
        </h1>

        <p className="text-lg mt-8">
          Hi there! I'm <span className="text-blue-400 font-semibold">Gulsher Ali</span>, a passionate front-end developer based in Lahore. I specialize in crafting engaging and user-friendly web experiences using modern web technologies.
        </p>

        <div className="my-8 border-b border-gray-500"></div>

        <p className="text-lg">
          My journey into web development began in <span className="text-blue-400 font-semibold">2021</span> when I was inspired by a friend who is an amazing developer. Seeing his work and passion for coding ignited my interest, and I decided to dive into the world of web development.
        </p>

        <div className="my-8 border-b border-gray-500"></div>

        <p className="text-lg">
          When I'm not coding, you can find me exploring the outdoors, practicing photography, or diving into a good book. I believe in the power of creativity and innovation to drive positive change, and I'm always eager to collaborate on projects that push boundaries and make a difference.
        </p>

        <div className="my-8 border-b border-gray-500"></div>

        <p className="text-lg">
        Feel free to reach out to me at my gmail <a href="mailto:syedgulshera2@gmail.com" 
        className="text-blue-300 underline hover:text-blue-400 px-2">syedgulshera2@gmail.com</a> 
        or via WhatsApp at <a href="https://wa.me/+923071001460" className="text-green-400 underline hover:text-green-500 px-1">My WhatsApp Number</a> to discuss potential collaborations, exciting projects, or just to connect and share ideas. I'm looking forward to hearing from you!        </p>
      </div>
    </div>
  );
};

export default About;
