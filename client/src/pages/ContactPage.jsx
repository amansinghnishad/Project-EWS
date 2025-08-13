import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }
    // In a real app, you'd POST this to your backend or Formspree
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thanks! We'll get back to you shortly.",
      });
      setForm(initialForm);
    }, 500);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Have questions, ideas, or want to collaborate? Drop us a message.
        </motion.p>
      </div>

      <motion.form
        className="contact-form"
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="sr-only">
          Contact form
        </h2>
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your full name"
            required
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="field">
          <span>Message</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={onChange}
            placeholder="How can we help?"
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Send message
        </button>
        {status && (
          <div className={`status ${status.type}`}>{status.message}</div>
        )}
      </motion.form>

      <div className="contact-aside">
        <div className="info-card">
          <h3>Reach us</h3>
          <p>Email: contact@ews.org</p>
          <p>Twitter: @ews_org</p>
        </div>
        <div className="info-card">
          <h3>Visit</h3>
          <p>
            123 EWS Street
            <br />
            Your City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
