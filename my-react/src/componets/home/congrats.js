import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from "../home/photo1692683997.jpeg";
import Img1 from "../home/congrats-card-watch-img.png";


export function Card() {
    return (
        <div style={{ backgroundImage:'url("https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png")' }}>
            <center><h1>aom</h1>
           <div class=" text-center bg-info col-5 ">
            <div class="">
            <img src={Img} style={{borderRadius:500, width:200}}/>
            <h2>Saikiran</h2>
            <p>I'm From World  </p>
            <img src={Img1}/>
           </div>

           </div>
    
        </center>
        </div>
    );

}