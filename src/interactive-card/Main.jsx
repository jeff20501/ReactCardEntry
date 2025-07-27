import { useState } from "react";
import { Inputs } from "./components/input";
import { Card } from "./components/Card";
export function Page(){
    const defaultValues = {
        Cardholder: "Jane Appleseed",
        card_number:"0000 0000 0000 0000",
        month:"00",
        Year:"00",
        cvc:"000"
    }

    const [info, setInfo]=useState(defaultValues)

    function handleChange(event){
        const {value, name} = event.currentTarget
        if(name==="card_number"){
            const raw = value.replace(/\D/g, "").slice(0, 16) 
            /* 
                \D means any non-digit character 
                .replace(/\D/g, "") removes all non-digit characters including white spaces, dashes and letters
                .slice(0, 16): Keeps only the first 16 digits
                
            */
            const formatted = raw.replace(/(\d{4})(?=\d)/g, "$1 ")
            /*
                (\d{4}) matches every 4 digits
                (?=\d): a lookahead that ensures there’s another digit after the 4 digits — this prevents a trailing space at the end
                "$1 " adds a space after every 4 digits group
            */
           if(formatted===info.card_number){
                console.warn(`${name} is unchanged`)
           }else{

                setInfo(prevInfo=>({
                ...prevInfo,
                [name]:formatted
            }))
           }
           
            
        }else{
            if(value===info[name]){
                console.warn(`${name} is unchanged`)
            }else{
                setInfo(prevInfo=>({
                    ...prevInfo,
                    [name]:value
                }))
            }
        }

        
    }


    return(
        <>
            <main className="main">
                <Card 
                    info={info}
                />
                <Inputs 
                    defaultValues={defaultValues}
                    handleChange={handleChange}
                    info={info}
                
                />
            </main>    
                
        </>
    )
}