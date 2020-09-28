import { CardActions, CardActionsTypes, CardsState } from './types';

const initialState: CardsState = {
    cards: [],
};

export function cardsReducer(state: CardsState = initialState, action: CardActions): CardsState {
    switch (action.type) {
        case CardActionsTypes.AddCard: {
            return {
                ...state,
                cards: [
                    ...state.cards,
                    action.payload,
                ]
            }
        }
        case CardActionsTypes.DeleteCard: {
            return {
                ...state,
                cards: state.cards?.filter(card => card.id !== action.payload)
            }
        }
        case CardActionsTypes.UpdateCard: {
            return {
                ...state,
                cards: state.cards?.map(card =>
                    card.id === action.payload.id ? { ...action.payload } : card
                ),
            }
        }
    }

    return state;
}