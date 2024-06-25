import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
 const Tag =()=>{
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY

    const[tag , setTag]=useState('');
    // const [gif , setGif] =useState('');
    // const [loading , setLoading]=useState('false');
   
    // async function fetchdata(){
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` 
    //       // data>>data>images>>downsized>>url
    //     const {data}=await axios.get(url);
    //     const imagesource=data.data.images.downsized_large.url;
    //     console.log(imagesource);
    //     setGif(imagesource);
    //     setLoading(false);
        
    // }
    // useEffect(()=>{
    //     fetchdata();
    // },[])
    
  const{gif , loading , fetchdata}=useGif(tag);
    
    return (
        <div className="w-1/2  bg-blue-400 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold"> Random {tag} Gif</h1>
            {
                loading ? ( <Spinner/>) :( <img src={gif} width="450"/>)
            }
           <input
           type="text"
            onChange={(event)=>{setTag(event.target.value);}}
            value={tag}
           className="mb-[3px] w-10/12 bg-blue-200 text-lg py-2 rounded-lg item-center text-center"/>

            <button onClick={()=>{fetchdata(tag)}}
            className="mb-[20px] w-10/12 bg-blue-200 text-lg py-2 rounded-lg item-center">
                Generate
            </button>
        </div>
    )
   
 }
 export default Tag;