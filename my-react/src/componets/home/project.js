import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsNcEu, faCreativeCommonsPdAlt, faCreativeCommonsShare, faCreativeCommonsZero, faFacebook, faFigma, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faCircleRight, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { hover } from "@testing-library/user-event/dist/hover";
import { faAddressCard, faAnchorCircleExclamation, faCircleArrowRight, faCircleChevronRight, faHeart, faPaperPlane, faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
export function Project() {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white" }}>
                <div class="container-fluid col-8">
                    <a class="navbar-brand" href="#" />
                    <h5 class="text-success">UNIVERSITY<br />Landmark Education</h5>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-light"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-dark" href="#">About Us</a>
                            <a class="nav-link text-dark" href="#">Services</a>
                            <a class="nav-link text-dark" href="#">Contact</a>
                            <a class="nav-link text-dark" href="#">Follow Us</a>

                        </div>
                        <h3 class="nav-link text-dark" href="#">Call Us:0(78)67543674 |</h3>
                        < FontAwesomeIcon icon={faFacebook}  class="text-primary m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faTwitter}  class="text-primary m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faLinkedin}  class="text-primary m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faYoutube}  class="text-danger m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faEnvelope}  class="text-success m-2" style={{ height: 25 }} />


                    </div>
                </div>
            </nav>
            <div style={{ backgroundImage: 'url("https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg")', height: 500 }} >
                <div class="container-fluid  col-7 m-2" style={{ paddingTop: 200 }}>
                    <h3 class="text-white">Education & School</h3>
                    <h1 class="text-white">SHOWCASE CROUSES,<br />EVENTS AND MORE!</h1>
                    <p class="text-white">lorem ipsum dolor sit amet,consector adipiscing elit.<br />Suspendisse varius enim elementum tristique.</p>
                    <button id="btn1" class="text-white bg-success">Get Start Now</button>
                </div>
            </div>
            <br />
            <div class="container-fluid row" style={{ backgroundColor: "lightpink" }} >

                <div class=" div1  container-fluid  text-center m-5 p-5 col-5   ">
                    <img class="img-fluid" src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/about1.jpg" style={{ height: 500, width: 700 }} />

                </div>
                <div class="div1  container-fluid  text-center m-5 p-5 col-5 ">
                    <h2 class="text-dark">A COMPREHENSIVE TEACHING APPROACH</h2>
                    <p class="text-secondary text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.<br /><br /><br />

                        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>

                    <a href="https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr." class="  text-success">Learn more</a>

                </div>
            </div>
            <div class="container-fluid row bg-white">

                <div class="container-fluid row">
                    <h2 class="text-center text-dark m-5"> PROGRAMS WE OFFER</h2>
                    <p class="text-dark text-center " >Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa</p>
                </div>
            </div>

            <div class="container-fluid row text-center" >
                <div class="card col- 4 md-3 m-4 " style={{ width: isHovered ? 600 : 550 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog1.jpg"
                        class="card-img-top" alt="..." />
                    <div class="card-body ">
                        <h5 class="card-title text-secondary">Faculty of Science</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: 600 }}>
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog2.jpg"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Faculty of Arts</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid row" style={{ backgroundColor: "lightgrey" }} >
                <div class="container-fluid  text-center col-5 m-4 p-5  ">
                    <h2 class="text-dark">ESSENTIAL RESOURCES</h2>
                    <p class="text-secondary text-center">Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
                        Integer efficitur tellus metus, sed feugiat leo posuere.</p>

                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">First year students</h1>
                        <p href="#" class="card-text" >Integer efficitur tellus metus, sed feugiat leo posuere ac.
                            Morbi vitae tincidunt mi, et malesuada massa.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">Tuition & fees</h1>
                        <p href="#" class="card-text" >Integer efficitur tellus metus, sed feugiat leo posuere ac.
                            Morbi vitae tincidunt mi, et malesuada massa.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body m-2 p-4 " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">International students</h1>
                        <p href="#" class="card-text" >Integer efficitur tellus metus, sed feugiat leo posuere ac.
                            Morbi vitae tincidunt mi, et malesuada massa.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>

                </div>
                <div class="  container-fluid  text-center m-5 p-5 col-5 ">
                    <img class="img-fluid" src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg" style={{ height: 500, width: 700 }} />

                </div>
            </div>
            <div class="container fluid row col-p-2 md-4">
                <h4 class="col-4">TOPSTORIES
                    <a href="#" style={{ marginLeft: 1000 }}>MoreStories</a></h4>
            </div>
            <div class="container-fluid row">
                <div class="card1 container-fluid col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img1.jpg" style={{ width: isHovered ? 350 : 300 }} />


                        <div style={{ width: isHovered ? 'black' : ' green' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        ><p     >Some quick example text to build on the .</p>
                        </div>

                    </div>
                </div>

                <div class="card1 container-fluid mt-2 col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img2.jpg" style={{ width: isHovered ? 350 : 300 }} />

                        <h3 class="card-text text-success">Some quick example text to build on the .</h3>
                    </div>
                </div>

                <div class="card1 container-fluid mt-2 col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img3.jpg" style={{ width: isHovered ? 350 : 300 }} />

                        <h3 class="card-text text-success">Some quick example text to build on the .</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div class="container-fluid row text-center">
                <h1>OUR PERTENERS</h1>
                <h5 style={{ color: "grey" }}>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.<br /> Integer efficitur tellus metus, sed feugiat leo posuere.</h5>
            </div>
            <center> <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand4.png" class=" w-20" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand3.png" class=" w-20" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand2.png" class=" w-20" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand1.png" class=" w-20" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand5.png" class=" w-20" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">

                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">

                </button>
            </div></center>

            <div class="container-fluid row" style={{ backgroundColor: "wheat" }} >

                <div class=" container-fluid  text-center m-5 p-5 col-5   ">
                    <img class="img-fluid" src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/about1.jpg" style={{ height: 500, width: 700 }} />

                </div>
                <div class="container-fluid  text-center m-5 p-5 col-5 bg-success">
                    <h2 class="text-light">TRUSTED BY OVER6000+ STUDENTS</h2>
                    <h5 class="text-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.<br /><br /><br />

                        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</h5>
                    <br />
                    <br />

                    <a href="#" class="  text-light" style={{ marginRight: 350 }} >JoinNow</a>

                </div>
            </div>
            <div class="container-fluid row bg-dark">
                <div>
                    <p class="text-light"><b>UNIVERSITY</b> <br />Landmark</p>

                </div>
                <div class="col-md-5 col-lg-3 text-secondary" style={{ marginLeft: 20 }}>
                    <h3 class="col-1 m-5 text-light">Quick Link</h3>
                    <a href="#">Work</a><br />
                    <a href="#">Product</a><br />
                    <a href="#">Services</a><br />
                    <a href="#">Tips & Tricks</a>

                </div>
                <div class="col-1 m-5 text-light">
                    <h1>Programs</h1>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Large Projects</p>

                </div>

                <div class="col-1 m-5 text-light">
                    <h1>Resouces</h1>
                    <p>FAQ</p>
                    <p>Submit Ticket</p>
                    <p>Contact Us</p>
                </div>

                <div class="col-2 m-5 text-light">
                    <h1>Newsletters</h1>
                    <p1>Subscribe newsletter to get updates.</p1>
                    <div class="btn-group  " role="group" aria-label="Basic outlined example">
                        <input type="email " class="text " placeholder="Enter your email" />
                        <button type="button" class="btn btn-outline-success "><FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>



                <div class="text-secondary container-fluid row">
                    <hr />
                    <p class="text-secondary text-center container-fluid">Copyright<FontAwesomeIcon icon={faCreativeCommonsShare} /> 2023 All rights reserved | This template is made <FontAwesomeIcon icon={faHeart} style={{ color: "green" }} /> with  by <a href="#" class="text-success">Colorlib</a></p>

                </div>
            </div>

        </>
    )
}


