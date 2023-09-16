"use client";
import React, {useRef, useState, useEffect} from "react";
import emailjs from "@emailjs/browser";
import piano1 from "public/piano1.jpg";
import Image from 'next/image';

export default function Contact() {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const contentRef = useRef(null);
    const [showMessage, setShowMessage] = useState(false); 

    useEffect(() => {
        const contentEl = contentRef.current;
        if(contentEl){
            contentEl.classList.remove("opacity-0");
        }
    },[]);

    const sendEmail = (e) => {
        e.preventDefault();


    emailjs.sendForm('service_wy4624e', 'template_1aqwmd8', form.current, process.env.NEXT_PUBLIC_EMAILJS_USERID )
          .then((result) => {
            console.log("email sent", result.text);
            setSuccess(true);
            setShowMessage(true);  // Show the message

            setTimeout(() => {
                setShowMessage(false);  // Hide the message after 5 seconds
            }, 5000);


            form.current.reset();
          }, (error) => {
            console.log("error sending", error.text);
          });
    };

    return (
        <div ref={contentRef} className="flex items-center min-h-screen justify-center bg-white transition-opacity opacity-0 duration-[2s]">
            <div className="relative bg-white rounded-lg lg:w-[70%] w-full flex flex-col sm:flex-row border-4 border-gray-300 shadow-2xl p-2 mt-20">
                <div className="w-full xl:w-1/2 flex items-center justify-center ">
                    <Image src={piano1} alt="piano" priority={true} quality={75}className="max-w-full h-full object-cover object-top"/>
                </div>
                <form ref={form} onSubmit={sendEmail} className="w-full xl:w-1/2 xl:p-10 lg:p-0 md:p-0 sm:p-0 flex flex-col justify-center">
                    <h1 className="md:text-3xl text-2xl pb-6 py-8 md:py-8">Let's Connect!</h1>
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
                    {success && showMessage &&(
                    <div className="bg-maroon text-white px-4 py-2 rounded-md absolute left-0 right-0 top-full mt-2 text-center">
                        Your message has been sent!
                    </div>
                )}
                </form>
            </div>
        </div>
    )
}    