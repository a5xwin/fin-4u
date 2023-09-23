
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios'
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  const apiKey = 'a6517820628e4ad79d2cfa9462b7c64e';
  const type = 'finance';
  const date = '2023-09-22';
  const sortBy = 'publishedAt';

  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}&language=en`;

  const grabNews = () => {
    axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.error('An error occurred:', err);
      });
  }

  return (
    <>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <main className={styles.main}>
        <button onClick={grabNews}>Show Latest News</button>

        {data && data.articles.map((d, index) => (
          <div key={index}>
            <div className={styles.author}>{d.author}</div>
            <div className={styles.title}>{d.title}</div>
          </div>
        ))}
      </main>
    </>
  )
}