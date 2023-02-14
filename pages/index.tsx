import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login_page.module.css'

// LoginModal.tsx
import  LoginModal  from "../component/LoginModal";

const Login: NextPage = () => {
  return (
    <div className={styles.Login_page}>
      <LoginModal></LoginModal>
    </div>
  )
}

export default Login
