import Head from 'next/head'
import styles from '../styles/Home.module.css';
import FibonacciNumberGenerator from './FibonacciNumberGenerator';

const MathTools = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Math Tools</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>

      </header>
      <main>
        <h1>If you say I am fibanocci's <strong >dad</strong> </h1>
        <h2>Fibonacci Number Generator</h2>
        <FibonacciNumberGenerator />
      </main>
      
      <footer>
       
      </footer>
    </div>
  )
}

export default MathTools
