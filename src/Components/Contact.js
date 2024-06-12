import React from "eact";
import "../App.css";

function Contact() {
  return (
    <div>
      <section className="tm-main">
        <p>Contact</p>
      </section>

      <section className="tm-booking">
        <form>
          <div className="tm-form1">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="E-mail" />
            <textarea placeholder="Your message..." rows="4" />
            <input type="submit" id="sub2" value="Send" />
          </div>
        </form>

        <div className="vertical-line"></div>

        <div className="tm-form2">
          <div className="tm-cl">
            <p className="here">We are situated over here</p>
            <img id="place" src="images/placeholder.png" />
            <div id="map"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
