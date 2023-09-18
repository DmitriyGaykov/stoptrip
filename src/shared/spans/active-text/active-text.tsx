import {IActiveText} from "./active-text.interface.ts";
import {useEffect, useState} from "react";

export const ActiveText = ({ text, active, activeColor, color, weight, onActiveChange } : IActiveText = {active: false}) => {
    const [_active, setActive] = useState(active)
    const onClick = () => {
        setActive(true)
    }

    useEffect(() => {
        onActiveChange(_active)
    }, [_active]);

    useEffect(() => {
        setActive(active)
    }, [active]);

    return (
        <span style={{ color: _active ? activeColor : color, fontWeight: weight }} onClick={onClick}>
            { text }
        </span>
    )
}