import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

export function Jsondetails() {
    const [details, setDetails] = useState([])
    useEffect(() => {
        // fetch("http://localhost:3000/data.json")
        fetch("http://fakestoreapi.com/products")
            .then(res => res.json())
            .then(showdetails => setDetails(showdetails))
    })
    return (
        <>
            <div class="row ">
                {
                    details.map((index, value) => (

                        <div class="card" style={{ width: 300 }}>
                        <p class="card-title text-danger">{index.id}</p>
                            <img src={index.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title p-3 bg-info ">{index.title}</h5>
                                <p class="card-text text-primary">{index.category}</p>
                                <p class="card-text text-secondary bg-white">{index.description}</p>
                                <p class="card-text bg-warning "><StarRatings rating={index.rating.rate}
                                starRatedColor="green"
                                numberOfStars={5}
                                starSpacing="2px"
                                starDimension="20px"
                                ></StarRatings></p>
                                <p class="card-text text-danger">price:{index.price}<sup>00</sup></p>
                                
                                <a href="#" class="btn btn-primary">View more</a>
                            </div>
                        </div>


                    ))
                }
            </div>
        </>
    )
}