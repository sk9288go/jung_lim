import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Project_page.module.css'

// LoginModal
import Header from "../component/Header";

import ProjectBar from "../component/project/ProjectBar";

const Project: NextPage = () => {
	return (
		<div className={styles.Project_page}>
			<Header></Header>

			<div className={styles.bar_wrap}>
				<ProjectBar></ProjectBar>
			</div>
		</div>
	)
}

export default Project
