import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>

      <Link href="blog/id" className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/12418428/pexels-photo-12418428.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>

  </div>
  )
}

export default Blog