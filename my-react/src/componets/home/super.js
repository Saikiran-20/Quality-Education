import React from 'react';
import Img from '../home/img.png';
import Img2 from '../home/img2.png';
import "bootstrap/dist/css/bootstrap.css"
export function Imgtask(){
    return(
      <>
  
        <center><div className=' text-center bg-white '>
            <center><div className='col-12 m-4 bg-dark'>
            <h1 className='text-center text-white'>Super Over League</h1>
                <img src={Img}></img>
             
                
                <img src={Img2}></img>
            </div></center>
        </div></center>
    
      </>
    )
}