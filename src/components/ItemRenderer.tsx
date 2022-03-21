import {Item} from "../common/Item";
import {useContext, useEffect} from "react";
import {ItemContext} from "../App";

export interface ItemRendererProps {
    item: Item;
    index: number;
}

export function ItemRenderer(props: ItemRendererProps) {

    const {state, dispatch} = useContext(ItemContext);

    const onDeleteItem = () => {
        const newState = {...state};
        newState.items.splice(props.index,1);
        dispatch({type:"delete",payload :newState});
    }

    const onUpdate = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const newState = {...state};
        switch (field) {
            case "label":
                newState.items[props.index].label = event.target.value;
                break;
            case "x":
                newState.items[props.index].x = parseFloat(event.target.value);
                break;
            case "y":
                newState.items[props.index].y = parseFloat(event.target.value);
                break;
        }
        dispatch({type: "add", payload: newState});
    };
    return (
        <tr>
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