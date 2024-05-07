import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
  //State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    errors: {},
  });

  //Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);

    setFormData({ ...formData, [name]: value,
      //validation errors
      errors: {
        ...(formData.errors || {}),
        [name]: name === 'email' && !isValidEmail ? 'Invalid email format' : null,
      }
    });
  };

  //Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


  // Check for validation errors before submitting
  if (formData.errors && Object.values(formData.errors).some(error => error)) {
    console.error('Validation errors:', formData.errors);
    return; // Prevent form submission if errors exist
  }
   
  // send to database
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error (`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Success: ', data);


      toast.success("Form submitted successfully!", {
        position: "top-right", // Adjust position as needed
        autoClose: 2000, // Close after 5 seconds
      });


   // Reset form fields after a short delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
        successMessage: null,
        errorMessage: null,
        errors: null, // Reset errors as well
      });
    }, 2000); 

    } catch (error) {
      console.error('Error:', error);

        // Display error message on UI
    setFormData({
      ...formData,
      successMessage: null,
      errorMessage: 'An error occurred. Please try again later.',
    });
    }
    
  };

  return (
    <div className="px-16 m-auto mb-36 mt-12 text-white">
      <h1 className="text-4xl font-bold my-12">
        Lets work <span className="text-orange-500">Together</span>
      </h1>

      <div className="flex justify-between gap-12 ">
        <div className="w-1/2">
          <h1
            className="py-3 text-2xl"
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
        <div className="w-1/2 " >
          <form onSubmit={handleSubmit}  className="flex flex-col">
            {/* Name field */}
            <div className="mb-4 w-3/4"  >
                <label htmlFor="name" className="block  font-medium pb-2">Name</label>
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
            <div className="mb-4 w-3/4">
                <label htmlFor="email" className="block">Email</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} required
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

            {/* Message field */}
            <div className="mb-4 w-3/4" >
                <label htmlFor="message" className="block">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4"
                className="w-full"
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
            <div className="mb-4 w-3/4 ">
                <button type="submit" className="rounded px-3 py-1 text-bold"
                style={{
                  background: "linear-gradient(to right, rgba(239, 109, 9, 0.8), rgba(5, 255, 201, 0.8))",
                  fontSize: "16px"
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
