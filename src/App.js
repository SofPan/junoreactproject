import {useState} from 'react';
import RecipeTile from './components/RecipeTile';
import Footer from './components/Footer.js';
import styles from './styles/AppStyles.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const APIKey = '78e651819bf74b01a55f974acbf5d605'

  const getRecipeInfo = async() => {
    try {
      const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey='+APIKey+'&query='+query+'&number=9');
      const recipeData = await response.json();
      console.log(recipeData);
      if (recipeData.results.length !== 0){
      setRecipes(recipeData.results);
    } else {
      alert("Hmm, no recipes came up. Please try again.");
    }
    } catch(error) {
        console.log('there was an error', error);
    }
    }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  }

  return (
    <div className="app">
      <div className={styles.head}>
        <h1>Save Me! I'm Starving!</h1>
        <p>Search recipes below and I'll set you up with tasty results!</p>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input className={styles.searchInput} type="text" placeholder="What are you craving?" value={query} onChange={(e) => {setQuery(e.target.value)}} />
          <button className={styles.searchSubmit} type="submit">Feed Me!</button>
        </form>
      </div>
      <div className={styles.instructions}>
        <h3>Click on the tiles below to view recipes.</h3>
      </div>
      <div className={styles.recipes}>
        {recipes !==[] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
      <Footer />
    </div>
  );
}



export default App;
