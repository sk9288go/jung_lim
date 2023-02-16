import React, { useState } from 'react';

import Link from 'next/link';

import styles from "../ImageBar/ImageBar.module.css";
import classNames from 'classnames';

import Image from 'next/image'

import { useRouter } from 'next/router'

const ImageBar = () => {
	const router = useRouter()

	const [bar_close, setBar_close] = useState(false)

	return(
		<div className={classNames({[styles.ImageBar_wrap]: true, [styles.close]: bar_close})}>
			<div className={styles.ImageBar_box}>
				<div className={styles.ImageBar_head}>
					<i className='xi-pen-o'></i>
					<p>Browser</p>
					<button onClick={()=>{setBar_close(true)}}><i className='xi-arrow-left'></i></button>
				</div>
				<div className={styles.content_wrap}>
					
				</div>
			</div>





			<div className={styles.close_bar}>
				<div className={styles.close_bar_head}>
					<i className='xi-pen-o'></i>
				</div>
				<div className={styles.close_bar_body}>
					<p>Browser</p>
					<button onClick={()=>{setBar_close(false)}}><i className='xi-angle-right'></i></button>
				</div>
			</div>
		</div>
	)
}

export default ImageBar;