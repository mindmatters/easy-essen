import {Global} from "@/app/global";

export function TagAuswahl(props: {tag: number}) {
    return (<>
        <label htmlFor={`Tag${props.tag}`}>Vor {props.tag} Tagen: Essen</label>
        <select id={`Tag${props.tag}`}>
            <option value="">Essen auswählen</option>
            {Global.meineEssen.map(({name}) => (
                <option key={name}>{name}</option>
            ))}
        </select>
    </>)
}