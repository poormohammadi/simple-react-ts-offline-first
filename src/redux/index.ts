import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { Config, OfflineState } from '@redux-offline/redux-offline/lib/types';
import * as localforage from 'localforage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';

import customAxios from '../api/customAxios';
import { cardsReducer } from './cards/reducers';
import { CardsState } from './cards/types';

export interface AppState {
    cards: CardsState,
    offline: OfflineState,
}

offlineConfig.persistOptions = { storage: localforage };

const customConfig: Config = {
    ...offlineConfig,
    effect: (effect, action) => customAxios(effect),
};

const rootReducer = combineReducers({
    cards: cardsReducer,
});

const middleWares = applyMiddleware(logger);

const store = createStore(
    rootReducer,
    undefined,
    compose(
        middleWares,
        offline(customConfig),
    )
);

export default store;