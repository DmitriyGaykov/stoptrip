import {ReactComponentElement} from "react";

export  interface IImgTextButton {
    img?: string,
    content?: string,
    className?:string,
    onClick?: () => void,
    children?: ReactComponentElement<any>,
    color?: string,
    background?: string,
    border?: string,
    textWeight?: string
}