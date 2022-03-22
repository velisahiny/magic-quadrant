import React, {useContext} from "react";
import {ItemContext, useStyles} from "../App";
import {Circle} from "./Circle";
import {Colors} from "../common/Colors";


export function Chart() {
    const classes = useStyles();
    const {state, dispatch} = useContext(ItemContext);
    return (<div style={{float: "left", display: "inline-block"}}>
            <p style={{
                fontWeight:600,
                marginTop: 270,
                position: "absolute",
                zIndex: 1000,
                display: "inline-block",
                transform: "rotate(-90deg) translateX(-100%)",
                transformOrigin: "top left"
            }}> {"Ability to execute ->"} </p>
            <div id="container" className={classes.chart}>
                {state.items.map((item, index) => <Circle item={item} index={index}/>
                )}
                <div className={classes.verticalLine}></div>
                <div className={classes.horizontalLine}></div>
                <div>
                    <p className={classes.labelOfArea} style={{marginLeft:20}}> Challengers </p>
                    <p className={classes.labelOfArea} style={{float: "right", marginRight:20}}> Leaders </p>
                </div>
                <div style={{ marginTop:300}}>
                    <p className={classes.labelOfArea} style={{marginLeft:20}} > Niche Players</p>
                    <p className={classes.labelOfArea} style={{float: "right", marginRight:20}}> Visionaries</p>
                </div>
            </div>

            <p style={{marginLeft: 20, fontWeight:600}}>{"Completeness of vision ->"}</p></div>
    );

}
