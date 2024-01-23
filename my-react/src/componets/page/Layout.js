import { Outlet,Link,} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css"
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Layout =() =>{
  
       
  
return(
    <>
   

    <div class="container-fluid row bg-warning " >
     
    <div class='col-1' >
        <FontAwesomeIcon icon={faInstagram} style={{height:40}}/>
        
            </div>
            <div class="col-1 ">
                <Link to="/Home">Home</Link>
                </div>        
          
     <div class="col-1">

                <Link to="/Blogs">Blogs</Link>
     </div>
            <div class="col-1">

                <Link to="/contact">contact</Link>
            </div>
            <div class="col-1">

                <Link to="/NoPage">NoPage</Link>
            </div>
          
     
</div>
      <div class="container-fluid row"   style={{backgroundImage:'url("https://wallpaperset.com/w/full/c/9/0/522708.jpg")',height:700}}>
        <div>
        <h3 class="text-white m-2 p-2">K.Saikiran</h3>
        
        <h4 class="text-white">I M Form Madanapalle</h4>
        <p class="text-white">Hi All this sai Im from Madanapalle</p>
        <button href="https://www.pexels.com/search/beautiful%20nature/">ViewMore</button>
      </div>
      </div>
        <Outlet/>
        </>
);
}
export default Layout;