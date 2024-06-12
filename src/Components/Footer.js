import React from 'react';
import '../App.css';

function Footer (){
    return (
        <footer class="tm-footer">
        <div class="tm-us">
        <p class="bold">About Us</p>
        <p>We are a part of chain of luxury hotels 
            which extends all over the world. We 
            provide a luxorious stay with various value
            added and free services which will make
            you visit us over and over again.</p>    
        </div>
       
        <div class="tm-address">
        <p class="bold">Address</p>
        <p>415, Park Avenu, Hawai
            Phone : (211) 9275693451
            Email : majestic@info.com</p>    
        </div>
        <br/>

    <div class="tm-media">
        <a href="#"> <img src="images/fb.png" /></a>
        <a href="#"> <img src="images/G.png" /> </a>
        <a href="#"> <img src="images/twittr.png" /> </a>
        <a href="#">  <img src="images/insta.png" /> </a>
        </div> 
    </footer>
    );
}
export default Footer;