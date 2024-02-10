import {ScoreActions} from "../actions/scoreActions";

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ScoreActions.correct:
            return {
                ...state,
                current: state.score.current + 1,
            }
        default:
            return state;
    }
}