import styles from './Card.module.css'
import FrontCard from '../assets/images/bg-card-front.png'
import BackCard from '../assets/images/bg-card-back.png'
import Visa from '../assets/images/visa-logo.png'
import Amex from '../assets/images/amex-logo.png'
import { useCardContext } from '../context/CardContext'

function Card(props){

    const {items} = useCardContext()

    return (
        <>
        <div class = {styles.cardContainer}>
            <img class = {styles.cardFront} src = {FrontCard}/>
            <div class = {styles.cardText}> 
                <p class = {styles.cardImageNumber}>{props.infomation ? props.infomation : "0000 0000 0000 0000"}</p>
                <p class = {styles.cardImageName}>{ items ? items :"Jane Appleseed"}</p>
                <div class = {styles.cardImageDate}>
                    <p class = {styles.cardImageMonth}>00/</p>
                    <p class = {styles.cardImageYear}>00</p>
                </div>
                <span class = {styles.bigCircle}></span>
                <span class = {styles.smallCircle}></span>
                <img class= {styles.cardImageCompany} src={Visa}/>
            </div>
            <img class = {styles.cardBack} src = {BackCard}/>
            <p class = {styles.cardImageCvc}>000</p>
        </div>
        </>
        )
}

export default Card;