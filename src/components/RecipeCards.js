import styles from '../styles/CardStyles.module.css';

function RecipeCards(props) {
    return(
        <img className={styles.cardImage} src={props.cardPic} alt={props.cardInfo.title}/>
    )
}

export default RecipeCards;