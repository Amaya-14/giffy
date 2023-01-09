import React from 'react'
import { Link } from 'wouter'
import Gif from '../Gif'
import styles from './styles.module.css'

export default function ListOfGifs({ gifs, listTerm, listTitle }) {
  listTitle = listTitle.replaceAll('%20', ' ')
  return (
    <section className={styles.list}>
      <h2 className={styles.list__title}>{listTitle}</h2>
      <div className={styles.list__terms}>
        <ul>
          {listTerm?.map((term) => (
            <Link
              to={`/search/${term}`}
              key={term}>
              <li>{term}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.list__gifs}>
        {gifs.map((gif) => (
          <Gif
            key={gif.id}
            gif={gif}
          />
        ))}
      </div>
    </section>
  )
}
