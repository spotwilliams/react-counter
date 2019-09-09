import React, {Component} from 'react'
import Counter from "./Counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 4},
            {id: 4, value: 0},
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleDelete = (id) => {
        // const counters = this.state.counters.filter(counter => {
        //     return counter.id !== id;
        // });

        // A better expression could be
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters})
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                    >
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;