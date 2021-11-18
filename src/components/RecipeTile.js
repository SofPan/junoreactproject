import {useState} from 'react';
import useModal from "../hooks/useModal";
import RecipeCards from "./RecipeCards";
import styles from '../styles/TileStyles.module.css';

function RecipeTile ({recipe}) {
    const [cardImage, setCardImage] = useState('')
    const [CardModal, handleCardModal] = useModal(<RecipeCards cardInfo={recipe} cardPic={cardImage}/>);
    
    const APIKey = '78e651819bf74b01a55f974acbf5d605';
    const recipeID = recipe.id;

    const getRecipeCard = async() => {
        try {
            const response = await fetch('https://api.spoonacular.com/recipes/'+recipeID+'/card?apiKey='+APIKey);
            const recipeCardData = await response.json();
            console.log(recipeCardData);
            setCardImage(recipeCardData.url)
        } catch(error) {
            console.log('there was an error', error);
        }
        }

    const handleClick = (e) => {
        handleCardModal();
        getRecipeCard();
    }

    return(
        <div className={styles.recipeTile} onClick={handleClick}>
            <img className={styles.tileImage} src={recipe.image} alt="food"/>
            <p className={styles.tileName} key={recipe.id}>
                {recipe.title}
            </p>
            <CardModal />
        </div>
    )
}

export default RecipeTile;