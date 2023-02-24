import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from "../Tree/TreeNode.module.css";

interface TreeNodeProps {
	index: number;
	img_open: boolean;
	onToggle: () => void;
    onAddVariation: (index:number) => void;
}

const TreeNode = ({ index, img_open, onAddVariation }: TreeNodeProps) => {
	const [img_box_close, setImg_box_close] = useState(false);
	const [big_img , setBig_img] = useState(false);
	const [TreeNode_Choice, setTreeNode_Choice] = useState(false);
	const [randomImage, setRandomImage] = useState('');

	useEffect(() => {
		fetch('https://api.unsplash.com/photos/random?client_id=-yCr4X6qJmASLChUJ1SJ0jCRaKLwlbTY31EL1B8eEv0&query=architecture&w=512&h=512')
			.then(response => response.json())
			.then(data => setRandomImage(data.urls.regular));
	}, []);

	return (
		<div className={styles.TreeNode_wrap}>
			<div className={classNames({[styles.TreeNode_box]: true, [styles.Choice]: TreeNode_Choice, [styles.close]: img_box_close})}>
				<div className={styles.TreeNode_btn_wrap}>
					<span className={styles.num}>{index + 1}</span>
					<div className={styles.btn_wrap}>
						<button onClick={() => setImg_box_close(!img_box_close)}><i className='xi-angle-left'></i></button>
						<button onClick={() => setBig_img(true)}><i className='xi-zoom-in'></i></button>
						<button><i className='xi-trash-o'></i></button>
					</div>
				</div>

				<div className={classNames({[styles.img_box]: true, [styles.close]: img_box_close})}>
					<div className={styles.img_wrap} onClick={() => setTreeNode_Choice(!TreeNode_Choice)}>
						{randomImage ? <Image src={randomImage} alt="" width="500" height="500" /> : null}
					</div>

					<button className={styles.Add_Variation_btn} onClick={() => onAddVariation(index)}>Add Variation</button>
				</div>

			</div>

			<button className={styles.Plus_btn}>
				<i className='xi-plus'></i>
			</button>

			<div
				className={classNames({[styles.big_img_wrap]: true, [styles.open]: big_img})}
			>
				<div className={styles.img_wrap}>
					<div className={styles.btn_wrap}>
						<button><i className='xi-download' ></i></button>
						<button onClick={() => setBig_img(false)}><i className='xi-close'></i></button>
					</div>
					{randomImage ? <Image src={randomImage} alt="" layout="fill" objectFit="contain"/> : null}
				</div>
			</div>
		</div>
	)
}

export default TreeNode;