import { CardModel } from '../../models/card-model';

export interface CardsState {
    cards: CardModel[];
}

export enum CardActionsTypes {
    AddCard = 'ADD_CARD',
    DeleteCard = 'DELETE_CARD',
    UpdateCard = 'UPDATE_CARD',
}

interface AddCardAction {
    type: CardActionsTypes.AddCard;
    payload: CardModel;
}

interface DeleteCardAction {
    type: CardActionsTypes.DeleteCard;
    payload: string;
}

interface UpdateCardAction {
    type: CardActionsTypes.UpdateCard;
    payload: CardModel;
}

export type CardActions =
    AddCardAction |
    DeleteCardAction |
    UpdateCardAction;
