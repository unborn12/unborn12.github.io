import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Hinge } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const HandleInput = (e) => {
    setAnimation(true);
    setName(e.target.value);
    setTimeout(function () {
      setAnimation(false);
    }, 400);
  };

  const HandleEmail = (e) => {
    setAnimation2(true);
    setEmail(e.target.value);
    setTimeout(function () {
      setAnimation2(false);
    }, 400);
  };

  const HandleTextArea = (e) => {
    setAnimation3(true);
    setTextArea(e.target.value);
    setTimeout(function () {
      setAnimation3(false);
    }, 400);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target.name.value !== "" &&
      e.target.email.value !== "" &&
      e.target.project.value !== ""
    ) {
      emailjs.sendForm(
        "service_2glpfun",
        "template_4xoqvvp",
        form.current,
        "Samb7xbDnjS7coTnz"
      );
      e.target.reset();
    }
  };

  return (
    <section id="contact" className="grid justify-items-center">
      <h2 className="text-zinc-800 text-3xl font-bold">Get in touch</h2>
      <span className="text-sm mt-2">Contact Me</span>
      <div className="grid grid-cols-2 justify-items-center gap-x-20 pb-16 mt-11 max-md:px-0 max-md:grid-cols-1 px-12">
        <div className="grid grid-cols-1 gap-y-4 max-md:px-5">
          <h3 className="text-zinc-700 font-semibold text-lg text-center">
            Talk to me
          </h3>
          <div className="grid grid-cols-1 gap-y-5">
            <div className="grid grid-cols-1 bg-white w-fit justify-items-center px-7 py-6 rounded-xl shadow-md ">
              <Hinge duration={5000} delay={3000}>
                <i className="bx bx-mail-send text-zinc-700 text-3xl"></i>
              </Hinge>
              <h3 className="text-zinc-700 font-semibold">Email</h3>
              <span className="text-center break-all">
                rajeshkumarchauhan110@gmail.com
              </span>
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex hover:text-zinc-600 transition-all duration-200"
              >
                Write me
                <i className="bx bx-right-arrow-alt group-hover:translate-x-1 transition-all duration-200 ease-linear self-center"></i>
              </a>
            </div>
            <div className="grid grid-cols-1 bg-white w-full justify-items-center px-7 py-6 rounded-xl shadow-md">
              <Hinge duration={5000} delay={5000}>
                <i className="bx bxl-messenger text-zinc-700 text-3xl"></i>
              </Hinge>
              <h3 className="text-zinc-700 font-semibold">Messenger</h3>
              <span className="text-center break-all">
                @sk.gupta507
              </span>
              <a
                href="https://www.facebook.com/sk.gupta507/"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex hover:text-zinc-600 transition-all duration-200"
              >
                Write me
                <i className="bx bx-right-arrow-alt group-hover:translate-x-1 transition-all duration-200 ease-linear self-center"></i>
              </a>
            </div>
            <div className="grid grid-cols-1 bg-white w-full justify-items-center px-7 py-6 rounded-xl shadow-md">
              <Hinge duration={6000} delay={4000}>
                <i className="bx bxl-instagram text-zinc-700 text-3xl"></i>
              </Hinge>
              <h3 className="text-zinc-700 font-semibold">Instagram</h3>
              <span className="text-center break-all">@sk.gupta507</span>
              <a
                href="https://www.instagram.com/sk.gupta507/"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex hover:text-zinc-600 transition-all duration-200"
              >
                Write me
                <i className="bx bx-right-arrow-alt group-hover:translate-x-1 transition-all duration-200 ease-linear self-center"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 px-0 gap-y-9 max-md:mt-16 max-md:px-5 max-md:mb-6">
          <h3 className="text-zinc-700 font-semibold text-lg text-center">
            Write me your project
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 gap-y-8"
          >
            <div className="grid border-2 px-5 py-2 rounded-lg relative border-zinc-300 focus-within:border-zinc-500 duration-300 transition-all ease-in-out">
              <label
                htmlFor="name"
                className="absolute -top-3 left-4 bg-[#fafafa] z-10 px-1  "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Insert your name"
                onChange={HandleInput}
                className="bg-[#fafafa] py-2 outline-none text-zinc-800 placeholder:text-[14px] tracking-wide w-full"
              />
              {animation && (
                <p className="inputLetterDrop absolute overflow-hidden bg-transparent text-zinc-400 tracking-wider inset-0 top-5 px-4">
                  {name}
                </p>
              )}
            </div>
            <div className="grid border-2 px-5 py-2 rounded-lg relative border-zinc-300 focus-within:border-zinc-500 duration-300 transition-all ease-in-out">
              <label
                htmlFor="email"
                className="absolute -top-3 left-4 bg-[#fafafa] z-10 px-1"
              >
                Mail
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={HandleEmail}
                placeholder="Insert your email"
                className="bg-[#fafafa] py-2 text-zinc-800 outline-none w-full placeholder:text-[14px] tracking-wide"
              />
              {animation2 && (
                <p className="inputLetterDrop absolute overflow-hidden bg-transparent text-zinc-400 tracking-wider inset-0 top-5 px-4">
                  {email}
                </p>
              )}
            </div>
            <div className="grid border-2 px-5 py-2 rounded-lg relative border-zinc-300 focus-within:border-zinc-500 duration-300 transition-all ease-in-out">
              <label
                htmlFor="project"
                className="absolute -top-3 left-4 bg-[#fafafa] z-10 px-1"
              >
                Project
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                value={textArea}
                onChange={HandleTextArea}
                placeholder="Write your project"
                className="bg-[#fafafa] text-zinc-800 outline-none placeholder:text-[15px] tracking-wide pt-3 w-full"
              ></textarea>
              {animation3 && (
                <p className="inputLetterDrop absolute overflow-hidden bg-transparent text-zinc-400 tracking-wider inset-0 top-5 px-4">
                  {textArea}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 text-[15px] bg-neutral-700 w-fit text-[#fff] p-4 px-5  hover:bg-neutral-900 transition-all duration-100 ease-in-out rounded-2xl mt-4 max-sm:mt-5"
            >
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#fff"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
