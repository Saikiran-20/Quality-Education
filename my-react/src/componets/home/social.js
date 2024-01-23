import React from "react";

export function Social(){
    return(
        <>

        <div class="container fluid row text-center"style={{backgroundImage:'url("https://png.pngtree.com/back_origin_pic/04/05/06/7c54ba9a92dbf09fc855cd3baa53f5ff.jpg")',height:900}}>
            <div class="cotainer fluid">
            <h1 class="text-white "style={{marginTop:200}} >Social Buttons</h1>
            <button class="bg-warning text-white" style={{borderRadius:10}}>Like</button>
            <button class="bg-white text-dark" style={{borderRadius:10}}>Comment</button>
            <button class="bg-primary text-white" style={{borderRadius:10}}>Share</button>
            </div>
        </div>
    </>
    );
}
