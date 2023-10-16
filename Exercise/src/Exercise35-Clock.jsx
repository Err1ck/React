/* Build a Clock component that renders the current time within an h2 tag.
 Use the useEffect hook to update the time every second. */

import { useEffect, useState } from "react"

export function Clock (){
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())
        },1000)
    },[])

    return <h2>Current Time: {time.toLocaleTimeString()}</h2>
}
