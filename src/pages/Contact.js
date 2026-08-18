import React, { useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { PiWhatsappLogo } from "react-icons/pi";
import {
  MdCall,
  MdEmail,
  MdSend,
} from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { sendTelegramMessage } from "../utils/telegram";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const telegramMessage = `
🔔 <b>New Query</b>

<b>Name:</b> ${data.name}

<b>Email:</b> ${data.email}

<b>Phone:</b> ${data.phone}

<b>Subject:</b> ${data.subject}

<b>Message:</b> ${data.message}

━━━━━━━━━━━━━━

<b>Time:</b> ${new Date().toLocaleString("en-IN")}
`;

    try {
      await sendTelegramMessage(telegramMessage);
      setMessage("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <div className="text-white">
      {/* ================= HERO ================= */}
      <section className="relative z-10 px-5 sm:py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          {/* Small heading */}
          <p
            className="
              mb-4 text-sm font-semibold tracking-[0.25em]
              text-cyan-400 uppercase
              sm:text-base
            "
          >
            Get In Touch
          </p>

          {/* Heading */}
          <h1
            className="
              mx-auto max-w-4xl
              text-4xl font-bold leading-tight
              sm:text-5xl
              lg:text-6xl
          "
          >
            Let's Build Something
            <span className="block text-cyan-400">Amazing Together</span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-base leading-7 text-gray-300
              sm:text-lg sm:leading-8
            "
          >
            Have a project in mind or just want to say hello? I'm always open to
            discussing new opportunities, collaborations and exciting ideas.
          </p>
        </div>
      </section>

      <section
        id="contact-form"
        className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12"
      >
        <div
          className="
            mx-auto grid max-w-6xl
            grid-cols-1 gap-6
            lg:grid-cols-[320px_1fr]
            lg:gap-5
          "
        >
          {/* ================= LEFT CARD ================= */}
          <div
            className="
              rounded-3xl border border-cyan-400/20
              bg-[#0a3440]/60 p-6
              backdrop-blur-sm
              sm:p-8
            "
          >
            <h2 className="text-2xl font-semibold text-cyan-400">
              Let's Connect
            </h2>

            <div className="mt-3 h-[2px] w-24 bg-cyan-400" />

            <p className="mt-6 text-sm leading-6 text-gray-300 sm:text-base">
              I'm currently open to freelance work, full-time roles, or exciting
              collaborations.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-5">
              {/* Phone */}
              <a
                href="tel:+919634182319"
                className="group flex items-center gap-4"
              >
                <div
                  className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-full border border-cyan-400/40
                    bg-cyan-400/5 text-cyan-400
                    transition group-hover:bg-cyan-400
                    group-hover:text-[#07303b]
                  "
                >
                  <MdCall size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-sm sm:text-base">+91-9634182319</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919634182319"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div
                  className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-full border border-cyan-400/40
                    bg-cyan-400/5 text-cyan-400
                    transition group-hover:bg-cyan-400
                    group-hover:text-[#07303b]
                  "
                >
                  <PiWhatsappLogo size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-sm sm:text-base">+91-9634182319</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sharmanish2109@gmail.com"
                className="group flex items-center gap-4"
              >
                <div
                  className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-full border border-cyan-400/40
                    bg-cyan-400/5 text-cyan-400
                    transition group-hover:bg-cyan-400
                    group-hover:text-[#07303b]
                  "
                >
                  <MdEmail size={21} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="break-all text-sm sm:text-base">
                    sharmanish2109@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-full border border-cyan-400/40
                    bg-cyan-400/5 text-cyan-400
                  "
                >
                  <IoLocationOutline size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-sm sm:text-base">India</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-cyan-400/15" />

            {/* Social */}
            <h3 className="text-sm font-semibold">Social Accounts</h3>

            <div className="mt-5 flex gap-4">
              <a
                href="https://github.com/MANISH-SHARMA1"
                aria-label="GitHub"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-cyan-400/30
                  text-cyan-400
                  transition duration-300
                  hover:bg-cyan-400 hover:text-[#06313c]
                "
              >
                <VscGithub size={20} />
              </a>

              <a
                href="www.linkedin.com/in/manish-sharma-4ba39520b"
                aria-label="LinkedIn"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-cyan-400/30
                  text-cyan-400
                  transition duration-300
                  hover:bg-cyan-400 hover:text-[#06313c]
                "
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div
            className="
              rounded-3xl border border-cyan-400/20
              bg-[#0a3440]/60 p-6
              backdrop-blur-sm
              sm:p-8 lg:p-9
            "
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-cyan-400">
                Send Me a Message
              </h2>

              {/* <Send size={22} className="hidden text-cyan-400 sm:block" /> */}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full rounded-xl
                    border border-cyan-400/20
                    bg-[#082f3b]/70
                    px-5 py-4
                    text-sm text-white
                    outline-none
                    placeholder:text-gray-400
                    transition
                    focus:border-cyan-400
                    focus:ring-1 focus:ring-cyan-400
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full rounded-xl
                    border border-cyan-400/20
                    bg-[#082f3b]/70
                    px-5 py-4
                    text-sm text-white
                    outline-none
                    placeholder:text-gray-400
                    transition
                    focus:border-cyan-400
                    focus:ring-1 focus:ring-cyan-400
                  "
                />
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="
                    w-full rounded-xl
                    border border-cyan-400/20
                    bg-[#082f3b]/70
                    px-5 py-4
                    text-sm text-white
                    outline-none
                    placeholder:text-gray-400
                    transition
                    focus:border-cyan-400
                    focus:ring-1 focus:ring-cyan-400
                  "
                />

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="
                  w-full rounded-xl
                  border border-cyan-400/20
                  bg-[#082f3b]/70
                  px-5 py-4
                  text-sm text-white
                  outline-none
                  placeholder:text-gray-400
                  transition
                  focus:border-cyan-400
                  focus:ring-1 focus:ring-cyan-400
                "
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                rows={7}
                placeholder="Your Message"
                required
                className="
                  w-full resize-none rounded-xl
                  border border-cyan-400/20
                  bg-[#082f3b]/70
                  px-5 py-4
                  text-sm text-white
                  outline-none
                  placeholder:text-gray-400
                  transition
                  focus:border-cyan-400
                  focus:ring-1 focus:ring-cyan-400
                "
              />

              {/* Status Message */}
              {message && <p className="text-sm text-cyan-300">{message}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
                  group flex items-center gap-3
                  rounded-full bg-cyan-400
                  px-7 py-3.5
                  font-semibold text-[#06313c]
                  transition duration-300
                  hover:scale-105
                  hover:bg-cyan-300
                "
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <MdSend
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
