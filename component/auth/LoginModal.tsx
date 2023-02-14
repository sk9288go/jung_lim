import Link from 'next/link';

import styles from "../auth/LoginModal.module.css";

import Image from 'next/image'
import logo from '../../public/images/logo.png'

const LoginModal = () => (
	<div className={styles.LoginModal_wrap}>
		<div className={styles.h2_wrap}>
			<h2>Log in to JL-AI</h2>
			<p>정림 AI-이미지 생성 프로토타입에 로그인 해주세요</p>
		</div>
		<div className={styles.logo_wrap}>
			<Image src={logo} alt="" />
		</div>
		<div className={styles.input_wrap}>
			<input type="text" />
			<input type="password" name="" id="" />
		</div>
	</div>
);

export default LoginModal;