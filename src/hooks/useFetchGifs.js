import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categories) => {
    const [images, setimages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages= async()=>{
        const Newimages= await getGifs(categories);
        setisLoading(false)
        setimages(Newimages);
    }
    
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }

}



