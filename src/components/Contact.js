import React, { useState } from "react";
import "../styles/Contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Resend } from "resend";
function Contact() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  // const resend = new Resend(process.env.RESEND_API_KEY)
  async function sendMail(event) {
    event.preventDefault();
    console.log(name, number, email, message);
    // await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: "unartcs@gmail.com",
    //   subject: "Hello World",
    //   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    // });
  }
  return (
    <div className="contact-wrapper" id="contact-section">
      <div className="contact-title">Contact Me</div>
      <form
        className="contact-form"
        action="https://formsubmit.co/unartcs@gmail.com"
        method="POST"
      >
        <input
          type={"text"}
          placeholder="Name..."
          required
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type={"number"}
          placeholder="Phone Number... (Optional)"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <input
          type={"email"}
          placeholder="Email..."
          required
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <textarea
          placeholder="Message..."
          required
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="contact-button">Send</button>
      </form>
      <div className="socials-wrapper">
        <a href="https://www.linkedin.com/in/daniel-cohen-dc/">
          <BsLinkedin size={48} />
        </a>
        <a href="https://github.com/unartcs/">
          <BsGithub size={48} />
        </a>
        <a href="mailto:unartcs@gmail.com">
          <SiGmail size={48} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
