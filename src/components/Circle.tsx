import React, {useContext, useEffect, useRef, useState} from "react";
import {ItemContext, useStyles} from "../App";
import useDraggable from "./useDraggable";
import {Item} from "../common/Item";

export interface CircleProps {
    item: Item;
    index: number;
}

export function Circle(props: CircleProps) {
    const classes = useStyles();
    const circleRef = useRef<HTMLDivElement>(null);
    const {state, dispatch} = useContext(ItemContext);
    const [dragging, setDragging] = useState<boolean>(false);
    const update = (x: number, y: number) => {
        const newState = {...state};
        newState.items[props.index].x = parseFloat((x / 4).toFixed(2));
        newState.items[props.index].y = parseFloat((100 - y / 4).toFixed(2));
        dispatch({type: "add", payload: newState});
    };

    useEffect(() => {

        const el = document.getElementById("elem" + props.index);
        if (el) {
            el.onmousedown = (event: any) => {
                setDragging(true);
                el.style.zIndex = "1000";
                const container = document.getElementById("container");
                container?.append(el);
                const moveAt = (pageX: number, pageY: number) => {

                    const left = pageX - el.offsetWidth / 2;
                    const top = pageY - el.offsetHeight / 2;
                    const restrictedLeft = (left < 400 ? (left > 0 ? left : 0) : 400);
                    const restrictedTop = (top < 400 ? (top > 0 ? top : 0) : 400);
                    el.style.left = restrictedLeft + 'px';
                    el.style.top = restrictedTop + 'px';
                    update(restrictedLeft, restrictedTop);
                    if (restrictedTop >= 400 || restrictedLeft >= 400 || restrictedTop <= 0 || restrictedLeft <= 0) {
                        document.removeEventListener('mousemove', onMouseMove);
                    }
                }
                moveAt(event.pageX - (container ? container.offsetLeft : 0), event.pageY - (container ? container.offsetTop : 0));
                const onMouseMove = (event: any) => {
                    moveAt(event.pageX - (container ? container.offsetLeft : 0), event.pageY - (container ? container.offsetTop : 0));
                }
                document.addEventListener('mousemove', onMouseMove);
                el.onmouseup = () => {
                    setDragging(false);
                    document.removeEventListener('mousemove', onMouseMove);
                    el.onmouseup = null;
                }
            }
            el.ondragstart = () => {
                return false;
            }
        }
    }, []);

    useEffect(() => {
        const el = document.getElementById("elem" + props.index);
        if (el) {
            el.style.left = props.item.x * 4 + 'px';
            el.style.top = (100 - props.item.y) * 4 + 'px';
        }
    }, [props.item.x, props.item.y])

    return (<>
        {dragging && <>
            <div style={{marginLeft:4*(props.item.x),height:(props.item.y) * 4, bottom:0 }} className={classes.dottedVerticalLine}></div>
            <div style={{width:4*(props.item.x), top: (100 - props.item.y) * 4}} className={classes.dottedHorizontalLine}></div>
        </>}
        <div id={"elem" + props.index}
             className={classes.circle}
             ref={circleRef}
             style={{opacity: props.item.checked ? 0.5 : 1}}
        ><span className={classes.label}>{props.item.label}</span>
        </div>
    </>);

}