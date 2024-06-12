import React from "react";
import "../App.css";

function Explore(){
    return(
        <div>
            <section class="tm-main">
           <p>Explore</p>
    </section>

    <section class="tm-expsection">    
        <div class="tm-exp1">
        <p> Luxorious and Spacious Rooms</p>  
     <img src="images/luxorius.png" />
  </div>  
    </section>

       <section class="tm-expsection">
        <div class="tm-exp2">
        <p> Inhouse Spa</p>  
     <img src="images/spahouse.png" />
  </div>  
    </section>

     <section class="tm-expsection">    
        <div class="tm-exp1">
        <p> Swimming Pools</p>  
     <img src="images/swimming.png" />
  </div>  
    </section>
    
       <section class="tm-expsection">    
        <div class="tm-exp2">
        <p> Indoor  Game Room</p>  
     <img src="images/play.png" /> 
  </div>  
    </section>

    <section class="tm-makeres">
    <div class="tm-res">
       <div class="tm-resbutton">
           <a href="bb.html"> <p>Make Reservation</p></a>
        </div>
        </div>
    </section>
        </div>
    )
}
export default Explore;