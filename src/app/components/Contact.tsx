import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div data-aos="zoom-in-down" className="grid md:grid-cols-1 gap-8">
        <div className="space-y-8 items-center"></div>
        <h2 className="text-5xl text-red-600 underline font-bold">Let's Connect!</h2>
        <p className="text-white font-sans text-[18px] pt-2">
          Let’s Connect! Reach out for any questions, collaborations, or just to
          say hello.
        </p>
        <div className="flex gap-3 items-center">
          <TbMailFilled size={20} />{" "}
          <p className="font-sans">mrcarzone123@gmail.com</p>
        </div>
        <div className="flex gap-3 items-center">
          <BsTelephone size={20} /> +92 312 34567890
        </div>
        <div className="flex gap-3 items-center">
          <FaLinkedin size={20} />{" "}
          <p className="font-sans">
              linkedin.com/in/mr-car-zone-516b882b7
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <RxGithubLogo size={20} />{" "}
          <p className="font-sans">
              github.com/mrcarzone123
          </p>
        </div>
        <div className="space-y-8">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-bold font-sans">Name:</label>
                <input type="text" 
                className="h-[40px] bg-transparent border border-red-600"
                id="name"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-bold font-sans">Email::</label>
                <input type="text" 
                className="h-[40px] bg-transparent border  border-red-600"
                id="email"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="msg" className="font-bold ">FeedBack:</label>
                <textarea  
                className="bg-transparent border  border-red-600"
                id="msg" rows={8}
                />
            </div>
            <button className="bg-red-600 p-2 px-6 hover:bg-red-400">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
