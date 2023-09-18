import {ActiveText} from "../../shared/spans";
import styles from './header-lans-and-log.module.scss'
import {ImgTextButton} from "../../shared/buttons";
import {useState} from "react";

export const HeaderLansAndLog = () => {
    type Lan = 'RU' | 'EN'
    const [lan, setLan] = useState<Lan>('RU')

    const getSetterForLan = (lan : Lan) => (active : boolean) => active && setLan(lan);

    return (
        <div className={styles.wrapper}>
            <div className={styles.lans}>
                <ActiveText
                    text="RU"
                    color="#8F8F8F"
                    activeColor="#1F6FDE"
                    weight="700"
                    active={lan === 'RU'}
                    onActiveChange={getSetterForLan('RU')}/>
                <ActiveText
                    text="EN"
                    color="#8F8F8F"
                    activeColor="#1F6FDE"
                    weight="700"
                    active={lan === 'EN'}
                    onActiveChange={getSetterForLan('EN')}/>
            </div>
            <ImgTextButton content="Вход/Регистрация" color="#1F6FDE" textWeight="700" border="2px solid #1F6FDE" />
        </div>
    )
}