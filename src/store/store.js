import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import {taskReducer} from "./reducers/screReducer";

export const initState = {
    score: {
        current: 0
    }
}

const StateContext = createContext(initState);
StateContext.displayName = 'StateContext';

const DispatchContext = createContext(correctAction => null);
DispatchContext.displayName = 'DispatchContext';

const combineReducer = (state, action) => ({
    score: taskReducer(state, action),
    // action: taskReducer(state.action, action as ActionActionType),
    // metric: metricReducer(state.metric, action as MetricActionType),
    // report: shiftSummaryReducer(state.report, action as ShiftSummaryActionsType),
    // causes: rootCausesReducer(state.causes, action as RootCausesActionType),
});

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(combineReducer, initState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export const useSharedState = () => useContext(StateContext);
export const useSharedDispatch = () => useContext(DispatchContext);