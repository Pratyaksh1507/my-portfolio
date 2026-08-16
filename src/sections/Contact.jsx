import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiCheck,
  FiCopy,
  FiMapPin,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || "";
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || "";
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || "";

const services = [
  "Frontend Web App",
  "Full-Stack Development",
  "UI/UX Implementation",
  "Freelance Project",
  "Other / Consultation",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Frontend Web App",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kalsi.pratyaksh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const selectService = (srv) => {
    setFormData((prev) => ({ ...prev, service: srv }));
    if (errors.service) setErrors((prev) => ({ ...prev, service: "" }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.idea.trim()) newErrors.idea = "Please describe your project or message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            service: formData.service,
            budget: formData.budget || "Not specified",
            idea: formData.idea,
            from_name: formData.name,
            reply_to: formData.email,
          },
          { publicKey: PUBLIC_KEY }
        );
      } else {
        // Fallback simulation if env vars are not yet set
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "Frontend Web App",
        budget: "",
        idea: "",
      });
      setErrors({});
    } catch (err) {
      console.error("EmailJS Error:", err);
      const errorMessage =
        err?.text || err?.message || (typeof err === "string" ? err : "Network error");
      setStatus(`error: ${errorMessage}`);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-[#080b11] text-white overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-28 w-[500px] h-[500px] rounded-full bg-[#00f5a0]/8 blur-[160px]" />
        <div className="absolute bottom-1/4 -left-28 w-[500px] h-[500px] rounded-full bg-[#00d9f5]/8 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#00f5a0] tracking-widest uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let’s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">
              Exceptional.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Have a project in mind, an open role, or just want to connect? Send a message and let's talk.
          </p>
        </motion.div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Contact & Inquiries
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Feel free to email me directly or copy my address to your clipboard for quick outreach.
              </p>

              {/* Direct Email with 1-click Copy */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#00f5a0]/10 text-[#00f5a0] flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-slate-400 font-medium">Email Address</p>
                    <p className="text-xs sm:text-sm font-bold text-white truncate">
                      kalsi.pratyaksh@gmail.com
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white transition-all flex items-center gap-1.5 flex-shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Badges List */}
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#00f5a0]">
                    <FiClock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Fast Response</span>
                    <p className="text-[11px] text-slate-400">Usually replies within 12 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#00d9f5]">
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Location & Timezone</span>
                    <p className="text-[11px] text-slate-400">India (IST / UTC+5:30) · Remote Friendly</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Social Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Pratyaksh1507"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-white transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/pratyakshkalsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-[#00d9f5] transition-all"
                  >
                    <FaLinkedin className="w-4 h-4 text-[#00d9f5]" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/pratyaksh_kalsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-[#00f5a0] transition-all"
                  >
                    <FaXTwitter className="w-4 h-4" />
                    Twitter / X
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-[#00f5a0]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-2xl bg-white/[0.04] border ${
                        errors.name ? "border-red-500" : "border-white/[0.08]"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00f5a0] focus:ring-1 focus:ring-[#00f5a0]/40 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[11px] flex items-center gap-1">
                        <FiAlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Email <span className="text-[#00f5a0]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-2xl bg-white/[0.04] border ${
                        errors.email ? "border-red-500" : "border-white/[0.08]"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00f5a0] focus:ring-1 focus:ring-[#00f5a0]/40 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[11px] flex items-center gap-1">
                        <FiAlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selector Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    What can I help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => selectService(srv)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                          formData.service === srv
                            ? "bg-[#00f5a0] text-black font-semibold shadow-[0_0_12px_rgba(0,245,160,0.3)]"
                            : "bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:bg-white/[0.08]"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Estimated Budget <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="budget"
                    placeholder="e.g. $1,000 - $3,000 / Flexible"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00f5a0] focus:ring-1 focus:ring-[#00f5a0]/40 transition-all"
                  />
                </div>

                {/* Message / Idea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Details / Message <span className="text-[#00f5a0]">*</span>
                  </label>
                  <textarea
                    name="idea"
                    rows={4}
                    placeholder="Tell me about your project goals, timelines, or role requirements..."
                    value={formData.idea}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-white/[0.04] border ${
                      errors.idea ? "border-red-500" : "border-white/[0.08]"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00f5a0] focus:ring-1 focus:ring-[#00f5a0]/40 transition-all resize-none`}
                  />
                  {errors.idea && (
                    <p className="text-red-400 text-[11px] flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {errors.idea}
                    </p>
                  )}
                </div>

                {/* Status Feedback */}
                {status === "success" && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <FiCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
                  </div>
                )}

                {status?.startsWith("error") && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Failed to send: {status.replace("error: ", "")}. You can also email directly at kalsi.pratyaksh@gmail.com</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(0,245,160,0.3)] flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

