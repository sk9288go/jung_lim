import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Project_page.module.css'

// LoginModal
import Header from "../component/Header";

// 사용설명서 슬라이드 =================================
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel,Navigation } from "swiper";
// ======================================================

import ProjectBar from "../component/project/ProjectBar";
import ImageBar from "../component/BrowserBar/BrowserBar";
import TreeCanvas from "../component/Tree/TreeCanvas";
// import TreeCanvas2 from "../component/Tree/TreeCanvas2";

// 설명서 이미지들
import instruction1 from '../public/images/instruction1.jpg'
import instruction2 from '../public/images/instruction2.jpg'
import instruction3 from '../public/images/instruction3.jpg'
import instruction4 from '../public/images/instruction4.jpg'
import instruction5 from '../public/images/instruction5.jpg'








const Project: NextPage = () => {
	const [instruction_wrap_open, setInstruction_wrap_open] = useState(false);

	return (
		<div className={styles.Project_page}>
			<Header></Header>

			<div className={styles.bar_wrap}>
				<ProjectBar></ProjectBar>
				<ImageBar></ImageBar>
			</div>

			<TreeCanvas></TreeCanvas>

			<button className={styles.help_btn} onClick={()=>{setInstruction_wrap_open(true)}}>
				<i className='xi-help-o'></i>
			</button>

			<div className={classNames({[styles.instruction_wrap]: true, [styles.open]: instruction_wrap_open})}>
				<button className={styles.instruction_close_btn} onClick={()=>{setInstruction_wrap_open(false)}}>
					<i className='xi-close'></i>
				</button>

				<div className={styles.instruction_side_wrap}>
					<Swiper 
						navigation={true} 
						mousewheel={true}
						modules={[Mousewheel,Navigation]} 
						className={styles.instruction_slide_wrap}
					>
						<SwiperSlide><Image src={instruction1} alt="" /></SwiperSlide>
						<SwiperSlide><Image src={instruction2} alt="" /></SwiperSlide>
						<SwiperSlide><Image src={instruction3} alt="" /></SwiperSlide>
						<SwiperSlide><Image src={instruction4} alt="" /></SwiperSlide>
						<SwiperSlide><Image src={instruction5} alt="" /></SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default Project
