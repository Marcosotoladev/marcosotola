import React from 'react'
import Styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div>
            <div className={Styles.div}>
                <p id={Styles.h2}>Loading....<span id="lol"></span></p>
            </div>
        </div>
    )
}

export default Loader