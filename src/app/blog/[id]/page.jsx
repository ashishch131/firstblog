import React from 'react'
import styles from './blogpage.module.css'
import Image from 'next/image'

const BlogPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>
          desc
        </p>
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/19047494/pexels-photo-19047494/free-photo-of-summer-tanager-female.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>username</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/15829323/pexels-photo-15829323/free-photo-of-red-torri-gate-in-japan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
       content
      </p>
    </div>
  </div>
  )
}

export default BlogPage