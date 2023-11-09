import React from 'react'
import styles from './category.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({params}) => {

  return (
    <div className={styles.container}>
    <h1 className={styles.catTitle}>{params.category}</h1>

        <div className={styles.item} >
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/18602984/pexels-photo-18602984/free-photo-of-arrowtown-old-house-point.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </div>

  </div>
  )
}

export default Category