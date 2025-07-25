import front from './images/bg-card-front.png'
import back from './images/bg-card-back.png'
import cardLogo from './images/card-logo.svg'
export function Card(props){
    return(
        <article className='card'>
            <div className='front'>
                <img className='card_front' src={front}/>
                <div className='cardLogo'><img src={cardLogo}/></div>
                <div className='card_number'><p>{props.info.card_number}</p></div>
                <div className="Cardholder"><p>{props.info.Cardholder}</p></div>
                <div className='month_Year'><p>{props.info.month}/{props.info.Year}</p></div>
                
            
            </div>
            <div className='back'>
                <img className='card-back' src={back}/>
                <p className='card-info-cvc'>{props.info.cvc}</p>
            </div>
            
           
            
        </article>
    )
}