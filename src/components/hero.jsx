import styles from "./hero.module.css"
// import { Link } from 'react-router-dom'

const Hero = () => {
    return(
        <div className={styles.wrapdiv}>
            <div className="ctrlwidth">
                <div className={styles.main}>
                    <h1>Good Hair, Good Life</h1>
                    <p>YOUR LUXURY SUSTAINABLE HAIR PLUG</p>
                </div>
            </div>
        </div>
    )
}

export default Hero 