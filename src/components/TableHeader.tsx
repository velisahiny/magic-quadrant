import React from "react";
import {useStyles} from "../App";




export function TableHeader() {
    const classes = useStyles();
    return (<>
        <tr className={classes.tableHeader}>
            <th>
                Checkbox
            </th>
            <th>
                Label
            </th>
            <th>
                Vision
            </th>
            <th>
                Ability
            </th>
            <th>
                Delete
            </th>
        </tr>
    </>)
}