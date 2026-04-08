import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaLinkedin, FaGithubSquare, FaPhone } from "react-icons/fa";
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
      
      // Check if backend indicates success
      if (res.data?.success) {
        toast.success(res.data.message || "Message sent successfully!");
        reset(); // optionally reset form here instead of useEffect
      } else {
        toast.error(res.data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <section id="contact" className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an exciting project or opportunity? I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Reach out through the form or connect with me directly on these platforms. I'm always open to new opportunities and collaborations.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <motion.div
                whileHover={{ x: 8, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                  <a
                    href="mailto:mdakram12022002@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors break-all text-sm sm:text-base font-semibold"
                  >
                    mdakram12022002@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.div
                whileHover={{ x: 8, backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-600/50 group-hover:scale-110 transition-transform">
                  <FaLinkedin className="text-white text-2xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/mdakram2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors text-base font-semibold"
                  >
                    Connect With Me
                  </a>
                </div>
              </motion.div>

              {/* GitHub Card */}
              <motion.div
                whileHover={{ x: 8, backgroundColor: "rgba(75, 85, 99, 0.1)" }}
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-400 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center shadow-lg shadow-gray-600/50 group-hover:scale-110 transition-transform">
                  <FaGithubSquare className="text-white text-2xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">GitHub</p>
                  <a
                    href="https://github.com/mdakram2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors text-base font-semibold"
                  >
                    View My Projects
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
              <form onSubmit={handleSubmit(submitContactForm)} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["firstName", "lastName"].map((field, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                      <label htmlFor={field} className="text-sm font-semibold text-gray-300 block mb-2">
                        {field === "firstName" ? "First Name" : "Last Name"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={field}
                        placeholder={field === "firstName" ? "Akram" : "Shaikh"}
                        className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                        {...register(field, {
                          required: `${field.replace(/^\w/, (c) => c.toUpperCase())} is required`,
                        })}
                      />
                      {errors[field] && (
                        <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                          <span className="text-red-500">•</span>
                          {errors[field]?.message}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Email */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300 block mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <span className="text-red-500">•</span>
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <label htmlFor="contactNumber" className="text-sm font-semibold text-gray-300 block mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select
                      className="w-full sm:w-[110px] flex-shrink-0 px-3 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                      {...register("contactNumber", {
                        required: "Phone number is required",
                        minLength: { value: 8, message: "Too short" },
                        maxLength: { value: 10, message: "Too long" },
                      })}
                    />
                  </div>
                  {errors.contactNumber && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <span className="text-red-500">•</span>
                      {errors.contactNumber.message}
                    </p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <label htmlFor="message" className="text-sm font-semibold text-gray-300 block mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <span className="text-red-500">•</span>
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 mt-2 font-semibold text-base bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;