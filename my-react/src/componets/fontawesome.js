import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import { faBell, faCircleCheck, faCircleXmark, faImage, } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowUp, faCircleExclamation, faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";

export function Font(){
    return(
        <>
        <div class="container-fluid row text-center">
         <center>  <h1>Notifications</h1>
            <div class='col-5 p-4 m-5 bg-primary' >
        <FontAwesomeIcon icon={faCircleCheck}style={{color:'white'}}/>Information Message
        
            </div>
            <div class='col-5 p-4 m-5 bg-success'>
        <FontAwesomeIcon icon={faCircleCheck}style={{color:'brown'}}/>success Message
            </div>
            <div class='col-5 p-4 m-5  bg-warning'>
        <FontAwesomeIcon icon={faBell}style={{color:'greenyellow'}}/>warning Message
        </div>
        <div class='col-5 p-4 m-5 bg-danger'>
       <FontAwesomeIcon icon={faCircleExclamation}style={{color:'whitesmoke'}}/>Error Message
        </div>
        </center>
        </div>
        </>
    );
}