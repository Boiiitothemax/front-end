import React from 'react';
import '../App.css';

function Booking() {
    return (
        <div>
            <section className="tm-main">
                <p>Booking</p>
                <section className="tm-booking">
                    <form>
                        <div className="tm-form1">
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="E-mail" />
                            <label htmlFor="rooms" id="inlinelabel">Rooms</label>
                            <select name="Rooms" id="rooms">
                                <option value="luxurys">Luxury Suite</option>
                                <option value="deluxs">Deluxe Suite</option>
                                <option value="premiers">Premier Suite</option>
                                <option value="Luxuryr">Luxury Room</option>
                                <option value="deluxr">Deluxe Room</option>
                                <option value="premierr">Premier Room</option>
                            </select>
                            <div className="tm-num1" id="handleCounter1">
                                <label htmlFor="number1">Number of Rooms</label><br />
                                <button type="button" className="counter-minus btn btn-primary">- </button>
                                <input type="text" name="number1" id="number1" value="1" />
                                <button type="button" className="counter-plus btn btn-primary">+  </button>
                            </div>
                            <div className="tm-num2" id="handleCounter2">
                                <label htmlFor="number2">Number of Guests</label><br />
                                <button type="button" className="counter-minus btn btn-primary">-</button>
                                <input type="text" name="number2" id="number2" value="1" />
                                <button type="button" className="counter-plus btn btn-primary">+</button>
                            </div>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="tm-form2">
                            <div className="tm-cl">
                                <label htmlFor="date1" className="arrival">Visiting Dates from Arrival to Departure</label>
                                <input type="text" name="date1" className="range" readOnly />
                                <input type="submit" id="sub" value="Proceed" />
                            </div>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default Booking;
