import React from 'react';

import style from './Card.module.css';

type Props = {
  description: string;
  id: string;

  onEdit: (value: string) => void;
  onDelete: () => void;
}

type State = {
  inputValue: string;
}

export class Card extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue: props.description,
    };
  }

  render() {
    const { onEdit, onDelete } = this.props;
    const { inputValue } = this.state;

    return (
      <div className={style.card}>

        <input
          type="text"
          value={inputValue}
          className={style.input}
          onChange={e => this.setState({ inputValue: e.target.value })}
        />

        <div className={style.rightSideContainer}>
          <button className={style.update} onClick={() => onEdit(inputValue)}>Update</button>
          <button className={style.delete} onClick={onDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
