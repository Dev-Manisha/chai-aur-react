import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'



function Gihub() {
    const data = useLoaderData();
    console.log(data, "********8")
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })

    // }, [])

    return (
        <div className=' bg-gray-500 text-white p-4 m-4 text-3xl'>GitHub Followers: {data.followers}
            <img src={data.avatar_url} width="300" alt="Git Picture" />
        </div>
    )
}



export default Gihub


export const githubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();

}