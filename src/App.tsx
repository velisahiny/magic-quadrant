import React, {useReducer} from 'react';
import {ItemTable} from "./components/ItemTable";
import {DummyItems} from "./common/DummyItems";
import {Action, initialState, reducer} from "./common/Reducer";
import {createUseStyles} from "react-jss";
import {Colors} from "./common/Colors";
import {hover} from "@testing-library/user-event/dist/hover";
import {Chart} from "./components/Chart";

export const ItemContext = React.createContext({
    state: initialState,
    dispatch: (action: Action) => {
    }
});

export const useStyles = createUseStyles({
    tableHeader: {
        backgroundColor: Colors.LIGHT_BLUE,
        color: Colors.WHITE,
        fontFamily: "sans-serif"
    },
    button: {
        background: Colors.LIGHT_GREY,
        '&:hover': {
            background: Colors.DARK_GREY
        }
    },
    chart: {
        width: 400,
        height: 400,
        border: [2, "solid", Colors.DARK_GREY],
        position: "absolute",
        backgroundColor: Colors.WHITE
    },
    circle: {
        position: "absolute",
        backgroundColor: Colors.DARK_BLUE,
        width: 15,
        height: 15,
        borderRadius: "50%",
        zIndex:1000
    }
})


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <ItemContext.Provider value={{state, dispatch}}>
                <ItemTable/>
                <Chart/>
            </ItemContext.Provider>
        </div>
    );
}

export default App;
