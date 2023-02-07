import React from 'react'
import { Button } from '../'
import styles from './Heading.module.scss';
export default function Heading() {
  return (
    <div className={styles.main}>
      <div className={styles.heroContainer}>
        <h1 className={styles.miamiVice} data-text="DAO House">DAO House</h1>
        <h2 className={styles.subtext} data-text="Welcome to the collective!">Welcome to the collective!</h2>
      </div>
      <div className={styles.buttonContainer}>
        <Button name='Join Now 🌴' onClick={() => console.log('hi')}/>
      </div>
    </div>
  )
}