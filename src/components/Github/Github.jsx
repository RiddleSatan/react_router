import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData();
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/RiddleSatan')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center text-xl font-semibold bg-black text-white p-4 m-4 rounded'>Github Followers : {data.followers}</div>
    )
}

export default Github

export const githubinfoloader=async ()=>{
   const response=await fetch('https://api.github.com/users/RiddleSatan');
   return response.json()

}