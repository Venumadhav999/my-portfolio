import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import '../Styles/Contant.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8zKp2pW3Zj3lR2ADkP2g3UQhzmagdeME",
  authDomain: "venu-portfolio-203a7.firebaseapp.com",
  databaseURL: "https://venu-portfolio-203a7-default-rtdb.firebaseio.com",
  projectId: "venu-portfolio-203a7",
  storageBucket: "venu-portfolio-203a7.appspot.com",
  messagingSenderId: "69235543678",
  appId: "1:69235543678:web:411296a3cf003eb5e4922f"
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    setDatabase(db);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!database) {
      console.error("Database not initialized");
      return;
    }

    try {
      // Push data to Firebase Realtime Database
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, formData);

      alert("Submitted successfully");

      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("There was an error posting the data:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="row">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;