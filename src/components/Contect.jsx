import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { apiConnector } from "../services/apiConnector";
import { contactusEndpoint } from "../services/api";
import { CountryCode } from "../data/CountryCode";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      toast.success("Message sent successfully");
    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="bg-richblack-900 text-white py-20 px-4 md:px-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-14 text-gradient bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-semibold">Let’s Talk</h3>
            <p className="text-sm text-richblack-300">
              Have a project in mind or just want to connect? Feel free to reach out to me through this form or any of the platforms below.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:mdakram12022002@gmail.com" className="hover:underline">
                mdakram12022002@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaLinkedin className="text-blue-400" />
              <a
                href="https://www.linkedin.com/in/mdakram2002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaGithubSquare className="text-white" />
              <a
                href="https://github.com/mdakram2002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 bg-richblack-800 p-8 rounded-xl shadow-2xl"
          >
            <form onSubmit={handleSubmit(submitContactForm)} className="space-y-5">
              {/* Name fields */}
              <div className="flex flex-col md:flex-row gap-4">
                {["firstName", "lastName"].map((field, idx) => (
                  <div key={idx} className="w-full">
                    <label htmlFor={field} className="text-sm font-medium capitalize">
                      {field === "firstName" ? "First Name" : "Last Name"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={field}
                      placeholder={field === "firstName" ? "John" : "Doe"}
                      className="mt-1 w-full p-3 bg-richblack-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      {...register(field, { required: `${field.replace(/^\w/, c => c.toUpperCase())} is required` })}
                    />
                    {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]?.message}</p>}
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full p-3 bg-richblack-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contactNumber" className="text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <select
                    className="w-[90px] p-3 bg-richblack-700 text-white rounded-md text-sm"
                    {...register("CountryCode", { required: true })}
                  >
                    {CountryCode.map((c, i) => (
                      <option key={i} value={c.code}>{c.code}</option>
                    ))}
                  </select>
                  <input
                    id="contactNumber"
                    type="tel"
                    placeholder="1234567890"
                    className="flex-1 p-3 bg-richblack-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    {...register("contactNumber", {
                      required: "Phone number is required",
                      minLength: { value: 8, message: "Too short" },
                      maxLength: { value: 10, message: "Too long" },
                    })}
                  />
                </div>
                {errors.contactNumber && <p className="text-red-400 text-xs mt-1">{errors.contactNumber.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your message..."
                  className="mt-1 w-full p-3 bg-richblack-700 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-medium bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
