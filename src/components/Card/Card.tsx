import React from 'react';

import style from './Card.module.css';

type Props = {
  text: string;
  id: string;

  onEdit: (e: string) => void;
  onDelete: () => void;
}

type State = {
  value: string;
}

export class Card extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.text,
    };
  }

  render() {
    const { onEdit, onDelete } = this.props;
    const { value } = this.state;

    return (
      <div className={style.card}>

        <input
          type="text"
          value={value}
          className={style.input}
          onChange={e => this.setState({ value: e.target.value })}
        />

        <div className={style.rightSideContainer}>
          <button className={style.update} onClick={() => onEdit(value)}>Update</button>
          <button className={style.delete} onClick={onDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
