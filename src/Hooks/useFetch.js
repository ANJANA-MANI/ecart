import { useEffect, useState } from "react";

const useFetch=(url)=>{
    const[data,setdata]=useState(null)
    useEffect(()=>{

        fetch(url).then(result=>{
            result.json().then(i=>{
                setdata(i.products)
            })
        })
    },[url])
    return data
}
export default useFetch