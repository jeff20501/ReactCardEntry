import { useState } from "react";
import { Inputs } from "./components/input";
import { Card } from "./components/Card";
export function Page(){
    const [info, setInfo]=useState({
        Cardholder: "Jane Appleseed",
        card_number:"0000 0000 0000 0000",
        month:"00",
        Year:"00",
        cvc:"000"
    })

    function handleChange(event){
        const {value, name} = event.currentTarget
        setInfo(prevInfo=>({
            ...prevInfo,
            [name]:value
        }))
    }


    return(
        <>
            <main className="main">
                <Card 
                    info={info}
                />
                <Inputs handleChange={handleChange}/>
            </main>    
                
        </>
    )
}