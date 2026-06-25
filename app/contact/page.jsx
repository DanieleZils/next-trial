"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Reveal } from "../components/reveal";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wy4624e", "template_1aqwmd8", form.current, process.env.NEXT_PUBLIC_EMAILJS_USERID)
      .then(
        (result) => {
          console.log("email sent", result.text);
          setSuccess(true);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 5000);
          form.current.reset();
        },
        (error) => {
          console.log("error sending", error.text);
        }
      );
  };

  return (
    <main className="relative w-full min-h-screen bg-background pt-20">
      <div className="lg:grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        {/* Image side - fixed on desktop */}
        <div className="relative h-64 overflow-hidden lg:h-auto lg:fixed lg:top-20 lg:left-0 lg:w-1/2 lg:bottom-0">
          <Image
            src="/piano1.jpg"
            alt="Piano"
            fill
            quality={90}
            priority
            className="object-cover object-center animate-[heroZoom_2000ms_ease-out_forwards]"
          />
        </div>

        {/* Form side */}
        <div className="flex items-center justify-center px-6 py-14 md:px-14 lg:px-20 lg:col-start-2">
          <Reveal className="w-full max-w-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-3">Let&apos;s Connect</h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              For lessons, performances, collaborations, or community engagement inquiries, send a note below.
            </p>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 relative">
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="text-xs uppercase tracking-[0.16em] text-foreground/80">
                  Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  className="bg-transparent border-b border-border py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="text-xs uppercase tracking-[0.16em] text-foreground/80">
                  Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  className="bg-transparent border-b border-border py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-[0.16em] text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-transparent border-b border-border py-2.5 h-28 resize-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                className="mt-2 self-start bg-primary text-primary-foreground text-xs uppercase tracking-[0.18em] px-9 py-3.5 hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message
              </button>

              {success && showMessage && (
                <div className="bg-foreground text-background px-4 py-3 text-sm text-center mt-2">
                  Your message has been sent. Thank you!
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
