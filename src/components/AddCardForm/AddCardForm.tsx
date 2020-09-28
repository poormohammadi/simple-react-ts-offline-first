import React from 'react';

import style from './AddCardForm.module.css';

type Props = {
    onAdd: (e: string) => void;
}

type State = {
    title: string;
}

export class AddCardForm extends React.Component<Props, State>{

    state: State = {
        title: '',
    };

    onClick = () => {
        const { onAdd } = this.props;
        const { title } = this.state;

        onAdd(title);
        this.setState({ title: '' });
    }

    render() {
        const { title } = this.state;

        return (
            <div className={style.container}>
                <input className={style.input} value={title}
                    onChange={e => { this.setState({ title: e.target.value }) }} />
                <button className={style.button} onClick={this.onClick}>Add</button>
            </div>
        )
    }
}