import React from 'react';
import '../App.css';

function Header () {
  return (
    <div>
      <header className="tm-header">
        <img className="tm-logo" src="images/Majestic_Hotel_hd.png" alt="Majestic Hotel" />
        <nav className="tm-nav">
          <div>
            <ul>
              <li className="tm-list"><a href="index.html">Home</a></li>
              <li className="tm-list"><a href="explore.html">Explore</a></li>
              <li className="tm-list"><a href="rooms.html">Rooms</a></li>
              <li className="tm-list"><a href="bb.html">Booking</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
  </div>
  );
}

export default Header;

