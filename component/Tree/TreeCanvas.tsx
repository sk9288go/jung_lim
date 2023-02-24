import classNames from 'classnames';
import { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styles from "../Tree/TreeCanvas.module.css";
import TreeNode from "./TreeNode";

const TreeCanvas = () => {
const [treeNodes, setTreeNodes] = useState([{ index: 0, img_open: false }]);

const handleAddVariation = (index: number) => {
    setTreeNodes((prevTreeNodes) => {
    const newTreeNodes = [...prevTreeNodes];
    newTreeNodes.splice(index + 1, 0, { index: index + 1, img_open: false });
    return newTreeNodes;
    });
};

return (
    <div className={styles.TreeCanvas_wrap}>
    <ScrollContainer className="scroll-container">
        <div className={styles.TreeCanvas_box}>
        <ul className={classNames({[styles.tree_img_list]: true, [styles.close]: true})}>
            {treeNodes.map((treeNode, index) => (
            <TreeNode key={treeNode.index} img_open={treeNode.img_open} onAddVariation={() => handleAddVariation(index)}/>
            ))}
        </ul>
        </div>
    </ScrollContainer>
    </div>
);
};

export default TreeCanvas;
