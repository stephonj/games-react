import "./../css/Contact.css";
import "./../css/ContactInfo.css";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "8740a021-d716-4fde-aa42-1d8c89573070");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("Error sending message. Please try again.");
    }
  };

  return (
    <main id="contact" className="main-content">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h3>What We Do</h3>
          <p>
            At GamesOnGames, we make gaming more accessible by giving players a
            place to buy, sell, and trade their favorite games and consoles.
            Whether you’re looking for the newest releases, classic titles, or
            affordable pre-owned options, we’ve got you covered. We also offer
            accessories, collectibles, and deals that help gamers get the most
            out of their experience. Our mission is simple: to connect players
            with the games and gear they love.
          </p>

          <h3 className="contact-section-title">Contact Info</h3>
          <p>
            <strong>Phone Number:</strong> 803-123-4567
          </p>
          <p>
            <strong>Email:</strong> GamesOnGames@gmail.com
          </p>
          <p>
            <strong>Instagram:</strong> @GamesOnGames
          </p>
          <p>
            <strong>X:</strong> @GamesOnGames
          </p>
          <p>
            <strong>Youtube:</strong> GamesOnGamesYT
          </p>

          <h3>Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6615.936099132783!2d-81.03426492523275!3d33.99335442083909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb2802562b89%3A0x1f5707bd271c887!2sAssembly%20Blossom%20North!5e0!3m2!1sen!2sus!4v1760457010384!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: 0,
              width: "100%",
              height: "250px",
              borderRadius: "10px",
            }}
            title="GamesOnGames Location"
          ></iframe>
        </div>

        <div className="contact-form">
          <h3>Contact Form</h3>

          <form id="contact-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Name:</label>
              <br />
              <input type="text" name="name" required />
            </p>

            <p>
              <label htmlFor="email">Email:</label>
              <br />
              <input type="email" name="email" required />
            </p>

            <p>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea name="message" required></textarea>
            </p>

            <p>
              <button type="submit">Send Message</button>
            </p>

            <div id="contact-result">{result}</div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
