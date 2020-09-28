import React from 'react';
import { connect } from 'react-redux';

import { AddCardForm } from '../../components/AddCardForm/AddCardForm';
import { Card } from '../../components/Card/Card';
import { CardModel } from '../../models/card-model';
import { AppState } from '../../redux';
import { addCard, deleteCard, updateCard } from '../../redux/cards/actions';

type Props = {
    cards: CardModel[];

    addCard: typeof addCard;
    updateCard: typeof updateCard;
    deleteCard: typeof deleteCard;
}

class Cards extends React.Component<Props>{

    renderCards() {
        const { cards, updateCard, deleteCard } = this.props;

        if (cards.length) {
            return cards.map(card =>
                <Card
                    key={card.id}
                    id={card.id}
                    text={card.description}
                    onEdit={description => {
                        updateCard({ ...card, description })
                    }}
                    onDelete={() => deleteCard(card.id)}
                />
            )
        }

        return <p> No cards!</p>
    }

    render() {
        const { addCard } = this.props;

        return (
            <div className="container">
                {this.renderCards()}
                <AddCardForm onAdd={addCard} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    cards: state.cards.cards,
});

const mapDispatchToProps = (dispatch: any) => ({
    addCard: (description: string) => dispatch(addCard(description)),
    updateCard: (card: CardModel) => dispatch(updateCard(card)),
    deleteCard: (id: string) => dispatch(deleteCard(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);