import React, {useReducer} from 'react';
import {ItemTable} from "./components/ItemTable";
import {Action, initialState, reducer} from "./common/Reducer";
import {createUseStyles} from "react-jss";
import {Colors} from "./common/Colors";
import {Chart} from "./components/Chart";

export const ItemContext = React.createContext({
    state: initialState,
    dispatch: (action: Action) => {
    }
});

export const useStyles = createUseStyles({
    app: {
    },
    table: {
        paddingLeft:20,
        float: "left"
    },
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

    labelOfArea: {
        position: "relative",
        // float: "left",
        color: Colors.WHITE,
        backgroundColor: Colors.LIGHT_BLUE,
        display: "inline-block"
    },
    verticalLine: {
        width: 2,
        position: "absolute",
        backgroundColor: Colors.LIGHT_GREY,
        marginLeft: 200,
        height: 400,
    },
    horizontalLine: {
        height: 2,
        position: "absolute",
        backgroundColor: Colors.LIGHT_GREY,
        marginTop: 200,
        width: 400,
    },
    chart: {
        marginLeft: 20,
        float: "left",
        width: 400,
        height: 400,
        border: [2, "solid", Colors.DARK_GREY],
        position: "relative",
        backgroundColor: Colors.WHITE
    },
    circle: {
        position: "absolute",
        backgroundColor: Colors.DARK_BLUE,
        width: 15,
        height: 15,
        borderRadius: "50%",
        zIndex: 1000
    },
    label: {
        marginTop: 15,
        marginLeft: 15,
        position: "absolute",
        fontSize: 13,
        fontFamily: "sans-serif",
        color: Colors.DARK_BLUE
    }
})


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <ItemContext.Provider value={{state, dispatch}}>
                <Chart/>
                <ItemTable/>
            </ItemContext.Provider>
        </div>
    );
}

export default App;
