import styles from './Card.module.css'

function Card(){
    return (
        <>
        <div className = {styles.cardContainer}>
            <img className = {styles.cardFront} src = "./src/assets/images/bg-card-front.png"/>
            <div className = {styles.cardText}> 
                <p className = {styles.cardImageNumber}>0000 0000 0000 0000</p>
                <p className = {styles.cardImageName}>JANE APPLESEED</p>
                <div className = {styles.cardImageDate}>
                    <p className = {styles.cardImageMonth}>00/</p>
                    <p className = {styles.cardImageYear}>00</p>
                </div>
                <span className = {styles.bigCircle}></span>
                <span className = {styles.smallCircle}></span>
                <img className= {styles.cardImageCompany} src="./src/assets/images/visa-logo.png"/>
            </div>
            <img className = {styles.cardBack} src = "./src/assets/images/bg-card-back.png"/>
            <p className = {styles.cardImageCvc}>000</p>
        </div>
        </>
        )
}

export default Card;