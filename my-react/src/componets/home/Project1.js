import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsNcEu, faCreativeCommonsPdAlt, faCreativeCommonsShare, faCreativeCommonsZero, faFacebook, faFigma, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faCircleRight, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { hover } from "@testing-library/user-event/dist/hover";
import { faAddressCard, faAnchorCircleExclamation, faCircleArrowRight, faCircleChevronRight, faHeart, faPaperPlane, faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
export function Project1() {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white" }}>
                <div class="container-fluid col-12">
                    <a class="navbar-brand" href="#" />
                    <img class="img-fluid" src="https://th.bing.com/th/id/OIP.87BQ6GK-BPMv2GsEL7tGpgHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" style={{ height: 100, width: 100,backgroundRepeat:"no-repeat" }} /><br></br>

                    <h4 class="text-success">UNIVERSITY<br />National</h4>
                    <br></br>
                <br></br>
                    {/* <p class="text-center"><h5>Department of Economic </h5>Sustainable Development</p> */}
                    <br></br>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-light"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav"style={{marginLeft:500}}>
                            
                            <a class="nav-link active text-primary" aria-current="page" href="#">Home</a>
                            <a class="nav-link " href="#" style={{color:"blue"}}>About Us</a>
                            <a class="nav-link text-primary" href="#">Services</a>
                            <a class="nav-link text-primary" href="#">Contact</a>

                        <p class="nav-link text-dark" href="#">Call Us:0(78)67543674 |</p>
                        </div>
                        {/* < FontAwesomeIcon icon={faFacebook}  class="text-primary m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faTwitter}  class="text-primary m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faLinkedin}  class="text-primary m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faYoutube}  class="text-danger m-2" style={{ height: 25 }} />
                        < FontAwesomeIcon icon={faEnvelope}  class="text-success m-2" style={{ height: 25 }} /> */}


                    </div>
                </div>
            </nav>       
                 <div style={{ backgroundImage: 'url("https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg")', height: 500 }} >

                <div class="container-fluid  col-7 m-2" style={{ paddingTop: 200 }}>
                    <h3 class="text-white">Quality Education</h3>
                    {/* <h1 class="text-white">SHOWCASE CROUSES,<br />EVENTS AND MORE!</h1> */}
                    <p class="text-white">Education Qulity education skills development,gender partiy,provision of relevants school<br />Equipment,educational materials and resources, scholarship</p>
                    <button id="btn1" class="text-white bg-success"href="https://www.education.gov.in/nep/about-nep">Get Start Now</button>
                </div>
            </div>
            <br />
            <div class="container-fluid row bg-dark"> 

            <div class="container-fluid row" style={{ backgroundColor: "lightblue" }} >

<div class=" div1  container-fluid  text-center m-5 p-5 col-5   ">
    <img class="img-fluid" src="https://sdgs.un.org/sites/default/files/2023-08/SDG_report_2023_infographics_Goal%204.jpg" style={{ height: 600, width: 800 }} />

</div>
<div class="div1  container-fluid  text-center m-5 p-5 col-5 ">
    <h2 class="text-dark">* Quality of Education:</h2>
    <p class="text-secondary text-center">Disparities in the quality of education exist, with urban schools often having better resources and qualified teachers than those in rural areas.
Outdated curriculum and teaching methods may not adequately prepare students for the skills required in the modern workforce.</p>
<h2 class="text-dark">* Gender Inequality:</h2>
    <p class="text-secondary text-center">Gender-based discrimination in education remains a significant issue. In some cultures, girls are less likely to attend school due to societal norms, early marriages, or safety concerns.
Disparities in educational opportunities between genders persist, affecting access to higher education and career opportunities. </p>
        <h2 class="text-dark text-center">* Political Instability</h2>
        <p class="text-secondary text-center">Political conflicts and instability can disrupt the normal functioning of educational institutions, leading to the displacement of students and teachers</p>
    <a href="https://en.wikipedia.org/wiki/Education" class="  text-success">Learn more</a>
</div>
</div>
<div class="container-fluid row bg-white">

                <div class="container-fluid row">
                    <h2 class="text-center text-dark m-5">Problem-Solving Skills to Children</h2>
                    <p class="text-dark text-center "><h4>As parents or teachers, we can’t always be there to solve every problem for our children. In fact, this isn’t our job. Our job is to TEACH our children how to solve problems by themselves. This way, they can become confident, independent, and successful individuals</h4></p>
                </div>
            </div>

             <div class="container-fluid row text-center" >
                <div class="card col- 4 md-3 m-4 " style={{ width: isHovered ? 550 : 500 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog1.jpg"
                        class="card-img-top" alt="..." />
                    <div class="card-body ">
                        <h5 class="card-title text-secondary">Model Effective Problem-Solving</h5>
                        <p class="card-text">When YOU encounter a challenge, do a “think-aloud” for the benefit of your child. MODEL how to apply the same problem-solving skills you’ve been working on together, giving the real-world examples that she can implement in her own life.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: 500 }}>
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog2.jpg"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Ask for Advice</h5>
                        <p class="card-text">Ask your kids for advice when you have a problem. This teaches them that it’s common to make mistakes and face challenges. It also gives them the opportunity to practice problem-solving skills.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid row" style={{ backgroundColor: "lightgrey" }} >
                <div class="container-fluid  text-center col-5 m-4 p-5  ">
                    <h2 class="text-dark">Teach the Problem-Solving Steps</h2>
                    <p class="text-secondary text-center">Help your child understand what she’s feeling in the moment (frustration, anger, curiosity, disappointment, excitement, etc.) Noticing and naming emotions will diffuse their charge and give your child a chance to take a step back.</p>

                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">What’s the problem?</h1>
                        <p href="#" class="card-text" >Guide your child to identify the specific problem. In most cases, help her take responsibility for what happened rather than pointing fingers. For instance, instead of, “Joey got me in trouble at recess,” your child might say, “I got in trouble at recess for arguing with Joey.”< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">What are the solutions?</h1>
                        <p href="#" class="card-text" >Encourage your child to come up with as many solutions as possible. At this point, they don’t even need to be “good” solutions. They’re just brainstorming here, not yet evaluating the ideas they’ve generated< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body m-2 p-4 " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">Which one will I try?</h1>
                        <p href="#" class="card-text" >Ask your child to pick one or more solutions to try. If the solution didn't work, discuss WHY and move on to another one. Encourage your child to keep trying until the problem is solved. < FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>

                </div>
                <div class="  container-fluid  text-center m-5 p-5 col-5 ">
                    <img class="img-fluid" src="https://cdn.shopify.com/s/files/1/2013/0229/files/How_to_teach_problem-solving_at_any_age.jpg?v=1651261425" style={{ height: 800, width: 1000 }} />

                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div class="container fluid row col-p-2 md-4 bg-white ">
                <h4 class="col-4">PressureFromSociety
                    <a href="#" style={{ marginLeft: 1000 }}>MoreStories</a></h4>
            </div>
            <br></br>
            <div class="container-fluid row bg-white">
                <div class="card1 container-fluid col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img3.jpg" style={{ width: isHovered ? 350 : 300 }} />


                        <div style={{ width: isHovered ? 'black' : ' green' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        ><p  class="text-success ">Being there for them and listening to them is essential. Show them that you love them unconditionally and support them no matter what..</p>
                        </div>

                    </div>
                </div>

                <div class="card1 container-fluid mt-2 col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://media.istockphoto.com/id/1299325809/photo/funny-cute-baby-girl-drawing-with-marker-on-wall-at-home-toddler-girl-child-with-milk-bottle.jpg?s=612x612&w=0&k=20&c=byo82iWVHu4Z9G4dbMZpBS18smqszQp1UmrdZ61n1tA=" style={{ width: isHovered ? 350 : 300 }} />

                        <p class=" text-success">Children today are under more pressure than ever before. They’re bombarded with images and messages from the media, social media, and their peers that can lead to feelings of inadequacy, anxiety, and depression.</p>
                    </div>
                </div>

                <div class="card1 container-fluid mt-2 col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://media.istockphoto.com/id/1411809434/photo/worried-sick-kid-with-oxygen-mask-sitting-on-bed-at-hospital-ward-concept-of-breathing.jpg?s=612x612&w=0&k=20&c=0yg-tJkexY2jvnrlCeyDAUrcwSz8N7s-XJ7Lka2DiJA=" style={{ width: isHovered ? 350 : 300 }} />

                        <p class="card-text text-success">One of the most common problems that children face today is peer pressure. Peers can influence a child’s decisions and actions, often without the child realizing it. As a parent, you can help your child by teaching them how to identify and resist peer pressure.</p>
                    </div>
                </div>
            </div>
           


            <div class="col-md-5 col-lg-3 text-secondary" style={{ marginLeft: 20 }}>
                    <h3 class="col-1 m-5 text-light">Quick Link</h3>
                    <a href="https://en.wikipedia.org/wiki/Education">Work</a><br />
                    <a href="https://en.wikipedia.org/wiki/Education_economics">Product</a><br />
                    <a href="https://www.tsia.com/blog/what-is-education-services">Helping Services</a><br />
                    <a href="https://www.vu.edu.au/about-vu/news-events/study-space/10-tips-on-how-to-study-effectively">Tips</a>

                </div>
                <div class="col-1 m-5 text-light">
                    <h1>Programs</h1>
                    <a href="#">Air Freight</a><br></br>
                    <a href="#">Ocean Freight</a><br></br>
                    <a href="#">Large Projects</a>

                </div>

                <div class="col-1 m-5 text-light">
                    <h1 href="#">Resouces</h1>
                    <a href="#">FAQ</a><br></br>
                    <a href="#">Submit Ticket</a><br></br>
                    <a href="https://www.keralaeducationhelpline.com/">Contact Us</a>
                </div>

                <div class="col-2 m-5 text-light">
                    <h1 >Newsletters</h1>
                    <a href="https://indianexpress.com/section/education/">Subscribe newsletter to get updates.</a>
                    <div class="btn-group  " role="group" aria-label="Basic outlined example">
                        <input type="email " class="text " placeholder="Enter your email" />
                        <button type="button" class="btn btn-outline-success "><FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>



                <div class="text-secondary container-fluid row">
                    <hr />
                    <p class="text-secondary text-center container-fluid">Copyright<FontAwesomeIcon icon={faCreativeCommonsShare} /> 2023 All rights reserved | This template is made <FontAwesomeIcon icon={faHeart} style={{ color: "green" }} /> with  by <a href="#" class="text-success">Colorlib</a></p>
                    <div class="container-fluid row text-center col-6"style={{marginLeft:500}}>
                        <div class="fluid col-1">
                            <a  href="https://www.facebook.com/abhi.akki.1257?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook}style={{color:"lightblue"}} /></a>
                        </div>

                        <div class="fluid col-1">
                            <a  href="https://instagram.com/abhi_6w071?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><FontAwesomeIcon icon={faInstagram}style={{color:"pink"}} /></a>
                        </div>

                        <div class="fluid col-1">
                            <a  href="https://www.linkedin.com/in/abhishek-p-a3a283297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin}style={{color:"skyblue"}} /></a>
                        </div>

                        <div class="fluid col-1">
                            <a ><FontAwesomeIcon icon={faYoutube}style={{color:"red"}} /></a>
                        </div>


                    </div>
                </div>
            
</div>


            



        </>
    )
    }