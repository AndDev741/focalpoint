import Image from "next/image";
import DateComponent from './date';
import styles from "./header.module.css";

export default function Header({ name }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.icon}>
          <Image
            alt='Logo focalpoint' 
            src="/focalpointIcon.png"
            width={40}
            height={40}
          />
          <div className={styles.logotype}>
            <Image
              alt='Frase da logo focalpoint'
              src="/Logotype.svg"
              width={135}
              height={20}
            />
          </div>
        </div>
        <h4>Bem-vindo de volta, {name}</h4>
        <DateComponent/>
      </header>
      <div className={styles.border}></div>
    </div>
  );
}
