import React, { useState } from 'react';

import Link from 'next/link';

import styles from "../component/Header.module.css";
import classNames from 'classnames';

import Image from 'next/image'
import logo from '../public/images/Junglim Logo.png'
import Person_Logo from '../public/images/Person Logo.png'
import UserMenuModal from "../component/UserMenuModal";

const Header = () => {
	const [UserMenu, setUserMenu] = useState(false);


	return(
		<div className={styles.Header_wrap}>
			<a href='/' className={styles.lofo_wrap}>
				<Image src={logo} alt="" />
			</a>

			<div className={classNames(styles.version_wrap)}>
				<h1>AI-IMAGE GENERATOR V.1</h1>
				<div className={styles.Explanation_box}>
					<p>
						JL_AI 에 오신 것을 환영합니다. <br />
						JL_AI는 정림건축의 <span>이미지 데이터</span>를 토대로 <br /> 
						<span>Diffusion algorithm을 활용해 건축 AI 이미지</span>를
						생성하는 웹 서비스입니다. <br />
						<br />
						이곳에서 AI로 생성되는 건축 레퍼런스 이미지, <br />
						디자인 아이디어를 자유롭게 탐구해보세요.
					</p>
				</div>
			</div>

			<div className={classNames({[styles.UserMenu_wrap]: true, [styles.open]: UserMenu})}>
				<button className={styles.user_name_wrap} onClick={()=>{setUserMenu(!UserMenu)}}>
					<div className={styles.user_icon}>
						{/* <Image src={Person_Logo} alt="" /> */}
						<i className='xi-user'></i>
					</div>
					<p className={styles.user_name}>
						KIM JUNGLIM
					</p>
				</button>
				<div className={styles.UserMenuModal_wrap}>
					<UserMenuModal></UserMenuModal>
				</div>
			</div>
		</div>
	)
}

export default Header;