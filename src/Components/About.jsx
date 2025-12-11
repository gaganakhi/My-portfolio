
const About = () => {
  return (
    <div
      name="about"
      className="sm:h-fit h-fit flex pt-16 sm:pt-24 flex-wrap sm:flex-nowrap sm:items-center flex-col w-full bg-white"
    >
      <div className="max-w-screen-lg h-fit pb-15 sm:pb-10 mx-auto px-4 flex flex-wrap sm:flex-nowrap flex-col sm:justify-center w-full sm:h-fit text-primary max-md:pt-[50px]">

        {/* Heading */}
        <div className="pb-5 sm:justify-items-center">
          <p className="text-4xl font-bold inline border-b-4 border-accent text-primary">
            About
          </p>
        </div>

        {/* White Box */}
        <div className="bg-white shadow-md border w-full sm:h-fit max-h-500px rounded-lg overflow-y-auto sm:px-2">
          
          {/* Browser-style dots */}
          <div className="flex p-2 gap-2">
            <div className="circle">
              <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-secondary px-4">
            <p className="text-sm mt-3 sm:mt-4 sm:text-xl">
              Hello Everyone! This is <span className="font-semibold text-primary">Gagan</span>. 
              I am an aspiring Software Test Engineer.
            </p>
            <br />
            <p className="text-sm sm:text-xl">
              A diligent Software Test Engineer with experience in manual & automation testing.
              Skilled in Java, Selenium, Web applications, and passionate about improving product quality.
            </p>
            <br />
            <p className="text-sm sm:text-xl">
              Eager to expand my expertise and embrace challenges in this digital tech world.
            </p>
            <br />
            <p className="text-sm sm:text-xl mb-8">
              I aim to contribute to innovative projects with quality, precision & commitment to excellence.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
