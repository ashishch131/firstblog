"use client"
import React from 'react'
import styles from './login.module.css'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if(session.status === "loading"){
    return <p>Loading..</p>
  }
  if(session.status === "authenticated"){
   router?.push("/dashboard");
  }
  console.log(session);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form  className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
     </form>

      <button className={styles.button + " " + styles.google} onClick={()=> signIn("google")}>
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
 
    </div>
  )
}

export default Login