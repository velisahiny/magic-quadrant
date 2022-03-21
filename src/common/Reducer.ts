import {Item} from "./Item";

export interface Action {
    type: string;
    payload: any;
}

export interface State {
    items: Item[];
}


export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "update":
            localStorage.setItem("itemMap", JSON.stringify(action.payload.items));
            return action.payload;
        case "add":
            localStorage.setItem("itemMap", JSON.stringify(action.payload.items));
            return action.payload;
        case "delete":
            localStorage.setItem("itemMap", JSON.stringify(action.payload.items));
            return action.payload;
        default:
            return state;
    }
}
export const initialState: State = {
    items: JSON.parse(localStorage.getItem("itemMap") ?? "[]")
}