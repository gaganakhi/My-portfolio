
const Contact = () => {
  return (
    <div
      name="contact"
      className="xl:h-fit h-fit sm:h-fit px-10 pb-10 sm:px-2 w-full bg-white"
    >
      <div className="flex flex-col p-4 sm:justify-center max-w-screen-lg mx-auto text-primary font-semibold">
        
        {/* Title */}
        <div className="max-md:pt-[60px] md:pt-24">
          <p className="text-4xl font-bold inline border-b-4 border-accent text-primary">
            Contact
          </p>
          <p className="py-4 text-secondary font-normal">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bvrzegzb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 border"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-white border rounded-md focus:outline-none text-primary"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-3 bg-white border rounded-md focus:outline-none text-primary"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="p-3 mb-8 bg-white border rounded-md focus:outline-none text-primary"
            ></textarea>

            <button className="text-white bg-accent px-6 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
