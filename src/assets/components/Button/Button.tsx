import styles from './Button.module.css';

const Button = () => {
  return (
    <button className={`${styles.btn} ${styles.btnPrimary}`}>Button</button>
  )
}

export default Button