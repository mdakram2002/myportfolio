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
      const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data, {
        "Content-Type": "application/json",
      });
      console.log(res);
      toast.success("Connection sent successfully!");
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">CONTACT</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-semibold">Let’s Connect</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Have a project in mind or want to collaborate? Reach out through the form
              or connect with me directly on these platforms.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 text-lg" />
                <a
                  href="mailto:mdakram12022002@gmail.com"
                  className="hover:underline text-gray-300"
                >
                  mdakram12022002@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-blue-400 text-lg" />
                <a
                  href="https://www.linkedin.com/in/mdakram2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithubSquare className="text-white text-lg" />
                <a
                  href="https://github.com/mdakram2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit(submitContactForm)} className="space-y-5">
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                {["firstName", "lastName"].map((field, idx) => (
                  <div key={idx} className="w-full">
                    <label htmlFor={field} className="text-sm font-medium capitalize">
                      {field === "firstName" ? "First Name" : "Last Name"}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={field}
                      placeholder={field === "firstName" ? "Akram" : "Shaikh"}
                      className="mt-1 w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                      {...register(field, {
                        required: `${field.replace(/^\w/, (c) =>
                          c.toUpperCase()
                        )} is required`,
                      })}
                    />
                    {errors[field] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[field]?.message}
                      </p>
                    )}
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
                  className="mt-1 w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contactNumber" className="text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                {/* Wrapper adjusts layout based on screen size */}
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  <select
                    className="w-full sm:w-[100px] p-3 bg-gray-800 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    {...register("CountryCode", { required: true })}
                  >
                    {CountryCode.map((c, i) => (
                      <option key={i} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>

                  <input
                    id="contactNumber"
                    type="tel"
                    placeholder="1234567890"
                    className="w-full flex-1 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    {...register("contactNumber", {
                      required: "Phone number is required",
                      minLength: { value: 8, message: "Too short" },
                      maxLength: { value: 10, message: "Too long" },
                    })}
                  />
                </div>

                {errors.contactNumber && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.contactNumber.message}
                  </p>
                )}
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
                  className="mt-1 w-full p-3 bg-gray-800 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-medium bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-md hover:opacity-90 transition"
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
