import React, { useState } from 'react';

import Link from 'next/link';

import styles from "../Tree/TreeNode.module.css";
import classNames from 'classnames';

import Image from 'next/image'

// 예시사진
import Rectangle from '../../public/images/Rectangle.png'



const TreeNode = () => {

	const [img_box_close, setTmg_box_close] = useState(false)

	const [big_img , setBig_img] = useState(false);

	return(
		<div className={styles.TreeNode_wrap}>
			<div className={styles.TreeNode_box}>

				<div className={styles.TreeNode_btn_wrap}>
					<span className={styles.num}>1</span>
					<div className={styles.btn_wrap}>
						<button onClick={()=>{setTmg_box_close(!img_box_close)}}><i className='xi-angle-left'></i></button>
						<button onClick={()=>{setBig_img(true)}}><i className='xi-zoom-in'></i></button>
						<button><i className='xi-trash-o'></i></button>
					</div>
				</div>

				<div className={classNames({[styles.img_box]: true, [styles.close]: img_box_close})}>
					<div className={styles.img_wrap}>
						<Image src={Rectangle} alt="" />
					</div>

					<button className={styles.Add_Variation_btn}>Add Variation</button>
				</div>
				
			</div>

			<button className={styles.Plus_btn}>
				<i className='xi-plus'></i>
			</button>

			<div 
				className={classNames({[styles.big_img_wrap]: true, [styles.open]: big_img})}
				onClick={()=>{setBig_img(false)}}
			>
				<Image src={Rectangle} alt="" />
			</div>
		</div>
	)
}

export default TreeNode;