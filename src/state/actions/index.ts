import {ActionType} from '../action-types';
import {LocationInterface} from '../../interfaces/LocationInterface';
import {ForecastInterface} from '../../interfaces/ForecastInterface';

interface SetInputAction {
    type: ActionType.SET_INPUT
    payload: string;
}

interface SetLocationsAction {
    type: ActionType.SET_LOCATIONS
    payload: LocationInterface[];
}

interface SetLocationAction {
    type: ActionType.SET_LOCATION;
    payload: LocationInterface | null;
}

interface SetForecastAction {
    type: ActionType.SET_FORECAST;
    payload: ForecastInterface | null;
}

interface DeleteForecastAction {
    type: ActionType.DELETE_FORECAST;
    payload: ForecastInterface | null;
}

interface UpdateForecastAction {
    type: ActionType.UPDATE_FORECAST;
    payload: ForecastInterface | null;
}

interface SetIsVisibleLanguagesAction {
    type: ActionType.SET_IS_VISIBLE_LANGUAGES;
    payload: boolean;
}

export type Action = SetInputAction
    | SetLocationsAction
    | SetLocationAction
    | SetForecastAction
    | UpdateForecastAction
    | DeleteForecastAction
    | SetIsVisibleLanguagesAction;
