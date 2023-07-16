import {Action} from '../actions';
import {ActionType} from '../action-types';
import {ForecastsStateInterface} from '../../interfaces/StatesInterface';

const initialState: ForecastsStateInterface = {
    forecasts: [],
};

const reducer = (
    state: ForecastsStateInterface = initialState,
    action: Action
): ForecastsStateInterface => {
    switch (action.type) {
        case ActionType.SET_FORECAST:
            if (action.payload) {
                state.forecasts.push(action.payload);
            }

            return {
                ...state,
            };
        case ActionType.DELETE_FORECAST:
            if (action.payload) {
                state.forecasts.filter((forecast) => forecast.id !== action.payload?.id);
            }

            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;
