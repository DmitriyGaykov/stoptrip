import {memo} from "react";
import {IImgTextButton} from "./img-text-button.interface.ts";
import styles from './img-text-button.module.scss'

export const ImgTextButton = memo(({ img, content, className, onClick, children, color, background, border, textWeight} : IImgTextButton) => {
    return (
        <button
            style={{ background, border: border || 'none' }}
            className={className + " " + styles.imgTextButton} onClick={onClick}>
            {
                img &&
                <img src={img} alt=""/>
            }
            {
                content ?
                    <span style={{ color, fontWeight: textWeight }}>{content}</span> :
                    children
            }
        </button>
    )
})