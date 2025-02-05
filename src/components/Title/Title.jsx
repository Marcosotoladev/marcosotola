import React from 'react'
import styles from './Title.module.css'

const Title = () => {
  return (
    <>
       <h1 className={styles.title}>
            I do <div className={styles.span}>web</div> development{" "}
          </h1>
    </>
  )
}

export default Title;
