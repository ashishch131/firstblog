"use client"
import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import useSWR from 'swr'


const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [error, seterror] = useState(false);
//   const [isLoading, setisLoading] = useState(false)

// useEffect(() => {
// const getData = async () => {
// setisLoading(true);
// const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });

// if (!res.ok) {
//  seterror(true);
//   };
//   const data = await res.json();
//  setData(data) ;
//  isLoading(false);
// };
// getData();
// }, []);
const fetcher = (...args) => fetch(...args).then(res => res.json());

 

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 

  console.log(data)
  return (
    <div className={styles.container}>Dashboard
    {data.map((item)=>(
    <p key={item.id}>{item.title}</p>
    ))}
    </div>
  )
}

export default Dashboard