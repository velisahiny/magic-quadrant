import {Item} from "../common/Item";
import {useContext, useEffect} from "react";
import {ItemContext} from "../App";
import {brotliCompress} from "zlib";

export interface ItemRendererProps {
    item: Item;
    index: number;
}

export function ItemRenderer(props: ItemRendererProps) {

    const {state, dispatch} = useContext(ItemContext);

    const onDeleteItem = () => {
        const newState = {...state};
        newState.items.splice(props.index, 1);
        dispatch({type: "delete", payload: newState});
    }

    const onUpdate = (event: any, field: string) => {
        const newState = {...state};
        switch (field) {
            case "checkBox":
                newState.items[props.index].checked=event.target.checked;
                break;
            case "label":
                newState.items[props.index].label = event.target.value;
                break;
            case "x":
                const x = parseFloat(parseFloat(event.target.value).toFixed(2));
                newState.items[props.index].x = x < 100 ? (x > 0 ? x : 0) : 100;
                break;
            case "y":
                const y = parseFloat(parseFloat(event.target.value).toFixed(2));
                newState.items[props.index].y = y < 100 ? (y > 0 ? y : 0) : 100;
                break;
        }
        dispatch({type: "add", payload: newState});
    };
    return (
        <tr>
            <td>
                <input type="checkbox" checked={props.item.checked} onChange={(event=>onUpdate(event,"checkBox"))} />
            </td>
            <td>
                <input onChange={(event) => onUpdate(event, "label")} type="text" value={props.item.label}/>
            </td>
            <td>
                <input onChange={(event) => onUpdate(event, "x")} type="number" value={props.item.x}/>
            </td>
            <td>
                <input onChange={(event) => onUpdate(event, "y")} type="number" value={props.item.y}/>
            </td>
            <td>
                <button onClick={onDeleteItem}> Delete</button>
            </td>
        </tr>);

}