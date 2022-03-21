import React from "react";
import {useStyles} from "../App";


export function StyledButton(props: { onClick: () => void, children: React.ReactNode }) {
    const classes = useStyles();

    return (<button className={classes.button} onClick={props.onClick}>{props.children}</button>)
}