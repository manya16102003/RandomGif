
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
 
const useGif = (tag) => {
   
    const [gif , setGif] =useState('');
    const [loading , setLoading]=useState('false');
    const randomurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` 
    const tagurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    async function fetchdata(tag){
        setLoading(true);
        
          // data>>data>images>>downsized>>url
        const {data}=await axios.get(!tag ? randomurl:tagurl);
        const imagesource=data.data.images.downsized_large.url;
        console.log(imagesource);
        setGif(imagesource);
        setLoading(false);
        
    }
    useEffect(()=>{
        fetchdata();
    },[])
    
    return {gif , loading , fetchdata}
};

export default useGif;
