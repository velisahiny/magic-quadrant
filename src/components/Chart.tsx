import React, {useContext} from "react";
import {ItemContext, useStyles} from "../App";
import {Circle} from "./Circle";
import {ItemRenderer} from "./ItemRenderer";



export function Chart() {
    const classes = useStyles();
    const {state, dispatch} = useContext(ItemContext);
    return (<div id="container" className={classes.chart}>
        {state.items.map((item, index) =>
            <Circle item={item} index={index}/>
        )}

    </div>);
}


