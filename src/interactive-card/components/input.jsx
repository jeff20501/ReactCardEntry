import * as Yup from 'yup';
import {useState} from 'react'
import checkedIcon from './images/icon-complete.svg'
export function Inputs(props){
    
    const [errors, setErrors] =  useState({})
    const [formSubmitted, setFormSubmitted]=useState(false)

    const validationSchema=Yup.object({
        Cardholder: Yup.string()
            .required("Cardholder Name is required"),
        
        card_number: Yup.string()
            .transform(v => (v ? v.replace(/\s+/g, '') : v))
            .required("Card number is required")
            .matches(/^\d+$/, "Invalid input, Numbers only")
            .length(16, "Card number should be not less or more than 16 digits"),
        
        month: Yup.string()
            .required("Can't be Empty"),
        
        Year:Yup.string()
            .required("Can't be Empty"),
        
        cvc:Yup.string()
            .required("Can't br Empty"),
    })

    
    async function handleSubmit(event) {
        event.preventDefault()
        const newErrors = {}
        // checking that the fields are not empty or unchanged
        for(const key in props.info){
                if(props.info[key]===props.defaultValues[key] || props.info[key].trim()===""){
                    newErrors[key]=`${key} is unchanged or empty. `    
                }
        }

        // run Yup validation
        try{
                        
            await validationSchema.validate(props.info, {abortEarly:false})

        }catch(error){

            error.inner.forEach(error=>{
                newErrors[error.path]=error.message
            })
            console.log(newErrors)
        }
        setErrors(newErrors) //update error state

        // if no error submit
        if(Object.keys(newErrors).length===0){
            console.log("Form submitted", props.info)
            setFormSubmitted(true)
        }else{
            console.warn("Form not submitted. Validation failed.");
        }
    }
    console.log(errors)


    return(
        <article className="inputs">
            {formSubmitted
            ?
            <section className='complete'>
                <img src={checkedIcon}/>
                <h2>Thank you!</h2>
                <p>We've added your card details</p>
                <button className='confirm-btn'>Continue</button>
            </section>             
            :
            <form name="myForm" className="inputForm" onSubmit={handleSubmit}>
                <label htmlFor="Cardholder">Cardholder Name</label>
                <input 
                    id="Cardholder" 
                    name="Cardholder" 
                    placeholder="e.g. Jane Appleseed" 
                    type="text"
                    onChange={props.handleChange}  
                    
                />
                {errors.Cardholder?<p className='errors'>{errors.Cardholder}</p>:null}
                

                <label htmlFor="card_number"> Card Number</label>
                <input
                    id="card_number"
                    type="text"
                    name="card_number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    onChange={props.handleChange}             
                    
                />
                {errors.card_number?<p className='errors'>{errors.card_number}</p>:null}

                <label>Exp. Date (MM/YY)</label>
                <div className="timeline">
                    <input 
                        id="month"
                        type="number"
                        name="month"
                        placeholder="MM"
                        onChange={props.handleChange}
                        
                    />
                    {errors.month?<p className='errors'>{errors.month}</p>:null}

                    <input
                        id="Year"
                        type="number"
                        name="Year"
                        placeholder="YY"
                        onChange={props.handleChange}
                        
                    />
                    {errors.Year?<p className='errors'>{errors.Year}</p>:null}
                    

                </div> 
                <label htmlFor="cvc" > CVC</label>
                <div>
                    <input
                        id="cvc"
                        type="number"
                        name="cvc"
                        placeholder="e.g. 123"
                        onChange={props.handleChange}
                        
                    />
                    {errors.cvc?<p className='errors'>{errors.cvc}</p>:null}
            
                </div>
                <button className="confirm-btn" type="submit" >Confirm</button>
            </form>
        }
            
        </article>
    )
}