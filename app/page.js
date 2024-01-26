'use client'

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DateComponent from './[ components ]/date';
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEnter = () => {
    if (name.length === 0) {
      setError("Por favor insira seu nome");
    } else {
      localStorage.setItem('name', name);
      router.push('/todo');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEnter();
    }
  };

  return (
    <div>
      <Head>
        <link rel="icon" href='/favicon.ico'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </Head>

      <div className={styles.body}>
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
          <h4>Olá, seja bem vindo ao FocalPoint</h4>
          <DateComponent/>
        </header>
        <div className={styles.border}></div>
        <main className={styles.main}>
          <label><h2>Qual o seu nome?</h2></label>
          <input
            value={name}
            onChange={handleName}
            onKeyDown={handleKeyPress}
            placeholder="Seu nome"
            type={'text'}
          />
          <button onClick={handleEnter}>Entrar no FocalPoint</button>
          <p className={styles.error}>{error}</p>
        </main>
      </div>
    </div>
  );
}
