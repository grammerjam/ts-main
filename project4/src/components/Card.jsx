import styles from './Card.module.css'

function Card(){
    return (
        <>
        <div className = {styles.cardContainer}>
            <img className = {styles.cardFront} src = "./src/assets/images/bg-card-front.png"/>
            <div className = {styles.cardText}> 
                <p>0000 0000 0000 0000</p>
                <p>JANE APPLESEED</p>
                <p>00/</p>
                <p>00</p>
                <span></span>
                <span></span>
                <img src=""/>
            </div>
            <img className = {styles.cardBack} src = "./src/assets/images/bg-card-back.png"/>
        </div>
        </>
        )
}

export default Card;