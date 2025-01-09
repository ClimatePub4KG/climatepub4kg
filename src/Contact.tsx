import React from "react";
import "./App.css";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <body className="contact-body">
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>
                If you have any questions, feel free to reach out to us at the following email addresses:
            </p>
            <ul>
                <li>
                <strong>Team Email:</strong>{" "}
                <a href="mailto:climatepub4kg@gmail.com">climatepub4kg@gmail.com</a>
                </li>
                <li>
                <strong>Jo Pan:</strong>{" "}
                <a href="mailto:huitong.pan@temple.edu">huitong.pan@temple.edu</a>
                </li>
            </ul>
        </div>
    </body>
  );
};

export default Contact;