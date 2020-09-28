import { v1 as uuid } from 'uuid';

import { CardModel } from '../../models/card-model';
import { cardRequestConfigs } from './../../api/cards/card-request-configs';
import { CardActionsTypes } from './types';

export function addCard(description: string) {
    const id = uuid();
    return {
        type: CardActionsTypes.AddCard,
        payload: { id, description },
        meta: {
            offline: {
                effect: cardRequestConfigs.addCardConfig(id, description),
            }
        }
    };
}

export function deleteCard(id: string) {
    return {
        type: CardActionsTypes.DeleteCard,
        payload: id,
        meta: {
            offline: {
                effect: cardRequestConfigs.deleteCardConfig(id),
            }
        }
    };
}

export function updateCard(payload: CardModel) {
    return {
        type: CardActionsTypes.UpdateCard,
        payload,
        meta: {
            offline: {
                effect: cardRequestConfigs.updateCardConfig(payload.id, payload.description),
            },
        }
    };
}
