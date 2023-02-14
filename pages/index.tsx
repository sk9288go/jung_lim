import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login_page.module.css'

// LoginModal
import LoginModal from "../component/auth/LoginModal";
import SignupModal from "../component/auth/SignupModal"
import AuthWarningMessageModal from "../component/auth/AuthWarningMessageModal"
import ProfileModal from "../component/auth/ProfileModal"
import LogoutModal from "../component/auth/LogoutModal"


const Login: NextPage = () => {
  return (
    <div className={styles.Login_page}>
      <LoginModal></LoginModal>
      <SignupModal></SignupModal>
      <AuthWarningMessageModal></AuthWarningMessageModal>
      <ProfileModal></ProfileModal>
      <LogoutModal></LogoutModal>
    </div>
  )
}

export default Login
