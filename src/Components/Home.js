import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      <section className="tm-imgslider">
        <div className="slider single">
          <div>
            <div className="tm-slider">
              <img
                className="tm-sliderimage"
                src="images/main_slider11.png"
                alt="Majestic Hotel"
              />
              <div className="tm-slidertext">
                <p className="bold">Experience</p>
                <p className="simple">The Beauty and ambience</p>
                <p className="simple">All in one place</p>
              </div>
            </div>
          </div>
          <div>
            <div className="tm-slider">
              <img
                className="tm-sliderimage"
                src="images/main_slider12.png"
                alt="Majestic Hotel"
              />
              <div className="tm-slidertext">
                <p className="bold">Experience</p>
                <p className="simple">The tranquility</p>
                <p className="simple">in hotel spa and swimming pool</p>
              </div>
            </div>
          </div>
          <div>
            <div className="tm-slider">
              <img
                className="tm-sliderimage"
                src="images/main_slider13.png"
                alt="Majestic Hotel"
              />
              <div className="tm-slidertext">
                <p className="bold">Experience</p>
                <p className="simple">The luxurious interiors</p>
                <p className="simple">in every hotel room</p>
              </div>
            </div>
          </div>
          <div>
            <div className="tm-slider">
              <img
                className="tm-sliderimage"
                src="images/main_slider14.png"
                alt="Majestic Hotel"
              />
              <div className="tm-slidertext">
                <p className="bold">Experience</p>
                <p className="simple">The mesmerizing beach view</p>
                <p className="simple">from your room's balcony</p>
              </div>
            </div>
          </div>
        </div>
        <img src="" className="left" alt="Previous" />
        <img src="" className="right" alt="Next" />
      </section>

      <section className="slider room flex">
        <div className="tm-rooms">
          <img src="images/luxury.png" alt="Luxury Suite" />
          <a href="rooms.html">
            <p className="s">Luxury Suite</p>
          </a>
        </div>
        <div className="tm-rooms">
          <img src="images/delux.png" alt="Deluxe Suite" />
          <a href="rooms.html">
            <p className="s">Deluxe Suite</p>
          </a>
        </div>
        <div className="tm-rooms">
          <img src="images/premier.png" alt="Premier Suite" />
          <a href="rooms.html">
            <p>Premier Suite</p>
          </a>
        </div>
        <div className="tm-rooms">
          <img src="images/luxuryroom.png" alt="Luxury Room" />
          <a href="rooms.html">
            <p className="s">Luxury Room</p>
          </a>
        </div>
        <div className="tm-rooms">
          <img src="images/deluxroom.png" alt="Deluxe Room" />
          <a href="rooms.html">
            <p>Deluxe Room</p>
          </a>
        </div>
        <div className="tm-rooms">
          <img src="images/premiumroom.png" alt="Premier Room" />
          <a href="rooms.html">
            <p>Premier Room</p>
          </a>
        </div>
      </section>

      <section className="tm-servicesection">
        <div className="tm-service">
          <img
            className="tm-serimage"
            src="images/bell.png"
            alt="Room Service"
          />
          <div>
            <p className="b">Room Service</p>
            <p>Enjoy your stay with excellent and timely room service</p>
          </div>
        </div>
        <div className="tm-service">
          <img
            className="tm-serimage"
            src="images/coffee.png"
            alt="Free Breakfast"
          />
          <div>
            <p className="b">Free Breakfast</p>
            <p>Enjoy free breakfast every morning</p>
          </div>
        </div>
      </section>

      <section className="tm-servicesection">
        <div className="tm-service">
          <img
            className="tm-serimage"
            src="images/car-front.png"
            alt="Free Parking"
          />
          <div>
            <p className="b">Free Parking</p>
            <p>No need to pay any extra charges to park your vehicle</p>
          </div>
        </div>
        <div className="tm-service">
          <img className="tm-serimage" src="images/spa.png" alt="Free Spa" />
          <div>
            <p className="b">Free Spa</p>
            <p>Relax at the in-house spa once every day of your stay</p>
          </div>
        </div>
      </section>

      <section className="tm-reviewsection">
        <div className="tm-review">
          <div className="slider review">
            <div className="tm-revcon">
              <p className="b">Reviews</p>
              <div className="tm-stars">
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
              </div>
              <div className="tm-rev">
                <p>
                  Great hotel, I am recommending it to everyone. Wished I had
                  stayed a few more days there.
                </p>
                <br />
                <p>Rachel Green &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tripster</p>
              </div>
            </div>

            <div className="tm-revcon">
              <p className="b">Reviews</p>
              <div className="tm-stars">
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
              </div>
              <div className="tm-rev">
                <p>
                  Nice hotel, I had a wonderful experience and there are plenty
                  of amenities.
                </p>
                <br />
                <p>Ross Geller &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visitor</p>
              </div>
            </div>

            <div className="tm-revcon">
              <p className="b">Reviews</p>
              <div className="tm-stars">
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
              </div>
              <div className="tm-rev">
                <p>Great hotel, great food, enough said.</p>
                <br />
                <p>Joey Tribiani &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Actor</p>
              </div>
            </div>

            <div className="tm-revcon">
              <p className="b">Reviews</p>
              <div className="tm-stars">
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
              </div>
              <div className="tm-rev">
                <p>
                  Very nice hotel, enjoyed the spa and as a masseuse I recommend
                  it.
                </p>
                <br />
                <p>Pheobe Buffay &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Traveller</p>
              </div>
            </div>

            <div className="tm-revcon">
              <p className="b">Reviews</p>
              <div className="tm-stars">
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />

                <img src="images/star.png" alt="Star" />
              </div>
              <div className="tm-rev">
                <p>Nice, calm, and clean just the way I like it.</p>
                <br />
                <p>Monica Geller &nbsp;&nbsp;&nbsp;&nbsp;&nbsp Tripster</p>
              </div>
            </div>

            <div className="tm-revcon">
              <p className="b">Reviews</p>
              <div className="tm-stars">
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
                <img src="images/star.png" alt="Star" />
              </div>
              <div className="tm-rev">
                <p>Knock knock, who's there? ... a satisfied customer.</p>
                <br />
                <p>Chandler Bing &nbsp&nbsp&nbsp&nbsp&nbsp Visitor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="tm-makeres">
        <div class="tm-res">
          <div class="tm-resbutton">
            <a href="bb.html">
              {" "}
              <p>Make Reservation</p>
            </a>
          </div>
        </div>
      </section>

      <footer class="tm-footer">
        <div class="tm-us">
          <p class="bold">About Us</p>
          <p>
            We are a part of chain of luxury hotels which extends all over the
            world. We provide a luxorious stay with various value added and free
            services which will make you visit us over and over again.
          </p>
        </div>

        <div class="tm-address">
          <p class="bold">Address</p>
          <p>
            415, Park Avenu, Hawai Phone : (211) 9275693451 Email :
            majestic@info.com
          </p>
        </div>
        <br />
        <div class="tm-media">
          <a href="https://www.facebook.com/feri.setiawan.1829405">
            {" "}
            <img src="images/fb.png" alt="facebook" />
          </a>
          <a href="https://g.co/kgs/63wAw2z">
            {" "}
            <img src="images/G.png" alt="Google" />{" "}
          </a>
          <a href="https://www.instagram.com/aalfiannnnnn?igsh=MW1keDNrcW9kbTY5eA%3D%3D&utm_source=qr">
            {" "}
            <img src="images/twittr.png" alt="twitter" />{" "}
          </a>
          <a href="https://www.instagram.com/aalfiannnnnn?igsh=MW1keDNrcW9kbTY5eA%3D%3D&utm_source=qr">
            {" "}
            <img src="images/insta.png" alt="instagram" />{" "}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
