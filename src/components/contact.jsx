import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
  //State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //send tothe database
    console.log(formData);

    //Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="px-16 m-auto mb-36 mt-12 text-white">
      <h1 className="text-4xl font-bold my-10">
        Lets work <span className="text-orange-500">Together</span>
      </h1>

      <div className="flex justify-between gap-12 ">
        <div className="md:w-1/2">
          <h1
            className="py-3"
            style={{
              background: "linear-gradient(to right, #FF7307 0%, #05FFC9 30%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Elevate your Digital Presence
          </h1>
          <p className="py-3 leading-relaxed">
            Unlock the potential of your project with tailored expertise. Share
            your vision by completing the form below, and let's embark on a
            journey of collaborative innovation. Together, we'll craft a unique
            digital solution that resonates with your audience and achieves your
            goals. Your success is our priority—let's make it happen
          </p>
          <div className="py-10">
            <div className="flex gap-4 pb-5">
              <div style={{ color: "#05FFC9" }}>
                <FaPhoneAlt />
              </div>
              <p>+254-113120575</p>
            </div>
            <div className="flex gap-4">
              <IoMdMail style={{ color: "#05FFC9" }} />
              <p>cassandralelei013@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <a
              href="https://twitter.com/LelCassandra"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button hover:text-orange-500"
              style={{ backgroundColor: "transparent", color: "#05FFC9" }}
            >
              {" "}
              <FaXTwitter size={24} />
            </a>

            <a
              href="https://github.com/cassandra18"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3"
              style={{ backgroundColor: "transparent", color: "#05FFC9" }}
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/cassandra-lelei-88987a269"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4"
              style={{ backgroundColor: "transparent", color: "#05FFC9" }}
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Form field */}
        <div >
          <form onSubmit={handleSubmit}  className="flex flex-col">
            {/* Name field */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium pb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required 
                className="w-full"
                style={{
                    borderRadius: "2px",
                    border: "double 1px transparent",
                    backgroundImage: "linear-gradient(#051120, #051120), linear-gradient(to right,  #EF6D09, #05FFC9)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    
                   
                  }}
                ></input>
            </div>

            {/* Email field */}
            <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} required
                style={{
                    borderRadius: "2px",
                    border: "double 1px transparent",
                    backgroundImage: "linear-gradient(#051120, #051120), linear-gradient(to right,  #EF6D09, #05FFC9)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    
                   
                  }}
                ></input>
            </div>

            {/* Message field */}
            <div className="mb-4">
                <label htmlFor="message" className="block">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4"
                style={{
                    borderRadius: "2px",
                    border: "double 1px transparent",
                    backgroundImage: "linear-gradient(#051120, #051120), linear-gradient(to right,  #EF6D09, #05FFC9)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    
                   
                  }}
                ></textarea>
            </div>

            {/* Submit button */}
            <div className="mb-4 ">
                <button type="submit" className=" text-white "
                style={{
                    borderRadius: "2px",
                    border: "double 1px transparent",
                    backgroundImage: "linear-gradient(#051120, #051120), linear-gradient(to right,  #EF6D09, #05FFC9)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    
                   
                  }}
                  >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
