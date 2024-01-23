import { useState } from "react";

import Img from 'react'
import Img1 from 'react'

export function Add() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    // const [color, setBanana] = useState(0)


    return (
        <body style={{backgroundColor:"orange",marginTop:100,paddingLeft:100,paddingTop:100,paddingBottom:100}}>
            <div class="container fluid row text-center bg-white " >
                    <h1>Bob ate <b style={{color:"yellow"}}>{count}</b> Mango <b style={{color:"yellow"}}> {count1}</b> Banana</h1>
                <div class="col-4 m-4 p-2">
                    <img src="https://media.istockphoto.com/vectors/mango-are-perfect-for-summer-emoji-vector-design-icon-flat-design-vector-id1337865357?k=20&m=1337865357&s=612x612&w=0&h=Q1Q3nhU9evFMUJJW9UkHmoI4UJl4jA6fYqHrS-6eRUk=" style={{ height: 200 }} /><br></br>
                    <button type="button" style={{backgroundColor:"blue",color:"whitesmoke",borderRadius:10}} onClick={() => setCount(count + 1)}>Eat Mango</button>

                </div>
                <div class="col-4 m-4 p-2">

                    <img src="https://media.istockphoto.com/id/1127252824/vector/cool-muscular-banana-character-in-sunglasses.jpg?s=1024x1024&w=is&k=20&c=-Xo2C-nxthP9_5WExxVma_2QRFRI89n1JaQ-qrwFGPk=" style={{ height: 200 }} /><br></br>
                    <button type="button" style={{backgroundColor:"blue",color:"whitesmoke",borderRadius:10}} onClick={() => setCount1(count1 + 1)}>Eat Banana</button>
                </div>
            </div>
        </body>
    )

}