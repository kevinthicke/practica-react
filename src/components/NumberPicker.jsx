import React, { Component } from 'react';
import * as styles from './styles.css';

export default class NumberPicker extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    increaseValue = () => {
        const counter = this.state.value;
        this.setState( { value: counter + 1 } );
    }
    decreaseValue = () => {
        const counter = this.state.value;
        this.setState( { value: counter -1 });
    }
    
    render() {
        const { value } = this.state;
        return (
            <div className={styles.NumberPickerContainer}>
                <button onClick={this.increaseValue}> + </button>
                <span> {value} </span>
                <button onClick={this.decreaseValue}> - </button>
            </div>
        );
    }
}