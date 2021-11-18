import styles from '../styles/FooterStyles.module.css'

function Footer () {
    return(
        <footer>
            <div className={styles.footerText}>
                <p>Created at <a href="https://junocollege.com/" target="_blank" rel="noreferrer" alt="Juno College">Juno College of Technology</a></p>
                <p>Powered by <a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer" alt="Spoonacular API">Spoonacular API</a></p>
            </div>
        </footer>
    )
}

export default Footer;