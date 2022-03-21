import React, {useState, useEffect} from "react";

export default function useDraggable(id: string) {
    const el=document.getElementById(id);
        if(el){

            el.onmousedown = (event: any) => {
                el.style.position = 'relative';
                el.style.zIndex = "1000";
                const container=document.getElementById("container");
                container?.append(el);

                const moveAt = (pageX: number, pageY: number) => {
                    el.style.left = pageX - el.offsetWidth / 2 + 'px';
                    el.style.top = pageY - el.offsetHeight / 2 + 'px';
                }
                moveAt(event.pageX, event.pageY);
                const onMouseMove = (event: any) => {
                    moveAt(event.pageX, event.pageY);
                }
                document.addEventListener('mousemove', onMouseMove);
                el.onmouseup = () => {
                    document.removeEventListener('mousemove', onMouseMove);
                    el.onmouseup = null;
                }

            }
            el.ondragstart=()=>{
                return false;
            }
        }


}