import React, {useContext} from "react";
import {TableHeader} from "./TableHeader";
import {ItemRenderer} from "./ItemRenderer";
import {ItemContext, useStyles} from "../App";
import {createUseStyles} from "react-jss";
import {StyledButton} from "./StyledButton";


export interface ItemTableProps {

}


export function ItemTable(props: ItemTableProps) {

    const {state, dispatch} = useContext(ItemContext);
    const classes= useStyles();

    const addItem = () => {
        const newState = {...state};
        newState.items.push({label: "New", x: 50, y: 50});
        dispatch({type: "add", payload: newState});
    }
    return (
        <div className={classes.table}>
            <StyledButton onClick={addItem}>Add</StyledButton>
            <table>
                <TableHeader/>
                {state.items.map((item, index) =>
                    <ItemRenderer item={item} index={index}/>
                )}
            </table>
        </div>

    )
        ;
}