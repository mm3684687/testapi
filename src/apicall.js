import React, { useEffect, useState } from "react";

export default function ApiCall() {
    
    const [abc,setabc]=useState([])
    useEffect(()=>{
        const data=fetch("https://jsonplaceholder.typicode.com/posts")
        .then((value)=>value.json())
        .then((apidata)=>setabc(apidata));
    },[])
   
    console.log(abc)
    return(
        
        <>
      {
        abc.map((apicall)=>{
            return(
                <div class="card">
              <p><b>TITLE: </b>{apicall.title}</p>
              <p><b>BODY: </b>{apicall.body}</p>
              </div>
            )
        })
      }
        </>
    )
}