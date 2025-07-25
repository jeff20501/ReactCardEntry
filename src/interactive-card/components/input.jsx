export function Inputs(props){
    return(
        <article className="inputs">
            <form className="inputForm">
                <label htmlFor="Cardholder">Cardholder Name</label>
                <input 
                    id="Cardholder" 
                    name="Cardholder" 
                    placeholder="e.g. Jane Appleseed" 
                    type="text"
                    onChange={props.handleChange}
                />
                

                <label htmlFor="card_number"> Card Number</label>
                <input
                    id="card_number"
                    type="number"
                    name="card_number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    onChange={props.handleChange}
                />
                <label>Exp. Date (MM/YY)</label>
                <div className="timeline">
                    <input 
                        id="month"
                        type="number"
                        name="month"
                        placeholder="MM"
                        onChange={props.handleChange}

                    />

                    <input
                        id="Year"
                        type="number"
                        name="Year"
                        placeholder="YY"
                        onChange={props.handleChange}
                    
                    />
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
                </div>
                <button className="confirm-btn" type="button">Confirm</button>
            </form>
            
        </article>
    )
}