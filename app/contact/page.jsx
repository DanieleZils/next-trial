"use client";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import piano from "public/piano.jpg";
import Image from 'next/image';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        console.log("sendEmail called");
        e.preventDefault();
        console.log('Form:', form.current)


    emailjs.sendForm('service_wy4624e', 'template_1aqwmd8', form.current, process.env.NEXT_PUBLIC_EMAILJS_USERID )
          .then((result) => {
            console.log("email sent", result.text);
          }, (error) => {
            console.log("error sending", error.text);
          });
    };

    return (
        <div className="flex items-center md:h-screen justify-center bg-white">
            <div className="bg-white rounded-lg md:w-1/2 w-full flex flex-col sm:flex-row border-4 border-gray-300 shadow-xl p-2 mt-10 ">
                <div className="w-full md:w-1/2 flex items-center justify-center ">
                    <Image src={piano} alt="piano" priority={true} quality={85}className="max-w-full h-auto"/>
                </div>
                <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 md:p-20">
                    <h1 className="md:text-3xl text-2xl pb-6 py-5 md:py-0">Let's Connect!</h1>
                    <div className="mb-4">
                        <label htmlFor="Name" className="block font-medium">Name </label>
                        <input type="text" name="user_name" className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-maroon"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Email" className="block font-medium">Email </label>
                        <input type="email" name="user_email" className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-maroon"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Message" className="block font-medium"> Message </label>
                        <textarea name="message" className="border-2 border-gray-300 p-2 rounded-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-maroon" />
                    </div>
                    <input type="submit" value="Send" className="bg-maroon hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md cursor-pointer" />
                </form>
            </div>
        </div>
    )
}    