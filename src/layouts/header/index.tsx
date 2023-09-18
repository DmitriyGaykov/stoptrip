import styles from './header.module.scss'
import logo from './../../assets/images/logo.svg'
import plus from './../../assets/images/plus.svg'
import {ImgTextButton} from "../../shared/buttons";
import {useCallback} from "react";
import {HeaderLansAndLog} from "../../feature";

export const Header = () => {
    const onAddAdvert = useCallback(() => {

    }, [])

    return (
        <header className={styles.siteHeader + ' g-padding'}>
            <div className={styles.headerContent}>
                <img src={logo} className="siteLogo" alt=""/>
                <ImgTextButton
                    img={plus}
                    content="Разместить объявление"
                    color="white"
                    background="#1F6FDE"
                    onClick={onAddAdvert}/>
                <HeaderLansAndLog />
            </div>
        </header>
    )
}
