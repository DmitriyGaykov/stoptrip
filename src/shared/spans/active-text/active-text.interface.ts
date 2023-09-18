export interface IActiveText {
    text?: string,
    color?: string,
    activeColor?: string,
    active?: boolean,
    weight?: string,
    onActiveChange?: (active: boolean) => void
}