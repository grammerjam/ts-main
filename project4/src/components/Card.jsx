import styles from './Card.module.css'
import FrontCard from '../assets/images/bg-card-front.png'
import BackCard from '../assets/images/bg-card-back.png'
import Visa from '../assets/images/visa-logo.png'
import Amex from '../assets/images/amex-logo.png'
import { useCardContext } from '../context/CardContext'
import { cardCvc, cardMonth, cardName, cardNumber, cardYear } from './Form'

function Card(props){

    const {items} = useCardContext()

    return (
        <>
        <div class = {styles.cardContainer}>
            <img class = {styles.cardFront} src = {FrontCard}/>
            <div class = {styles.cardText}> 
                <p class = {styles.cardImageNumber}>{cardNumber}</p>
                <p class = {styles.cardImageName}>{cardName}</p>
                <div class = {styles.cardImageDate}>
                    <p class = {styles.cardImageMonth}>{cardMonth}/</p>
                    <p class = {styles.cardImageYear}>{cardYear}</p>
                </div>
                <span class = {styles.bigCircle}></span>
                <span class = {styles.smallCircle}></span>
                <img class= {styles.cardImageCompany} src={Visa}/>
            </div>
            <img class = {styles.cardBack} src = {BackCard}/>
            <p class = {styles.cardImageCvc}>{cardCvc}</p>
        </div>
        </>
        )
}

export default Card;