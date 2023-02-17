import React, { useState } from 'react';

import Link from 'next/link';

import styles from "../Tree/TreeCanvas.module.css";
import classNames from 'classnames';

import Image from 'next/image'

import { useRouter } from 'next/router'

import ScrollContainer from 'react-indiana-drag-scroll'

const TreeCanvas = () => {

	return(
		<div className={styles.TreeCanvas_wrap}>
			<ScrollContainer className="scroll-container">
				<div className={styles.TreeCanvas_box}>
					<ul className={classNames({[styles.tree_img_list]: true, [styles.close]: true})}>
						<li>
							<div className={styles.tree_box}>asad</div>
							<ul  className={styles.tree_img_list}>
								<li>
									<div className={styles.tree_box}>asad</div>
								</li>
								<li>
									<div className={styles.tree_box}>asad</div>
								</li>
							</ul>
						</li>
						<li>
							<div className={styles.tree_box}>asad</div>
							<ul  className={styles.tree_img_list}>
								<li>
									<div className={styles.tree_box}>asad</div>
									<ul  className={styles.tree_img_list}>
										<li>
											<div className={styles.tree_box}>asad</div>
										</li>
										<li>
											<div className={styles.tree_box}>asad</div>
											<ul  className={styles.tree_img_list}>
												<li>
													<div className={styles.tree_box}>asad</div>
												</li>
											</ul>
										</li>
										<li>
											<div className={styles.tree_box}>asad</div>
											<ul  className={styles.tree_img_list}>
												<li>
													<div className={styles.tree_box}>asad</div>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<div className={styles.tree_box}>asad</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</ScrollContainer>
		</div>
	)
}

export default TreeCanvas;