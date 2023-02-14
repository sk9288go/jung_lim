import Link from 'next/link';

import styles from "../auth/SignupModal.module.css";

import Image from 'next/image'

const SignupModal = () => (
	<div className={styles.SignupModal_wrap}>
		<div className={styles.h2_wrap}>
			<h2>Sign up</h2>
			<p>회원가입</p>
		</div>

		<div className={styles.input_list}>
			<div className={styles.input_wrap}>
				<p>이름</p>
				<div className={styles.input_box}>
					<input type="text" placeholder='이메일' />
					@
					<input type="text" placeholder='Junglim.com' />
				</div>
				
			</div>
			<div className={styles.input_wrap}>
				<p>비밀번호</p>
				<input type="password" placeholder='비밀번호' />
			</div>
			<div className={styles.input_wrap}>
				<p>비밀번호 확인</p>
				<input type="password" placeholder='비밀번호 확인' />
			</div>
			<div className={styles.input_wrap}>
				<p>직급</p>
				<input type="text" placeholder='직급' />
			</div>
			<div className={styles.input_wrap}>
				<p>부서</p>
				<input type="text" placeholder='부서' />
			</div>
		</div>

		<div className={styles.btn_wrap}>
			<button className={styles.White_btn}>취소</button>
			<button className={styles.Green_btn}>확인</button>
		</div>
	</div>
);

export default SignupModal;