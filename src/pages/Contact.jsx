import "./../css/Contact.css";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
    return (
        <main id="contact" className="main-content">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <ContactInfo />
                <div className="contact-form-section">
                    <h3>Contact Form</h3>
                    <div className="form-placeholder">
                        <p>Contact form will be added in future assignment</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;